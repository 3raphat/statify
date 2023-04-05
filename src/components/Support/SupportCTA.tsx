import {
  Button,
  ButtonProps,
  Icon,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'

import { Heart } from 'lucide-react'
import ModalWrapper from '../ModalWrapper'
import SupportContent from './SupportContent'

interface SupportProps extends ButtonProps {
  isCompact?: boolean
}

const SupportCTA = ({ isCompact = false, ...props }: SupportProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const borderColor = useColorModeValue('colors.gray.200', 'colors.gray.600')

  return (
    <>
      {isCompact ? (
        <IconButton aria-label='donate button' icon={<HeartIcon boxSize={5} color='red.400' />} onClick={onOpen} {...props} />
      ) : (
        <Button leftIcon={<HeartIcon boxSize={5} color='red.400' />} onClick={onOpen} {...props}>
          <Text fontSize='sm'>Support</Text>
        </Button>
      )}

      <ModalWrapper isOpen={isOpen} onClose={onClose} header='Support this project' body={<SupportContent />} />
    </>
  )
}

const HeartIcon = (props: any) => (
  <Icon {...props}>
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>
      <path d='M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z' />
    </svg>
  </Icon>
)

export default SupportCTA
