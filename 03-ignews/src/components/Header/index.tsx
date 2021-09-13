import { SignButton } from 'components/SignBottom'
import styles from './styles.module.scss'

export function Header() {
	return (
		<header className={styles.headerContainer}>
			<div className={styles.headerContent}>
				<img src="/images/logo.svg" alt="logo ig news" />
				<nav>
					<ul>
						<li>
							<a href="/" className={styles.active}>
								Home
							</a>
						</li>
						<li>
							<a href="/posts">Posts</a>
						</li>
					</ul>
				</nav>

				<SignButton />
			</div>
		</header>
	)
}
