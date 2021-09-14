import Link from 'next/link'
import Image from 'next/image'
import { SignButton } from 'components/SignBottom'
import styles from './styles.module.scss'

export function Header() {
	return (
		<header className={styles.headerContainer}>
			<div className={styles.headerContent}>
				<Image
					src="/images/logo.svg"
					alt="logo ig news"
					width={108}
					height={30}
				/>
				<nav>
					<ul>
						<li>
							<Link href="/">
								<a className={styles.active}>Home</a>
							</Link>
						</li>
						<li>
							<Link href="/posts">
								<a>Posts</a>
							</Link>
						</li>
					</ul>
				</nav>

				<SignButton />
			</div>
		</header>
	)
}
