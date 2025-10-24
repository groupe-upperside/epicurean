/** @type {import('next').NextConfig} */
import {NextConfig} from "next";

const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./lib/i18n/i18n.ts')

const nextConfig: NextConfig = {
    images: {
        formats: ['image/webp', 'image/avif'],
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'storage.googleapis.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: '1-files-biotech-dental-clt-cdn.secure4all.xyz',
                port: '',
                pathname: '/data/Epicurian/**',
            },
        ],
    },
};

module.exports = withNextIntl(nextConfig);
