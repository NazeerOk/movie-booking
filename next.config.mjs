/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'assetscdn1.paytm.com',
            port: '',
            pathname: '/images/**',
          },
        ],
      },
    reactStrictMode:false
};

export default nextConfig;
