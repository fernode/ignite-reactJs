import Prismic from '@prismicio/client'
import { apiEndpoint, accessToken } from '../../prismicConfiguration'

// Client method to query documents from the Prismic repo
export const Client = (req = null) =>
	Prismic.client(apiEndpoint, createClientOptions(req, accessToken))

const createClientOptions = (req = null, prismicAccessToken = null) => {
	const reqOption = req ? { req } : {}
	const accessTokenOption = prismicAccessToken
		? { accessToken: prismicAccessToken }
		: {}
	return {
		...reqOption,
		...accessTokenOption
	}
}

export default Client
