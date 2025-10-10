/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    qualities: [90],
  },
  redirects: async () => {
    return [
      {
        source: '/profile',
        destination: '/info',
        permanent: true,
      },
      {
        source: '/project/pusher-chameleon',
        destination: '/projects/pusher-chameleon',
        permanent: true,
      },
      {
        source: '/journal/:path',
        destination: '/posts/:path',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
