import { Box, useColorMode, useRadio, UseRadioProps } from "@chakra-ui/react"
import React from "react";
import { useQuestionsContext } from '../../hooks/useQuestions';

export default function RadioCard(props: any) {
  const { handleIncreaseQuestionNumber } = useQuestionsContext();
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const { colorMode } = useColorMode()

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  const handleSelection = () => {
    handleIncreaseQuestionNumber(props.id)
  }

  return (
    <Box as='label' width="100%">
      <input {...input} />
      <Box
        {...checkbox}
        cursor='pointer'
        borderWidth='1px'
        borderRadius='md'
        boxShadow={ colorMode === 'light' ? 'md' : 'dark-lg' }
        _checked={{
          bg: 'teal.600',
          color: 'white',
          borderColor: 'teal.600',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={5}
        py={3}
        fontSize={{ sm: '16px', md: "20px", lg: "24px" }}
        onClick={() => handleSelection()}
      >
        {props.children}
      </Box>
    </Box>
  )
}
