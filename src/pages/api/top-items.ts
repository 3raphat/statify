import type { NextApiRequest, NextApiResponse } from 'next'

import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import { getTopItems } from '@/lib/spotify'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions) as {
    access_token: string
  }

  const { type, time_range } = req.query as {
    type: string
    time_range: string
  }
  const response = await getTopItems(session.access_token, type, time_range)
  const { items } = await response.json()

  return res.status(200).json(items)
}
