/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  output: "export",
  distDir: "out",  // Ensures correct output folder
  images: { unoptimized: true },  // Fixes image issues on GitHub Pages
  basePath: isProd ? "/Portfolio" : "",
  assetPrefix: isProd ? "/Portfolio/" : "",
};

module.exports = nextConfig;
