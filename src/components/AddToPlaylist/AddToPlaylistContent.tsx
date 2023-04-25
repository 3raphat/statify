import { Box, Button, HStack, Select, Stack, Text, useToast } from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'

import CreatePlaylistCTA from '../CreatePlaylist/CreatePlaylistCTA'
import SelectedItemsContext from '@/context/SelectedItemsContext'
import fetcher from '@/lib/fetcher'
import useSWR from 'swr'

interface AddToPlaylistContentProps {}

const AddToPlaylistContent = ({}: AddToPlaylistContentProps) => {
  const items = useContext(SelectedItemsContext)
  const toast = useToast()
  const [playlists, setPlaylists] = useState([])
  const [selectedPlaylistId, setSelectedPlaylistId] = useState('')

  const { data } = useSWR(`/api/user-playlists`, fetcher)

  useEffect(() => {
    setPlaylists(data)
  }, [data])

  const handleAddToPlaylist = async () => {
    if (!selectedPlaylistId) return
    const res = await fetch(`/api/add-to-playlist?playlist_id=${selectedPlaylistId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        uris: items.map((t) => t.uri).join(','),
      }),
    })
    if (res.status === 200) {
      toast({
        title: 'Added to playlist',
        description: 'Your tracks have been added to the playlist',
        status: 'success',
        isClosable: true,
      })
    }
  }

  return (
    <Stack>
      <Text>
        Selected{' '}
        <Text as='span' fontWeight='bold'>
          {items.length}{' '}
        </Text>
        {items.length === 1 ? 'item' : 'items'}
      </Text>
      <HStack>
        <Select
          mb='4px'
          border='2px solid var(--chakra-colors-black)'
          borderRadius={10}
          shadow='0px 4px 0px var(--chakra-colors-black)'
          _hover={{
            borderColor: 'black',
          }}
          _focus={{
            boxShadow: '0px 4px 0px var(--chakra-colors-black)',
          }}
          transition='all 0.2s ease-in-out'
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedPlaylistId(e.target.value)}
          placeholder='Select a Playlist'
          value={selectedPlaylistId}
        >
          {playlists?.map((playlist: any) => (
            <option key={playlist.id} value={playlist.id}>
              {playlist.name}
            </option>
          ))}
        </Select>
        <Box>
          <CreatePlaylistCTA />
        </Box>
      </HStack>
      <Button colorScheme='green' onClick={handleAddToPlaylist}>
        Add to Playlist
      </Button>
    </Stack>
  )
}

export default AddToPlaylistContent
