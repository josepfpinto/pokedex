/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '80',
        pathname:
          '/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/**',
      },
    ],
  },
};

module.exports = nextConfig;
