/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  redirects: async () => {
    return [
      {
        source: '/profile',
        destination: '/',
        permanent: true,
      },
      {
        source: '/project/pusher-chameleon',
        destination: '/projects/pusher-chameleon',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
