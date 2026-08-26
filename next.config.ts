import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    transpilePackages: ['three'],
    // swcMinify is true by default in Next.js 13+
    // compiler options for performance
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    images: {
        formats: ['image/avif', 'image/webp'],
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'thisisglance.com',
            },
            {
                protocol: 'https',
                hostname: 'www.technoloader.com',
            },
        ],
    },
    // Silence Turbopack warning with webpack config
    // Silence Turbopack warning with webpack config
    turbopack: {},
    webpack: (config: any) => {
      // Small optimization for three.js bundle
      if (config.optimization) {
        config.optimization.splitChunks = {
          ...config.optimization.splitChunks,
          cacheGroups: {
            three: {
              test: /[\\/]node_modules[\\/]three[\\/]/,
              name: 'three',
              chunks: 'all',
            },
            ...config.optimization.splitChunks?.cacheGroups,
          },
        };
      }
      return config;
    },
};

export default nextConfig;
