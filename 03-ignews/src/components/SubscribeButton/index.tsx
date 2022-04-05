import { signIn, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import React from 'react'
import { api } from 'services/api'
import { getStripeJs } from 'services/stripe-js'
import styles from './styles.module.scss'

interface SubscriptionButtonProps {
	priceId: string
}

export function SubscribeButton({ priceId }: SubscriptionButtonProps) {
	const router = useRouter()
	const [session] = useSession()

	async function handleSubscribe() {
		if (!session) {
			signIn('github')
			return
		}

		if (session.activeSubscription) {
			router.push('/posts')
			return
		}

		try {
			const response = await api.post('/subscribe')
			const { sessionId } = response.data

			const stripeJs = await getStripeJs()
			await stripeJs.redirectToCheckout({ sessionId })
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<button className={styles.subscribeButton} onClick={handleSubscribe}>
			Subscribe now
		</button>
	)
}
