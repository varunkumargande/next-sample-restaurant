/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        // port: '',
        // pathname: '',
      },
    ],
    domains: ['cdn.pixabay.com'],
  },
}

module.exports = nextConfig
