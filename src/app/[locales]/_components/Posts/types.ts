export type PostsType = PostType[];
export type PostType = {
	id: string;
	img: {
		url: string;
		alternativeText: string;
	};
	author: string;
	title: string;
	content: string;
	createdAt: string;
	updatedAt: string;
};
