import { signIn, signOut, useSession } from 'next-auth/client'
import { AiFillGithub } from 'react-icons/ai'
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss'

export const SignButton = () => {
	const [session] = useSession()

	return session ? (
		<>
			<button className={styles.signButton} onClick={() => signOut()}>
				<AiFillGithub color="#04D361" />
				{session.user.name}
				<FiX color="#737380" className={styles.closeIcon} />
			</button>
		</>
	) : (
		<>
			<button className={styles.signButton} onClick={() => signIn('github')}>
				<AiFillGithub color="#eba417" />
				Sign in with github
			</button>
		</>
	)
}
