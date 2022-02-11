import { Box, Button, Text, useRadioGroup, VStack } from "@chakra-ui/react";
import { useQuestionsContext } from "../../contexts/useQuestions";
import RadioCard from "./RadioCard";

export default function QuestionsCard() {
    const { 
        questionOption,
        questions,
        handleCheckResults,
    } = useQuestionsContext();

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'framework',
        defaultValue: 'react',
        onChange: console.log,
    })
    const group = getRootProps()

    return (
        <Box>
            <Text as="h3" fontSize={{ sm: '24px', md: "28px", lg: "32px" }} mb={8}>
                {questions[questionOption].id}. {questions[questionOption].question} 
            </Text>

            <VStack {...group} mb={8} >
                {questions[questionOption].options.map(value => {
                    const radio = getRadioProps({
                        value: value.description, checked: questions[questionOption].answer === value.option 
                    })
                    // ATTEMPT TO STYLE CHECKED OPTION
                    // console.log('origin', questions[questionOption].answer === value.option)
                    return (
                        <RadioCard 
                            name={value.option} 
                            key={value.option}
                            id={value.option} 
                            {...radio}
                        >
                            {value.description}
                        </RadioCard>
                    )
                })}
            </VStack>

            {/* THIS WILL BE GONE */}
            {/* <Button ml={200} as="button" type="submit" onClick={() => handleCheckAnswers() }>Check answers</Button> */}
            
            {questionOption + 1 === questions.length && (
                <Button
                    as="button" 
                    width="100%" 
                    display="block" 
                    textAlign="center"
                    margin="0 auto" 
                    type="submit" 
                    colorScheme='teal'
                    height={{ sm: "56px", md: "56px", lg: "56px" }}
                    fontSize={{ sm: '20px', md: "24px", lg: "28px" }}    
                    onClick={() => handleCheckResults()}
                >
                    Resultado
                </Button>
            )}
        </Box>
    )
}