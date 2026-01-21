/** @type {import('next').NextConfig} */

const cmsPath =
  process?.env?.NEXT_PUBLIC_CMS_URL === undefined
    ? '/'
    : process?.env?.NEXT_PUBLIC_CMS_URL.replace(/^https?:\/\//, '');

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV !== 'production',
  register: true,
  scope: '/',
  sw: 'service-worker.js',
});

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
  },
  experimental: { esmExternals: true },
   images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*", 
      },
    ],
  },
};

module.exports = withPWA(nextConfig);
