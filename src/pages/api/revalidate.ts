import type { NextApiRequest, NextApiResponse } from 'next'
import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook'

type Data = {
  message: string
}

const secret = process.env.NEXT_PUBLIC_SANITY_WEBHOOK_SECRET as string

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const signature = req.headers[SIGNATURE_HEADER_NAME] as string
  const body = JSON.stringify(req.body) // Read the body into a string

  if (!isValidSignature(body, signature, secret)) {
    res.status(401).json({ message: 'Invalid signature' })
    return
  }

  try {
    await res.revalidate('/');
    return res.json({ message: 'Revalidated' });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send({ message: 'Error while revalidating' });
  }
}