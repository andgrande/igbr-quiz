import { Box, useColorMode, useRadio, UseRadioProps } from "@chakra-ui/react"
import React from "react";
import { useQuestionsContext } from '../../contexts/useQuestions';

export default function RadioCard(props: any) {
  const { handleIncreaseQuestionNumber } = useQuestionsContext();
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const { questions, questionOption } = useQuestionsContext();
  const isThisChecked = questions[questionOption].answer === props.id;
  
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
        {...isThisChecked && { bg: 'teal.600', color: 'white' }}
        cursor='pointer'
        borderWidth='1px'
        borderRadius='md'
        boxShadow={ colorMode === 'light' ? 'md' : 'dark-lg' }
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
