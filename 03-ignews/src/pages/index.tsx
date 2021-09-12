import { Head } from 'next/document'
import styles from '../styles/home.module.scss'

export default function Home() {
	return (
		<>
			<Head>
				<title>Início Ig news</title>
			</Head>

			<main>
				<h1 className={styles.title}>Aplicação next js</h1>
			</main>
		</>
	)
}
