import { baseUrl } from '../../services';

export type LanguageListType = {
	id: React.Key | null | undefined;
	code: string;
	name: string;
};

const path = '/api/i18n/locales';
export const url = new URL(path, baseUrl);
