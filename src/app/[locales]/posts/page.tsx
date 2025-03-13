import React from 'react';
import { getAllPosts } from '@/app/[locales]/services';
import { PostType } from '@/app/[locales]/_components/Posts/types';
import styles from '../_components/Posts/posts.module.scss';
import Post from '../_components/Posts/Post';
import InfoBlock from '../_components/InfoBlock';
import Head from 'next/head';

const Posts = async () => {
	const posts = await getAllPosts();

	return (
		<>
			<Head>
				<title>All Posts</title>
				<meta name="description" content="A list of posts!" />
			</Head>
			<main className="main">
				<section className={styles.posts}>
					<div className="container">
						<InfoBlock
							render={() => (
								<>
									<h1>Posts</h1>
									<p>ad asd asd as dasd as daaasd ad</p>
								</>
							)}
						/>
						<ul className={styles.posts__list}>
							{posts.data.map((post: PostType) => (
								<Post key={post.id} {...post} />
							))}
						</ul>
					</div>
				</section>
			</main>
		</>
	);
};

export default Posts;

// Fetch data at build time
// Posts.getInitialProps = async () => {
// 	// eslint-disable-next-line @typescript-eslint/no-explicit-any
// 	const pageProps: any = {};

// 	try {
// 		const posts = (await getAllPosts()) || [];

// 		pageProps['posts'] = posts;
// 		// eslint-disable-next-line @typescript-eslint/no-unused-vars
// 	} catch (error) {}

// 	return { pageProps };
// };
// export async function getStaticProps() {
// 	const posts = (await getAllPosts()) || [];

// 	return {
// 		props: { posts },
// 	};
// }
