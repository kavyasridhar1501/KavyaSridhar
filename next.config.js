/** @type {import('next').NextConfig} */
// Must match the GitHub repo name, since Pages serves the site at /<repo-name>/
const basePath = "/KavyaSridhar";

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
