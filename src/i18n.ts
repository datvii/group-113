import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
	const locale = await requestLocale;
	console.log(locale);

	return {
		locale,
		messages: (await import(`./locales/${locale}.json`)).default,
	};
});

// import { getRequestConfig } from 'next-intl/server';
// // import { routing } from "./routing";

// export default getRequestConfig(async ({ requestLocale }) => {
// 	// 이는 일반적으로 `[locale]` 세그먼트에 해당합니다.
// 	const locale = await requestLocale;

// 	// 유효한 로캘이 사용되었는지 확인하세요.
// 	// if (!locale || !routing.locales.includes(locale as never)) {
// 	//   locale = routing.defaultLocale;
// 	// }

// 	return {
// 		locale,
// 		messages: (await import(`./locales/${locale}.json`)).default,
// 	};
// });
