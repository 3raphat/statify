import { Button, ButtonProps, Tooltip, useDisclosure } from '@chakra-ui/react'

import ModalWrapper from '../ModalWrapper'
import AddToPlaylistContent from './AddToPlaylistContent'

interface AddToPlaylistProps extends ButtonProps {
  items: any[]
}

const AddToPlaylistCTA = ({ items, ...props }: AddToPlaylistProps) => {
  const { isOpen: isAddOpen, onOpen: onAddOpen, onClose: onAddClose } = useDisclosure()

  let errText = ''
  if (items.length == 0) {
    errText = 'Select at least one track to add to a Playlist'
  } else if (items.length > 100) {
    errText = 'A maximum of 100 tracks can be added in one request'
  }

  if (items.length > 100 || items.length === 0) {
    return (
      <Tooltip hasArrow label={errText}>
        <Button {...props} isDisabled>
          Add to Playlist
        </Button>
      </Tooltip>
    )
  }

  return (
    <>
      <Button onClick={onAddOpen} {...props}>
        Add to Playlist
      </Button>
      <ModalWrapper isOpen={isAddOpen} onClose={onAddClose} header='Add tracks to Playlist' body={<AddToPlaylistContent />} />
    </>
  )
}

export default AddToPlaylistCTA
