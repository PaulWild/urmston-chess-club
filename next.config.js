const slug = "urmston-chess-club";
const path = process.env.NODE_ENV === "production" ? `/${slug}` : undefined;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: path,
  basePath: path,
  images: {
    loader: "custom",
  },
  i18n: {
    locales: ["en-GB"],
    defaultLocale: "en-GB",
  },
};

module.exports = nextConfig;
