/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // Ensures the project is exported as static files
  assetPrefix: isProd ? '/Rent-car/' : '', // Adjust the prefix for GitHub Pages
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
  trailingSlash: true, // Ensure all paths end with a slash
};

export default nextConfig;
