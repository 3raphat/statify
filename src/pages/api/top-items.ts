import type { NextApiRequest, NextApiResponse } from 'next'

import { getSession } from 'next-auth/react'
import { getTopItems } from '@/libs/spotify'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { access_token } = (await getSession({ req })) as {
    access_token: string
  }

  const { type, time_range } = req.query as {
    type: string
    time_range: string
  }
  const response = await getTopItems(access_token, type, time_range)
  const { items } = await response.json()

  return res.status(200).json(items)
}
