import { Flex, Link, Text, useBreakpointValue } from '@chakra-ui/react'

import NextLink from 'next/link'
import packageInfo from '../../package.json'
import SupportCTA from './Support/SupportCTA'

const Footer = () => {
  return (
    <Flex as='footer' align='center' justify='space-between'>
      <Text fontSize='sm'>
        Made by{' '}
        <Link
          as={NextLink}
          color='green.400'
          fontWeight='medium'
          textDecoration='underline'
          _hover={{ color: 'green.600' }}
          transition='all 0.2s ease'
          href='https://github.com/3raphat'
          isExternal
          textUnderlineOffset='2px'
        >
          3raphat
        </Link>
        , the source code is available on{' '}
        <Link
          as={NextLink}
          color='green.400'
          fontWeight='medium'
          textDecoration='underline'
          _hover={{ color: 'green.600' }}
          transition='all 0.2s ease'
          href={packageInfo.repository.url}
          isExternal
          textUnderlineOffset='2px'
        >
          GitHub
        </Link>
      </Text>
      <SupportCTA isCompact={useBreakpointValue({ base: true, md: false })} />
    </Flex>
  )
}

export default Footer
