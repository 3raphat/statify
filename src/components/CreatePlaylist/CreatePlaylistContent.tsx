import { Button, Stack, useToast } from '@chakra-ui/react'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import InputWrapper from '../InputWrapper'

const CreatePlaylistContent = () => {
  const { data: session } = useSession()
  const toast = useToast()

  const [playlistName, setPlaylistName] = useState('')

  const handleCratePlaylist = async () => {
    if (playlistName.length === 0) return
    const res = await fetch(`/api/create-playlist?user_id=${session?.user.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: playlistName,
        description: 'Created by Statify with <3 from my top tracks',
      }),
    })
    if (res.status === 200) {
      toast({
        title: 'Playlist created',
        description: 'Your playlist has been created',
        status: 'success',
        isClosable: true,
      })
    }
  }

  return (
    <Stack>
      <InputWrapper
        isRequired
        label='Playlist Name'
        placeholder='Enter a name for your playlist'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPlaylistName(e.target.value)}
        value={playlistName}
      />
      <Button colorScheme='yellow' onClick={() => handleCratePlaylist()} type='submit'>
        Create
      </Button>
    </Stack>
  )
}

export default CreatePlaylistContent
