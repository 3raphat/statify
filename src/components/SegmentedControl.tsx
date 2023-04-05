import { Button, ButtonGroup } from '@chakra-ui/react'
import type { ButtonGroupProps, ButtonProps } from '@chakra-ui/react'

interface SegmentedControlProps extends ButtonGroupProps {
  children: React.ReactNode
  fullWidth?: boolean
}

export const SegmentedControl = ({ children, fullWidth = false, ...props }: SegmentedControlProps) => {
  return (
    <ButtonGroup w={fullWidth ? 'full' : undefined} isAttached {...props}>
      {children}
    </ButtonGroup>
  )
}

interface SegmentedControlItemProps extends ButtonProps {
  children: React.ReactNode
  value?: any
}

export const SegmentedControlItem = ({ children, value, ...props }: SegmentedControlItemProps) => {
  return (
    <Button value={value} {...props} flex={1}>
      {children}
    </Button>
  )
}
