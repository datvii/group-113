import React from 'react';
import styles from '../../_components/Posts/posts.module.scss';
import { baseUrl, getAllPosts } from '@/app/[locales]/services';
import { useRouter } from 'next/router';

export type TPostParams = {
	params: {
		id: number;
	};
};

const Post = async ({ params }: TPostParams) => {
	const posts = await getAllPosts();
	const { id } = await params;
	console.log(posts, id);
	const post = posts.data.find((el: { id: string | number }) => +el.id === +id);
	console.log(post);
	// const router = useRouter();

	return (
		<main>
			<article className={styles.post}>
				<button type="button" onClick={() => 'router.back()'}>
					Click here to go back
				</button>
				<picture>
					<img src={baseUrl + post.img?.url} alt={post.img?.alternativeText} />
				</picture>
				<div className={styles.post__content}>
					<h3>{post.title}</h3>
					<p>{post.content}</p>
					<div>
						<time dateTime={post.createdAt ?? post.updatedAt}>
							{post.createdAt ?? post.updatedAt}
						</time>
						<span>{post.author}</span>
					</div>
				</div>
			</article>
		</main>
	);
};

export default Post;
