import Head from 'next/head'
import styles from '../styles/home.module.scss'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1 className={styles.title}>Aplicação next js</h1>
			</main>

			<footer>
				<p>Aqui ficará o footer</p>
			</footer>
		</div>
	)
}
