import { session, signIn } from 'next-auth/client'
import React from 'react'
import { api } from 'services/api'
import { getStripeJs } from 'services/stripe-js'
import styles from './styles.module.scss'

interface SubscriptionButtonProps {
	priceId: string
}

export function SubscribeButton({ priceId }: SubscriptionButtonProps) {
	async function handleSubscribe() {
		if (!session) {
			signIn('github')
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
