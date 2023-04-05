import { Flex, HStack, Stack, Text, Tooltip, useColorModeValue } from '@chakra-ui/react'
import { useContext } from 'react'

import VolumeContext from '@/context/VolumeContext'
import Image from 'next/image'
import NextLink from 'next/link'
import prettyMs from 'pretty-ms'
import useSound from 'use-sound'

interface TrackProps {
  index: number
  track: any
}

const Track = ({ index, track }: TrackProps) => {
  const volumeValue = useContext(VolumeContext)

  const idx = index + 1 < 10 ? '0' + (index + 1) : index + 1

  const previewUrl = track?.preview_url?.split('?')[0]
  const [play, { stop }] = useSound(previewUrl + '.mp3', {
    volume: volumeValue,
  })

  return (
    <Tooltip hasArrow label={previewUrl ? undefined : 'No preview available'}>
      <Flex
        align='center'
        justify='space-between'
        px={4}
        py={2}
        fontSize={{ base: 'sm', md: 'md' }}
        _hover={{ bg: useColorModeValue('blackAlpha.50', 'whiteAlpha.100') }}
        cursor='pointer'
        onMouseEnter={() => play()}
        onMouseLeave={() => stop()}
        rounded='md'
      >
        <HStack spacing={{ base: 1, md: 2 }}>
          <Text px={2} fontSize='xs' fontWeight='semibold' border='1px solid var(--chakra-colors-black)' rounded='full'>{`#${idx}`}</Text>
          <Image
            src={track.image.url}
            alt={track.name}
            width={56}
            height={56}
            style={{
              borderRadius: '0.25rem',
            }}
          />
          <Stack spacing={1}>
            <Text
              as={NextLink}
              _hover={{
                textDecoration: 'underline',
                textUnderlineOffset: '2px',
              }}
              href={track.external_urls.spotify}
              target='_blank'
            >
              {track.name}
            </Text>
            <Text color='gray' fontSize={{ base: 'xs', md: 'sm' }}>
              {track.artists
                ?.map((artist: any) => (
                  <Text
                    key={artist.id}
                    as={NextLink}
                    _hover={{
                      textDecoration: 'underline',
                      textUnderlineOffset: '2px',
                    }}
                    href={artist.external_urls.spotify}
                    target='_blank'
                  >
                    {artist.name}
                  </Text>
                ))
                .reduce((prev: string, curr: string) => [prev, ', ', curr])}
            </Text>
          </Stack>
        </HStack>
        <Text>{prettyMs(track.duration_ms ?? 0, { colonNotation: true, secondsDecimalDigits: 0 })}</Text>
      </Flex>
    </Tooltip>
  )
}

export default Track
