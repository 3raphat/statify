import { Divider, Flex, Text, TextProps } from '@chakra-ui/react'

interface DividerWithTextProps extends TextProps {
  text: string
}

const DividerWithText = ({ text, ...props }: DividerWithTextProps) => {
  return (
    <Flex align='center'>
      <Divider />
      <Text p={2} fontSize='sm' fontWeight='semibold' {...props}>
        {text}
      </Text>
      <Divider />
    </Flex>
  )
}

export default DividerWithText
