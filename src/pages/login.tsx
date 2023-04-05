import { Button, Heading, Stack, Text, useToast } from '@chakra-ui/react'

import { BsSpotify } from 'react-icons/bs'
import Faq from '@/components/Faq'
import { Icon } from '@chakra-ui/react'
import ModalWrapper from '@/components/ModalWrapper'
import { NextSeo } from 'next-seo'
import { signIn } from 'next-auth/react'
import { useState } from 'react'

const Login = () => {
  const toast = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const loginWithSpotify = async () => {
    try {
      setIsLoading(true)
      await signIn('spotify', { callbackUrl: '/' })
    } catch (error) {
      console.log(error)
      toast({
        title: 'Error',
        description: 'An error occurred while trying to login with Spotify',
        status: 'error',
        isClosable: true,
      })
    } finally {
      setTimeout(() => setIsLoading(false), 1000)
    }
  }
  return (
    <>
      <NextSeo title='Login' />
      <ModalWrapper
        isOpen={true}
        onClose={() => 0}
        isCentered
        withCloseButton={false}
        isOverlay={false}
        header={
          <Heading fontWeight='black' bgGradient='linear(to-br, teal.200, cyan.600)' bgClip='text'>
            Login
          </Heading>
        }
        body={
          <Stack>
            <Text textAlign='center'>Sign in with:</Text>
            <Button isLoading={isLoading} leftIcon={<Icon as={BsSpotify} color='green.500' />} loadingText='Loading' onClick={loginWithSpotify} size='lg'>
              Spotify
            </Button>
          </Stack>
        }
        footer={<Faq />}
      />
    </>
  )
}

export default Login
