import { NextApiRequest, NextApiResponse } from 'next'
import { Readable } from 'stream'

export default function hooks(req: NextApiRequest, res: NextApiResponse) {
	console.log('evento recebido')

	return res.status(200).json({ ok: true })
}
