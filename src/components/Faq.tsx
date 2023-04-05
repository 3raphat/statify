import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react'

import { scopes } from '@/pages/api/auth/scopes'
import NextLink from 'next/link'
import packageInfo from '../../package.json'
import DividerWithText from './DividerWithText'
import SupportCTA from './Support/SupportCTA'

const Faq = () => {
  return (
    <Stack w='full'>
      <DividerWithText text='FAQ' />
      <Accordion flexDir='column' gap={1} display='flex' allowToggle>
        <AccordionItem className='with-shadow-no-animated' borderWidth={2} borderColor='black'>
          <AccordionButton>
            <Box as='span' flex={1} fontWeight='medium' textAlign='left'>
              What is Statify?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Text>
              Statify is a web application that allows you to view your Spotify listening statistics. It is built using{' '}
              <Link
                as={NextLink}
                color='green.400'
                fontWeight='medium'
                textDecoration='underline'
                _hover={{ color: 'green.600' }}
                transition='all 0.2s ease'
                href='https://nextjs.org/'
                isExternal
                textUnderlineOffset='2px'
              >
                Next.js
              </Link>
              ,{' '}
              <Link
                as={NextLink}
                color='green.400'
                fontWeight='medium'
                textDecoration='underline'
                _hover={{ color: 'green.600' }}
                transition='all 0.2s ease'
                href='https://chakra-ui.com/'
                isExternal
                textUnderlineOffset='2px'
              >
                Chakra UI
              </Link>
              , and{' '}
              <Link
                as={NextLink}
                color='green.400'
                fontWeight='medium'
                textDecoration='underline'
                _hover={{ color: 'green.600' }}
                transition='all 0.2s ease'
                href='https://next-auth.js.org/'
                isExternal
                textUnderlineOffset='2px'
              >
                NextAuth.js
              </Link>
              .
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem className='with-shadow-no-animated' borderWidth={2} borderColor='black'>
          <AccordionButton>
            <Box as='span' flex={1} fontWeight='medium' textAlign='left'>
              Where can I find the source code?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Text>
              The source code for this project can be found on{' '}
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
              .
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem className='with-shadow-no-animated' borderWidth={2} borderColor='black'>
          <AccordionButton>
            <Box as='span' flex={1} fontWeight='medium' textAlign='left'>
              What is the scope used in this project?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <UnorderedList>
              {scopes.map((scope) => (
                <ListItem key={scope}>{scope}</ListItem>
              ))}
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem className='with-shadow-no-animated' borderWidth={2} borderColor='black'>
          <AccordionButton>
            <Box as='span' flex={1} fontWeight='medium' textAlign='left'>
              How can I support this project?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Text>
              You can support this project by starring ⭐ it on{' '}
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
              , or by donating to the developer.
            </Text>
            <Flex justify='end'>
              <SupportCTA size='sm' mt={1} />
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Stack>
  )
}

export default Faq
