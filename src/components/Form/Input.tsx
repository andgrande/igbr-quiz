import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps, useColorMode} from '@chakra-ui/react';
import { FieldErrors } from 'react-hook-form';

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
    error?: FieldErrors;
}

const InputBase: ForwardRefRenderFunction<
  HTMLInputElement, InputProps
> = ({ name, label, error, ...rest}, ref) => {
    const { colorMode } = useColorMode()
    return (
        <FormControl isInvalid={!!error} >
            {/* { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> } */}

            <ChakraInput
              id={name}
              name={name}
            //   borderColor="pink.500"
              bgColor={colorMode === 'dark' ? "gray.900" : 'white' }
              variant="filled"
              _hover={{
                bgColor: colorMode === 'dark' ? "gray.700" : 'gray.50' 
              }}
              size="lg"
              placeholder={label}
              ref={ref}
              {...rest}
            />

            { !!error && (
              <FormErrorMessage>
                {error.message}
              </FormErrorMessage>
            )}
        </FormControl>
    )
}

export const Input = forwardRef(InputBase);