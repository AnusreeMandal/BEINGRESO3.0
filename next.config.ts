import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  /* other config options here */
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/components': path.resolve(__dirname, 'components'),
       '@/utils': path.resolve(__dirname, 'utils'),
        '@/styles': path.resolve(__dirname, 'styles'),
         '@/data': path.resolve(__dirname, 'data'), 
         '@': path.resolve(__dirname, './')
    };
    return config;
  },
};

export default nextConfig;

