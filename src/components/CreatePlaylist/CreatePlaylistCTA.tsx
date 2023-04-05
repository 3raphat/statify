import { Button, ButtonProps, useDisclosure } from '@chakra-ui/react'
import ModalWrapper from '../ModalWrapper'
import CreatePlaylistContent from './CreatePlaylistContent'

interface CreatePlaylistCTAProps extends ButtonProps {}

const CreatePlaylistCTA = ({ ...props }: CreatePlaylistCTAProps) => {
  const { isOpen: isCreateOpen, onOpen: onCreateOpen, onClose: onCreateClose } = useDisclosure()

  return (
    <>
      <Button onClick={onCreateOpen} {...props}>
        Create Playlist
      </Button>
      <ModalWrapper isCentered={true} isOpen={isCreateOpen} onClose={onCreateClose} header='Create a new Playlist' body={<CreatePlaylistContent />} />
    </>
  )
}

export default CreatePlaylistCTA
