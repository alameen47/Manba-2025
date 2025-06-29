/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      // Add image domains here, if needed.
    ],
  },
  output: 'standalone', // Ensures compatibility with Vercel.
};

module.exports = nextConfig;