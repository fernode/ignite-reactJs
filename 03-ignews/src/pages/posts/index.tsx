import Link from 'next/link'
import Head from 'next/head'

import styles from './styles.module.scss'

type Post = {
	slug: string
	title: string
	excerpt: string
	updatedAt: string
}

interface PostsProps {
	posts: Post[]
}

export default function Posts({ posts }: PostsProps) {
	return (
		<>
			<Head>
				<title> Posts | ig.news </title>
			</Head>

			<main className={styles.container}>
				<div className={styles.posts}>
					<h1>posts</h1>
				</div>
			</main>
		</>
	)
}
