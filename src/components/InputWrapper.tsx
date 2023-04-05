import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, forwardRef } from '@chakra-ui/react'
import type { FormControlProps, FormErrorMessageProps, FormHelperTextProps, InputProps } from '@chakra-ui/react'

interface InputWrapperProps extends Pick<FormControlProps, 'label' | 'isInvalid' | 'isRequired'>, InputProps {
  errorText?: FormErrorMessageProps['children']
  helperText?: FormHelperTextProps['children']
  formControlWidth?: FormControlProps['width']
}

const InputWrapper = forwardRef(({ label, formControlWidth, isInvalid, isRequired, errorText, helperText, ...inputProps }: InputWrapperProps, ref) => {
  return (
    <FormControl w={formControlWidth} isInvalid={isInvalid} isRequired={isRequired}>
      {label && <FormLabel>{label}</FormLabel>}
      <Input ref={ref} {...inputProps} borderWidth={2} borderRadius={10} />
      {errorText && <FormErrorMessage color='red.400'>{errorText}</FormErrorMessage>}
      {helperText && <FormHelperText color='gray'>{helperText}</FormHelperText>}
    </FormControl>
  )
})

export default InputWrapper
