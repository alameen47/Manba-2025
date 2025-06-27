/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      // If you are using an external service for images, add its domain here.
      // e.g., 'images.unsplash.com',
    ],
  },
};

module.exports = nextConfig;
