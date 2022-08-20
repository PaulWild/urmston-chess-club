const slug = "urmston-chess-club";
const path = process.env.NODE_ENV === "production" ? `/${slug}` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: path,
  basePath: path,
  images: {
    loader: "custom",
  },
};

module.exports = nextConfig;
