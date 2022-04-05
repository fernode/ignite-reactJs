import { useRouter } from 'next/router'
import Head from 'next/head'
import React from 'react'
import Client from 'services/prismic'
import { getSession } from 'next-auth/client'
import { RichText } from 'prismic-dom'
import styles from './post.module.scss'
import { redirect } from 'next/dist/server/api-utils'

interface PostProps {
	post: {
		slug: string
		title: string
		content: string
		updatedAt: string
	}
}

function Post({ post }: PostProps) {
	const router = useRouter()
	if (router.isFallback) return null

	return (
		<>
			<Head>
				<title>{post.title}</title>
			</Head>
			<main className={styles.container}>
				<article className={styles.post}>
					<h1>{post.title}</h1>
					<time>{post.updatedAt}</time>
					<div
						className={styles.postContent}
						dangerouslySetInnerHTML={{ __html: post.content }}
					/>
				</article>
			</main>
		</>
	)
}

export const getServerSideProps = async ({ req, params }) => {
	const session = await getSession({ req })
	const { slug } = params
	const prismic = Client(req)
	const response = await prismic.getByUID('publication', String(slug), {})
	if (!session.activeSubscription) {
		return {
			redirect: {
				destination: '/',
				permanent: false
			}
		}
	}

	if (!response) return { notFound: true }

	const post = {
		slug,
		title: RichText.asText(response.data.title),
		content: RichText.asHtml(response.data.content),
		updatedAt: new Date(response.last_publication_date).toLocaleDateString(
			'pt-BR',
			{
				day: '2-digit',
				month: 'long',
				year: 'numeric'
			}
		)
	}

	return {
		props: {
			post
		}
	}
}

export default Post
