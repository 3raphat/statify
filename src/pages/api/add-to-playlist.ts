import type { NextApiRequest, NextApiResponse } from 'next'

import { addItemsToPlaylist } from '@/lib/spotify'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions) as {
    access_token: string
  }

  const { playlist_id } = req.query as {
    playlist_id: string
  }
  const { uris } = req.body as {
    uris: string
  }
  await addItemsToPlaylist(session.access_token, playlist_id, uris)

  return res.status(200).json({ message: 'Success' })
}
