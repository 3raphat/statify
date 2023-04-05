import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useColorModeValue } from '@chakra-ui/react'
import type { ModalContentProps, ModalProps } from '@chakra-ui/react'

interface ModalWrapperProps extends Pick<ModalProps, 'isOpen' | 'onClose' | 'size' | 'closeOnOverlayClick'> {
  header?: React.ReactNode
  withCloseButton?: boolean
  isOverlay?: boolean
  body?: React.ReactNode
  footer?: React.ReactNode
  isCentered?: boolean
  contentWrapperProps?: ModalContentProps
}

const ModalWrapper = ({
  isOpen,
  onClose,
  size,
  header,
  withCloseButton = true,
  isOverlay = true,
  body,
  footer,
  closeOnOverlayClick = false,
  isCentered = true,
  contentWrapperProps,
}: ModalWrapperProps) => {
  const borderColor = useColorModeValue('colors.dark.900', 'colors.light.900')

  return (
    <Modal autoFocus={false} closeOnOverlayClick={closeOnOverlayClick} colorScheme='red' isCentered={isCentered} isOpen={isOpen} onClose={onClose} size={size}>
      {isOverlay && <ModalOverlay />}
      <ModalContent
        sx={{
          '--border-color': borderColor,
        }}
        bg={useColorModeValue('light.300', 'dark.500')}
        border='2px solid var(--border-color)'
        borderRadius={16}
        shadow='0px 6px 0px var(--border-color)'
        {...contentWrapperProps}
      >
        {header && <ModalHeader>{header}</ModalHeader>}
        {withCloseButton && <ModalCloseButton />}
        {body && footer ? <ModalBody>{body}</ModalBody> : <ModalBody mb={4}>{body}</ModalBody>}
        {footer && <ModalFooter>{footer}</ModalFooter>}
      </ModalContent>
    </Modal>
  )
}

export default ModalWrapper
