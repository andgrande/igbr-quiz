import { Box, useRadio } from "@chakra-ui/react"
import { useQuestionsContext } from '../hooks/useQuestions';

// 1. Create a component that consumes the `useRadio` hook
export default function RadioCard(props) {
  const { handleIncreaseQuestionNumber } = useQuestionsContext();
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  const handleSelection = () => {
    console.log(props.id)
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
        boxShadow='md'
        defaultChecked={false}
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
        onClick={() => handleSelection()}
      >
        {props.children}
      </Box>
    </Box>
  )
}
