/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "www.themealdb.com", protocol: "https" }],
  },
};

export default nextConfig;
