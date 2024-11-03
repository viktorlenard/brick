import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => [
    {
      source: "/logout",
      destination: "/auth/logout",
      permanent: true
    },
  ],
  rewrites: async () => {
    return [
      {
        source: '/consumer/:path*',
        destination: '/:path*',
      }
    ]
  }
};

export default nextConfig;
