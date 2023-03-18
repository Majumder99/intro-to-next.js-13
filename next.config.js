/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["https://image.tmdb.org/t/p/w500/"],
  },
};

module.exports = nextConfig;
