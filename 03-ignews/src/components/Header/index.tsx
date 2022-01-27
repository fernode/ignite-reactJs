import Image from 'next/image'
import { SignButton } from 'components/SignBottom'
import styles from './styles.module.scss'
import ActiveLink from 'components/ActiveLink'

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
							<ActiveLink activeClassName={styles.active} href="/">
								<a>Home</a>
							</ActiveLink>
						</li>
						<li>
							<ActiveLink activeClassName={styles.active} href="/posts">
								<a>Posts</a>
							</ActiveLink>
						</li>
					</ul>
				</nav>

				<SignButton />
			</div>
		</header>
	)
}
