'use client';

import { fetcher } from '@/app/[locales]/services';
import { useRouter, usePathname } from 'next/navigation';
import React, { ChangeEvent, useState } from 'react';
import useSWR from 'swr';
import { LanguageListType, url } from './types';

const LanguageSwitcher = () => {
	const router = useRouter();
	const pathname = usePathname();
	const [selectedOption, setSelectedOption] = useState<Record<string, string>>({
		code: 'en',
		name: 'English',
	});

	const { data: locales, error } = useSWR(`${url}`, fetcher);
	console.log(locales, error);

	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const el = e.target;

		setSelectedOption(() => ({
			code: el.value,
			name: el.value,
		}));
		console.log(el.value);

		router.push(`/${el.value}`);
	};

	console.log(pathname, locales, selectedOption);

	return (
		<select onChange={handleChange} defaultValue={selectedOption.name ?? pathname?.split('/')[1]}>
			{!locales ? (
				<option key={1}>Loading...</option>
			) : (
				locales.map((lang: LanguageListType) => (
					<option key={lang.id} value={lang.code}>
						{lang.name.split(' ')[0]}
					</option>
				))
			)}
		</select>
	);
};

export default LanguageSwitcher;
