import path from 'path';
import fs from 'fs';

import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export const getPostsFiles = () => {
	return fs.readdirSync(postsDirectory);
};

export function getPostData(postIdentifier: string) {
	const postSlug = postIdentifier.replace(/\.md$/, '');
	const filePath = path.join(postsDirectory, `${postSlug}.md`);
	const fileContent = fs.readFileSync(filePath, 'utf-8');
	const { data, content } = matter(fileContent);

	const postData = {
		...data,
		slug: postSlug,
		content,
	};

	return postData;
}

export function getAllPosts() {
	const postFiles = getPostsFiles();
	const allPosts = postFiles.map((postFile) => {
		return getPostData(postFile);
	});
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const sortedPosts = allPosts.sort((postA: any, postB: any) => (postA.date > postB.date ? -1 : 1)); // latest posts

	return sortedPosts;
}
