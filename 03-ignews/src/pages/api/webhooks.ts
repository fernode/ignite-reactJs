import { NextApiRequest, NextApiResponse } from 'next'
import { stripe } from 'services/stripe'
import { Readable } from 'stream'
import Stripe from 'stripe'

async function buffer(readable: Readable) {
	const chunks = []

	for await (const chunk of readable) {
		chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
	}

	return Buffer.concat(chunks)
}

export const config = {
	api: {
		bodyParser: false
	}
}

const relevantEvents = new Set('checkout.session.completed')

export default async function hooks(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'POST') {
		const buf = await buffer(req)
		const secret = req.headers['stripe-signature']

		let event: Stripe.Event

		try {
			event = stripe.webhooks.constructEvent(
				buf,
				secret,
				process.env.STRIPE_WEBHOOK_SECRET
			)
		} catch (error) {
			return res.status(404).send(`Webhook error ${error.message}`)
		}

		let type = event.type

		if (relevantEvents.has(type)) {
			console.log(`Evento recebido ${event}`)
		}

		return res.json({ received: true })
	} else {
		res.setHeader('Allow', 'POST')
		res.status(405).end('Method is not allowed')
	}
}
