import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'
import Fonts from '@/components/Fonts'
import SEO from '../../next-seo.config'
import { SessionProvider } from 'next-auth/react'
import theme from '@/styles/theme'

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <SessionProvider session={session}>
        <ChakraProvider theme={theme}>
        <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </ChakraProvider>
      </SessionProvider>
      <Fonts />
    </>
  )
}
