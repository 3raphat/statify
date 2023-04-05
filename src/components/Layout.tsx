import { Box, Container } from '@chakra-ui/react'

import Footer from './Footer'
import Header from './Header'

interface LayoutProps {
  children: React.ReactNode
  noElements?: boolean
}

const Layout = ({ children, noElements = false }: LayoutProps) => {
  return (
    <Container maxW='6xl' minH='100vh' p={8}>
      {!noElements && <Header />}
      <Box as='main' my={8}>
        {children}
      </Box>
      {!noElements && <Footer />}
    </Container>
  )
}

export default Layout
