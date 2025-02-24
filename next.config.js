/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",  // Ensures correct output folder
  images: { unoptimized: true },  // Fixes image issues on GitHub Pages
  basePath: "/Portfolio",  // Matches your GitHub repo name (case-sensitive!)
  assetPrefix: "/Portfolio"
};

module.exports = nextConfig;
