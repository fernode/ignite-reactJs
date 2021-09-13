import { AiFillGithub } from 'react-icons/ai'
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss'

export const SignButton = () => {
	const isUserLoggedIn = true

	return isUserLoggedIn ? (
		<>
			<button className={styles.signButton}>
				<AiFillGithub color="#04D361" />
				FernandoSilva
				<FiX color="#737380" className={styles.closeIcon} />
			</button>
		</>
	) : (
		<>
			<button className={styles.signButton}>
				<AiFillGithub color="#eba417" />
				Sign in with github
			</button>
		</>
	)
}
