import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

const nextConfig: NextConfig = {
	reactStrictMode: true,
	// i18n: {
	// 	locales: ['en', 'uk-UA', 'fr'],
	// 	defaultLocale: 'en',
	// },
	images: {
		domains: ['localhost'],
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '1337',
			},
		],
	},
};

export default withNextIntl(nextConfig);
