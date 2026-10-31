/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Static export: works on Vercel and Cloudflare Pages with no server.
  output: "export",
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
