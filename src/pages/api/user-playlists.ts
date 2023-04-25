import type { NextApiRequest, NextApiResponse } from 'next'

import { getSession } from 'next-auth/react'
import { getUsersPlaylists } from '@/lib/spotify'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { access_token } = (await getSession({ req })) as {
    access_token: string
  }

  const response = await getUsersPlaylists(access_token)
  const { items } = await response.json()

  return res.status(200).json(items)
}
