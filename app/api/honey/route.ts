import { userAgent } from 'next/server';

export async function GET(req: Request) {
  const useragent = userAgent(req);

  console.log('USERAGENT', useragent);

  console.log('HEADERS', req.headers);

  console.log('REFERRER', req.referrer);

  return Response.json({
    message: 'Hello World',
  });
}
