import { Button, SimpleGrid } from '@chakra-ui/react'

import { links } from './constants'

const SupportContent = () => {
  return (
    <SimpleGrid columns={2} spacing={4}>
      {links.map((link) => (
        <Button
          key={link.label}
          as='a'
          _hover={{
            transform: 'translateY(2px)',
            boxShadow: '0px 2px 0px var(--chakra-colors-black)',
          }}
          _active={{
            transform: 'translateY(4px)',
            boxShadow: '0px 0px 0px var(--chakra-colors-black)',
          }}
          colorScheme={link?.colorScheme}
          href={link.url}
          leftIcon={link?.icon}
          target='_blank'
        >
          {link.label}
        </Button>
      ))}
    </SimpleGrid>
  )
}

export default SupportContent
