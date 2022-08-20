const basePath =
  process.env.NODE_ENV === "production" ? "/urmston-chess-club" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: `${basePath}/`,
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};

module.exports = nextConfig;
