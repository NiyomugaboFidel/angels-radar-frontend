import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enables optimized server-side rendering or standalone builds
  output: 'standalone',

  // Redirects configuration
  async redirects() {
    return [
      {
        source: '/old-route', // The route to be redirected
        destination: '/new-route', // The new route
        permanent: true, // Indicates a 301 (permanent) redirect
      },
    ];
  },


  reactStrictMode: true, 
  swcMinify: true, 
};

export default nextConfig;
