import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { Moon, Sun } from 'lucide-react'

import { motion } from 'framer-motion'

const ToggleThemeButton = () => {
  const { toggleColorMode } = useColorMode()
  return (
    <IconButton
      aria-label='toggle theme'
      icon={
        <motion.div
          key={useColorModeValue('light', 'dark')}
          initial={{ rotate: 0, opacity: 0 }}
          animate={{ rotate: 360, opacity: 1 }}
          exit={{ rotate: 0, opacity: 0 }}
        >
          {useColorModeValue(<Moon size={20} />, <Sun size={20} />)}
        </motion.div>
      }
      onClick={toggleColorMode}
    />
  )
}

export default ToggleThemeButton
