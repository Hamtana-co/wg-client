/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.wegamers.ir",
        pathname: "/upload/**",
      },
    ],
  },
  output: "standalone",
};

export default nextConfig;
