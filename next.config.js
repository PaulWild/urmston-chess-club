const basePath =
  process.env.NODE_ENV === "production" ? "/urmston-chess-club" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: `${basePath}/`,
};

module.exports = nextConfig;
