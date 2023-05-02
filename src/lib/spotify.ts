const BASE_ENDPOINT = 'https://api.spotify.com/v1'

export const getTopItems = async (access_token: string, type: string, time_range: string) => {
  return fetch(`${BASE_ENDPOINT}/me/top/${type}?time_range=${time_range}&limit=50`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}

export const getUsersPlaylists = async (access_token: string) => {
  return fetch(`${BASE_ENDPOINT}/me/playlists`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}

export const addItemsToPlaylist = async (access_token: string, playlist_id: string, uris: string) => {
  return fetch(`${BASE_ENDPOINT}/playlists/${playlist_id}/tracks?uris=${uris}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}

export const createPlaylist = async (access_token: string, user_id: string, name: string, description: string) => {
  return fetch(`${BASE_ENDPOINT}/users/${user_id}/playlists`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    body: JSON.stringify({ name, description }),
  })
}
