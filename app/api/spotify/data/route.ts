import fs from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';

const data = fs.readFileSync(
  path.resolve(process.cwd(), 'app/api/spotify/playlists.json'),
  'utf8'
);

export async function GET() {
  if (!data) {
    return NextResponse.json({ error: 'No data found' }, { status: 404 });
  }

  const dataSortedByDate = JSON.parse(data).sort(
    (a: any, b: any) => new Date(a.date) - new Date(b.date)
  );

  return NextResponse.json(dataSortedByDate);
}
