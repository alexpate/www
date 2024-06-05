import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import pLimit from 'p-limit';

const trackLimit = pLimit(1);
const trackAudioFeaturesLimit = pLimit(1);

export async function GET() {
  if (!process.env.SPOTIFY_ACCESS_TOKEN) {
    return NextResponse.json({
      error: 'Missing Spotify access token',
    });
  }

  try {
    const playlists = await fetchPlaylists();

    const playlistsWithTracks = await Promise.all(
      playlists.map(async (playlist) => {
        return trackLimit(async () => {
          const playlistTracks = await fetchPlaylistTracks(playlist.tracksHref);

          const playlistTracksWithAudioFeatures = await Promise.all(
            playlistTracks.map(async (track) => {
              return trackAudioFeaturesLimit(async () => {
                const audioFeatures = await fetchTrackAudioFeatures(track.id);

                console.log(audioFeatures);

                return {
                  ...track,
                  audioFeatures,
                };
              });
            })
          );

          const averageValence =
            playlistTracksWithAudioFeatures.reduce(
              (sum, track) => sum + (track?.audioFeatures?.valence || 0),
              0
            ) / playlistTracksWithAudioFeatures.length;

          const averageDanceability =
            playlistTracksWithAudioFeatures.reduce(
              (sum, track) => sum + (track?.audioFeatures?.danceability || 0),
              0
            ) / playlistTracksWithAudioFeatures.length;

          const averageLiveness =
            playlistTracksWithAudioFeatures.reduce(
              (sum, track) => sum + (track?.audioFeatures?.liveness || 0),
              0
            ) / playlistTracksWithAudioFeatures.length;

          const averageTempo =
            playlistTracksWithAudioFeatures.reduce(
              (sum, track) => sum + (track?.audioFeatures?.tempo || 0),
              0
            ) / playlistTracksWithAudioFeatures.length;

          const averageEnergy =
            playlistTracksWithAudioFeatures.reduce(
              (sum, track) => sum + (track?.audioFeatures?.energy || 0),
              0
            ) / playlistTracksWithAudioFeatures.length;

          return {
            ...playlist,
            date: extractDateFromPlaylistName(playlist.name),
            averageValence,
            averageDanceability,
            averageLiveness,
            averageTempo,
            averageEnergy,
          };
        });
      })
    );

    await writePlaylistDataToFile(JSON.stringify(playlistsWithTracks));

    return NextResponse.json(playlistsWithTracks);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

async function writePlaylistDataToFile(data: any) {
  const filePath = path.resolve(
    process.cwd(),
    'app/api/spotify/playlists.json'
  );
  fs.writeFile(filePath, data, 'utf8', (err) => {
    if (err) {
      console.error('An error occurred while writing to the file:', err);
    }
  });
}

async function fetchPlaylistTracks(
  href: string,
  tracks: any[] = []
): Promise<any[]> {
  const response = await fetch(href, {
    headers: {
      Authorization: `Bearer ${process.env.SPOTIFY_ACCESS_TOKEN}`,
    },
  });

  const data = await response.json();
  tracks.push(...data.items);

  if (data.next) {
    return fetchPlaylistTracks(data.next, tracks);
  } else {
    return tracks.map((track) => ({
      id: track.track.id,
      name: track.track.name,
      artist: track.track.artists[0].name,
    }));
  }
}

async function fetchTrackAudioFeatures(trackId: string): Promise<any> {
  if (!trackId) {
    return;
  }

  const response = await fetch(
    `https://api.spotify.com/v1/audio-features/${trackId}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.SPOTIFY_ACCESS_TOKEN}`,
      },
    }
  );

  return response.json();
}

async function fetchPlaylists(
  url: string = 'https://api.spotify.com/v1/me/playlists',
  playlists: any[] = []
): Promise<any[]> {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.SPOTIFY_ACCESS_TOKEN}`,
    },
  });

  const data = await response.json();
  playlists.push(...data.items);

  if (data.next) {
    return fetchPlaylists(data.next, playlists);
  } else {
    return playlists
      .filter((playlist) => /^(\d{2})\.(\d{2})( \/\/.*)?$/.test(playlist.name))
      .map((playlist) => ({
        id: playlist.id,
        name: playlist.name,
        tracksHref: playlist.tracks.href,
        imageHref: playlist.images[0]?.url || '',
      }));
  }
}

function extractDateFromPlaylistName(name: string): string | null {
  const match = name.match(/^(\d{2})\.(\d{2})( \/\/.*)?$/);
  if (match) {
    const year = `20${match[1]}`;
    const month = match[2];
    return `${year}-${month}-01`;
  }
  return null;
}
