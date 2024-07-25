/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname:
          "/hexschool/2022-web-layout-training/blob/main/typescript-hotel/**",
      },
    ],
  },
};

module.exports = nextConfig;
