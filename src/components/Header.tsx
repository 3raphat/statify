import { Avatar, Box, Button, Center, Flex, Heading, Icon, Menu, MenuButton, MenuDivider, MenuList, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { signOut, useSession } from 'next-auth/react'

import NextLink from 'next/link'
import SupportCTA from './Support/SupportCTA'
import ToggleThemeButton from './ToggleThemeButton'

const Header = () => {
  const { data: session } = useSession()

  const bgColor = useColorModeValue('light.300', 'dark.500')

  return (
    <Flex as='header' align='center' justify='space-between' w='full'>
      <NextLink href='/'>
        <Flex align='center'>
          <Icon boxSize={24}>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z'
              />
            </svg>
          </Icon>
          <Box>
            <Heading as='h1' fontWeight='black' size='2xl'>
              Statify
            </Heading>
            <Text color='gray' fontSize='sm'>
              Get your Spotify listening habits
            </Text>
          </Box>
        </Flex>
      </NextLink>
      <Flex align='center' gap={{ base: 2, md: 4 }}>
        <SupportCTA isCompact />
        <ToggleThemeButton />
        {session && (
          <Menu isLazy>
            <MenuButton border='2px solid var(--chakra-colors-black)' rounded='full'>
              <Avatar boxSize='40px' src={session.user.image} />
            </MenuButton>
            <MenuList bg={bgColor}>
              <Stack as={Center} mt={2} spacing={4}>
                <Avatar size='2xl' src={session.user.image} />
                <Box textAlign='center'>
                  <Text fontWeight='semibold'>{session.user.name}</Text>
                  <Text fontSize='sm'>{session.user.email}</Text>
                </Box>
              </Stack>
              <MenuDivider />
              <Stack mx={2}>
                <Button colorScheme='red' onClick={() => signOut()} size='sm'>
                  Sign out
                </Button>
              </Stack>
            </MenuList>
          </Menu>
        )}
      </Flex>
    </Flex>
  )
}

export default Header
