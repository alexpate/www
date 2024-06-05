import { NextRequest, NextResponse } from 'next/server';

export const REDIRECT_URI = 'http://localhost:3000/api/spotify/callback';

export async function GET(req: NextRequest) {
  const scope = 'playlist-read-private playlist-read-collaborative';
  const clientId = process.env.SPOTIFY_CLIENT_ID;

  const url = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${encodeURIComponent(
    scope
  )}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;

  return NextResponse.redirect(url);
}
