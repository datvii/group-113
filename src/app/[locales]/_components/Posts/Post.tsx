import React from 'react';
import { PostType } from './types';
import styles from './posts.module.scss';
import Link from 'next/link';
import { baseUrl } from '@/app/[locales]/services';
import Image from 'next/image';

const Post = ({ title, img, content, author, createdAt, updatedAt, id }: PostType) => {
	return (
		<li>
			<Link href={`/posts/${id}`}>
				<picture className={styles.posts__img}>
					<Image
						src={`${baseUrl}/${img?.url}`}
						width={500}
						height={300}
						quality={75}
						style={{
							width: '100%',
							height: 'auto',
						}}
						alt={img?.alternativeText}
					/>
					{/* <img src={`${baseUrl}/${img?.url}`} alt={img?.alternativeText} /> */}
				</picture>
				<div className={styles.posts__list__content}>
					<h3>{title}</h3>
					<p>{content}</p>
					<div>
						<time dateTime={createdAt ?? updatedAt}>
							{new Date(createdAt ?? updatedAt).toLocaleString()}
						</time>
						<span>{author}</span>
					</div>
				</div>
			</Link>
		</li>
	);
};

export default Post;
