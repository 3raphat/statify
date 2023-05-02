import type { NextApiRequest, NextApiResponse } from 'next'

import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import { getUsersPlaylists } from '@/lib/spotify'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions) as {
    access_token: string
  }

  const response = await getUsersPlaylists(session.access_token)
  const { items } = await response.json()

  return res.status(200).json(items)
}
