// https://jsonplaceholder.typicode.com/posts
// import useSWR from 'swr';
export const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:1337';

export const fetcher = (url: string | URL | Request) => fetch(url).then((res) => res.json());
const getAllPosts = async () => {
	const path = '/api/posts/?populate[0]=img&locale=en';
	const url = new URL(path, baseUrl);

	const response = await fetch(`${url}`);

	if (!response.ok) throw new Error('Failed to fetch posts');

	const posts = await response.json();

	return posts;
};

const getTeamMembers = async () => {
	const path = '/api/teams/?populate[0]=img&locale=uk-UA';
	const url = new URL(path, baseUrl);

	const response = await fetch(`${url}`);

	if (!response.ok) throw new Error('Failed to fetch team members');

	const members = await response.json();

	return members;
};

const getLocales = async () => {
	const path = '/api/i18n/locales';
	const url = new URL(path, baseUrl);

	// eslint-disable-next-line react-hooks/rules-of-hooks
	// const { data, error } = useSWR(`${url}`, fetcher);

	// if (error) return 'Failed to fetch locales';
	// if (!data) return 'Loading...';

	const response = await fetch(`${url}`);

	if (!response.ok) throw new Error('Failed to fetch locales');

	const locales = await response.json();

	return locales;
};

export { getAllPosts, getTeamMembers, getLocales };
