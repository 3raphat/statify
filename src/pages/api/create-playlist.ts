import type { NextApiRequest, NextApiResponse } from 'next'

import { getSession } from 'next-auth/react'
import { createPlaylist } from '@/libs/spotify'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { access_token } = (await getSession({ req })) as {
    access_token: string
  }

  const { user_id } = req.query as {
    user_id: string
  }
  const { name, description } = req.body as {
    name: string
    description: string
  }
  await createPlaylist(access_token, user_id, name, description)

  return res.status(200).json({ message: 'Success' })
}
