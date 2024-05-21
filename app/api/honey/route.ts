import { NextRequest, userAgent } from 'next/server';

export async function GET(req: NextRequest) {
  const useragent = userAgent(req);

  console.log('REQ', req);

  console.log('USERAGENT', useragent);

  console.log('HEADERS', req.headers);

  console.log('REFERRER', req.referrer);

  console.log('GEO', req.geo);
  console.log('IP FORWARDED', req.headers.get('X-Forwarded-For'));
  console.log('IP VERCEL', req.ip);

  return Response.json({
    message: 'Hello World',
  });
}
