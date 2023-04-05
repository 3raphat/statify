import { Box, Flex, Text, VStack, useColorModeValue } from '@chakra-ui/react'

import Image from 'next/image'

interface ArtistProps {
  index: number
  artist: any
}

const Artist = ({ index, artist }: ArtistProps) => {
  const idx = index + 1 < 10 ? '0' + (index + 1) : index + 1

  return (
    <Flex
      align='center'
      direction='column'
      h='full'
      px={4}
      py={2}
      fontSize={{ base: 'sm', md: 'md' }}
      _hover={{ bg: useColorModeValue('blackAlpha.50', 'whiteAlpha.100') }}
      cursor='pointer'
      rounded='md'
    >
      <VStack>
        <Text px={2} fontSize='xs' fontWeight='semibold' border='1px solid var(--chakra-colors-black)' rounded='full'>{`#${idx}`}</Text>
        <Box pos='relative' w='64px' h='64px'>
          <Image
            src={artist.image.url}
            alt={artist.name}
            fill
            sizes='100%'
            style={{
              borderRadius: '9999px',
              objectFit: 'cover',
            }}
          />
        </Box>
        <Text textAlign='center'>{artist.name}</Text>
      </VStack>
    </Flex>
  )
}

export default Artist
