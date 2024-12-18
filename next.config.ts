import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    domains: ['example.com','res.cloudinary.com'],
  },

  async redirects() {
    return [
      {
        source: '/old-route',
        destination: '/new-route', 
        permanent: true, 
      },
    ];
  },


  reactStrictMode: true, 

};

export default nextConfig;
