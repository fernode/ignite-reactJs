import { SubscribeButton } from 'components/SubscribeButton'
import Head from 'next/head'
import Image from 'next/image'
import styles from './home.module.scss'

export default function Home() {
	return (
		<>
			<Head>
				<title>Home | Ig news</title>
			</Head>

			<main className={styles.contentContainer}>
				<section className={styles.hero}>
					<h2>👏🏽 Hey, welcome</h2>
					<h1>
						News about <br /> the <span>React</span> world
					</h1>
					<p>
						Get acess to all the publications <br />{' '}
						<span>for $9,90 month</span>
					</p>

					<SubscribeButton />
				</section>

				<Image
					src="/images/avatar.svg"
					alt="Girl coding"
					width={334}
					height={520}
				/>
			</main>
		</>
	)
}
