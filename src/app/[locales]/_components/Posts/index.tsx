import React from 'react';
import Post from './Post';
import { PostsType } from './types';
import styles from './posts.module.scss';
import { getAllPosts } from '@/app/[locales]/services';

const AllPosts = ({ posts }: { posts: PostsType }) => {
	return (
		<section className={styles.posts}>
			<div className="container">
				<h1>Posts</h1>
				<p>ad asd asd as dasd as daaasd ad</p>
				<ul className={styles.posts__list}>
					{posts.map((post) => (
						<Post key={post.id} {...post} />
					))}
				</ul>
			</div>
		</section>
	);
};

export default AllPosts;

// Fetch data at build time
export async function getStaticProps() {
	try {
		const response = await getAllPosts();
		return {
			props: { posts: response || [] },
		};
	} catch (error) {
		console.error('Failed to fetch posts:', error);
		return {
			props: { posts: [] },
		};
	}
}
