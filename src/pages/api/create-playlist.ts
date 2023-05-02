import type { NextApiRequest, NextApiResponse } from 'next'

import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { createPlaylist } from '@/lib/spotify'
import { getServerSession } from 'next-auth'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions) as {
    access_token: string
  }

  const { user_id } = req.query as {
    user_id: string
  }
  const { name, description } = req.body as {
    name: string
    description: string
  }
  await createPlaylist(session.access_token, user_id, name, description)

  return res.status(200).json({ message: 'Success' })
}
