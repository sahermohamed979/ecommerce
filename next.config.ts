import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ecommerce.routemisr.com",
        pathname: "/*/**",
      },
      {
        protocol: "https",
        hostname: "img.icons8.com",
        pathname: "/*/**",
      },

    ],
  },
};

export default nextConfig;
