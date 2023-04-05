import { SegmentedControl, SegmentedControlItem } from '@/components/SegmentedControl'
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  SimpleGrid,
  Skeleton,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react'
import { Volume, Volume1, Volume2, VolumeX } from 'lucide-react'
import { useEffect, useState } from 'react'

import AddToPlaylistCTA from '@/components/AddToPlaylist/AddToPlaylistCTA'
import Artist from '@/components/Artist'
import Layout from '@/components/Layout'
import List from '@/components/List'
import Track from '@/components/Track'
import SelectedItemsContext from '@/context/SelectedItemsContext'
import VolumeContext from '@/context/VolumeContext'
import fetcher from '@/libs/fetcher'
import { NextSeo } from 'next-seo'
import useSWR from 'swr'

export default function Home() {
  const toast = useToast()

  const [items, setItems] = useState<any[]>([])
  const [list, setList] = useState<any[]>([])

  const [volume, setVolume] = useState(0.5)

  const [type, setType] = useState<'tracks' | 'artists'>('tracks')
  const [timeRange, setTimeRange] = useState<'short_term' | 'medium_term' | 'long_term'>('medium_term')

  const { data, isLoading, error } = useSWR(`/api/top-items?type=${type}&time_range=${timeRange}`, fetcher)

  useEffect(() => {
    setItems(
      data?.map((item: any) => {
        return {
          ...item,
          image: type === 'tracks' ? item.album.images[0] : item.images[0],
        }
      })
    )
  }, [data, isLoading, type])

  const handleTypeChange = (e: any) => {
    setType(e.target.value)
  }
  const handleTimeRangeChange = (e: any) => {
    setTimeRange(e.target.value)
  }
  const handleAddToList = (item: any) => {
    if (type !== 'tracks') {
      toast({
        title: 'Oops!',
        description: `You can only add tracks to the List`,
        status: 'error',
        isClosable: true,
      })
      return
    }
    if (list.length >= 100) {
      toast({
        title: 'Oops!',
        description: `You've can't add more than 100 items to the List`,
        status: 'error',
        isClosable: true,
      })
      return
    }
    if (list.find((i) => i.album.id === item.album.id)) {
      toast({
        title: 'Oops!',
        description: `You've already added "${item.name}" to the List`,
        status: 'error',
        isClosable: true,
      })
      return
    }
    setList([...list, item])
  }
  const handleAddAllToList = () => {
    if (type !== 'tracks') return
    if (list.length >= 100) {
      toast({
        title: 'Oops!',
        description: `You've can't add more than 100 items to the List`,
        status: 'error',
        isClosable: true,
      })
      return
    }
    const itemsToAdd = items.filter((item) => !list.find((i) => i.album.id === item.album.id))
    setList([...list, ...itemsToAdd])
  }
  const handleRemoveFromList = (item: any) => {
    setList(list.filter((i) => i.album.id !== item.album.id))
  }
  const handleRemoveAllFromList = () => {
    setList([])
  }
  const TYPES = [
    { label: 'Tracks', value: 'tracks' },
    { label: 'Artists', value: 'artists' },
  ]
  const TIME_RANGES = [
    { label: 'Last month', value: 'short_term' },
    { label: 'Last 6 month', value: 'medium_term' },
    { label: 'All time', value: 'long_term' },
  ]
  return (
    <>
      <NextSeo title='Stats for your Spotify' />
      <VolumeContext.Provider value={volume}>
        <SelectedItemsContext.Provider value={list}>
          <Layout>
            <Flex direction={{ base: 'column', md: 'row' }} gap={{ base: 2, md: 4 }} w='full' mb={4}>
              <SegmentedControl fullWidth>
                {TYPES.map((item) => (
                  <SegmentedControlItem
                    key={item.value}
                    value={item.value}
                    onClick={(e: any) => handleTypeChange(e)}
                    colorScheme={type === item.value ? 'green' : 'gray'}
                    css={{
                      transform: type === item.value ? 'translateY(2px)' : undefined,
                      boxShadow: type === item.value ? '0px 2px 0px var(--chakra-colors-black)' : undefined,
                    }}
                  >
                    {item.label}
                  </SegmentedControlItem>
                ))}
              </SegmentedControl>
              <SegmentedControl fullWidth>
                {TIME_RANGES.map((item) => (
                  <SegmentedControlItem
                    key={item.value}
                    value={item.value}
                    onClick={(e: any) => handleTimeRangeChange(e)}
                    colorScheme={timeRange === item.value ? 'teal' : 'gray'}
                    css={{
                      transform: timeRange === item.value ? 'translateY(2px)' : undefined,
                      boxShadow: timeRange === item.value ? '0px 2px 0px var(--chakra-colors-black)' : undefined,
                    }}
                  >
                    {item.label}
                  </SegmentedControlItem>
                ))}
              </SegmentedControl>
              <HStack className='with-shadow-no-animated' p={2} bg={useColorModeValue('gray.100', 'whiteAlpha.200')}>
                {volume > 0.75 ? <Volume2 size={20} /> : volume > 0.25 ? <Volume1 size={20} /> : volume > 0 ? <Volume size={20} /> : <VolumeX size={20} />}
                <Slider
                  w={{ base: 'full', md: '150px' }}
                  aria-label='volume slider'
                  colorScheme='green'
                  defaultValue={volume}
                  max={1}
                  min={0}
                  onChange={(v) => setVolume(v)}
                  step={0.01}
                >
                  <SliderTrack>
                    <SliderFilledTrack rounded='full' />
                  </SliderTrack>
                  <SliderThumb
                    opacity={0}
                    _hover={{
                      opacity: 1,
                    }}
                  />
                </Slider>
              </HStack>
            </Flex>
            <HStack>
              {data && !error && (
                <Grid gap={4} templateColumns='repeat(3, 1fr)' w='full'>
                  <GridItem colSpan={2}>
                    {type === 'tracks' ? (
                      <Flex direction='column' gap={2}>
                        {items?.map((item: any, index: number) => (
                          <Box className='with-shadow' key={index} onClick={() => handleAddToList(item)}>
                            <Track index={index} track={item} />
                          </Box>
                        ))}
                      </Flex>
                    ) : (
                      <SimpleGrid columns={[1, 2, 3, 4]} spacing={2}>
                        {items?.map((item: any, index: number) => (
                          <Box className='with-shadow' key={index} onClick={() => handleAddToList(item)}>
                            <Artist index={index} artist={item} />
                          </Box>
                        ))}
                      </SimpleGrid>
                    )}
                  </GridItem>
                  <GridItem colSpan={1}>
                    <Flex className='with-shadow-no-animated' direction='column' gap={2} w='full' p={2} rounded='md'>
                      <Flex direction='column' gap={1}>
                        <Button onClick={() => handleAddAllToList()} size='sm'>
                          Add all to List
                        </Button>
                        <Button onClick={() => handleRemoveAllFromList()} size='sm'>
                          Remove all from List
                        </Button>
                        <AddToPlaylistCTA size='sm' items={list} />
                      </Flex>
                      {list?.map((item: any, index: number) => (
                        <Box key={index}>
                          <List index={index} item={item} onClick={() => handleRemoveFromList(item)} />
                        </Box>
                      ))}
                    </Flex>
                  </GridItem>
                </Grid>
              )}
              {isLoading && (
                <Stack w='full'>
                  {Array.from(Array(10)).map((_, index) => (
                    <Skeleton key={index} w='full' h='80px' rounded='md' />
                  ))}
                </Stack>
              )}
              {error && <Text>Something went wrong. Try to login again.</Text>}
            </HStack>
          </Layout>
        </SelectedItemsContext.Provider>
      </VolumeContext.Provider>
    </>
  )
}
