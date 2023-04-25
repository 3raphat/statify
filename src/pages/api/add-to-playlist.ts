import type { NextApiRequest, NextApiResponse } from 'next'

import { getSession } from 'next-auth/react'
import { addItemsToPlaylist } from '@/lib/spotify'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { access_token } = (await getSession({ req })) as {
    access_token: string
  }

  const { playlist_id } = req.query as {
    playlist_id: string
  }
  const { uris } = req.body as {
    uris: string
  }
  await addItemsToPlaylist(access_token, playlist_id, uris)

  return res.status(200).json({ message: 'Success' })
}
