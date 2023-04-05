import { Flex, HStack, IconButton, Text, useBreakpointValue } from '@chakra-ui/react'

import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import Image from 'next/image'

interface ListProps {
  index: number
  item: any
  onClick: () => void
}

const List = ({ index, item, onClick }: ListProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.2,
      }}
    >
      <Flex align='center' justify='space-between'>
        <HStack>
          <Text w='22px' fontSize='xs' textAlign='center'>
            {index + 1}
          </Text>
          <Image
            src={item.image.url}
            alt={item.name}
            width={48}
            height={48}
            style={{
              display: useBreakpointValue({ base: 'none', md: 'block' }),
              borderRadius: '0.25rem',
            }}
          />
          <Text>{item.name}</Text>
        </HStack>
        <IconButton aria-label='Remove from bar' icon={<X size={16} />} onClick={onClick} size='sm' />
      </Flex>
    </motion.div>
  )
}

export default List
