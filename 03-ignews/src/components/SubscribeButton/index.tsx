import React from 'react'
import styles from './styles.module.scss'

interface SubscriptionButtonProps {
	priceId: string
}

export function SubscribeButton({ priceId }: SubscriptionButtonProps) {
	return <button className={styles.subscribeButton}>Subscribe now</button>
}
