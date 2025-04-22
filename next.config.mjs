/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [], // Add external domains here if using hosted images
        formats: ['image/webp'],
        dangerouslyAllowSVG: true, // optional if using SVG
      },
};

export default nextConfig;
