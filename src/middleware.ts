import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
	locales: ['en', 'uk-UA'], // A list of all locales that are supported
	defaultLocale: 'uk-UA',
	// localePrefix: {
	// 	mode: 'always',
	// },
});

export const config = {
	matcher: ['/', '/(uk-UA|en)/:path*', '/((?!api|_next|.*\\..*).*)'],
};
