import { Box, Button, Fade, Flex, Heading, Spinner, Text, useRadioGroup, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import RadioCard from "../components/RadioCard";

import { useQuestionsContext } from '../hooks/useQuestions';

export default function Quiz() {
    const { questionOption, questions, handleLoadQuestions, handleDecreaseQuestionNumber, handleCheckResults, handleCheckAnswers } = useQuestionsContext();

    useEffect(() => {
        handleLoadQuestions();
    }, []);

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'framework',
        defaultValue: 'react',
        onChange: console.log,
    })
    const group = getRootProps()

    console.log(questions);

    return (
        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6" alignContent="center" justifyContent="center" flexDir="column" alignItems="center" >
            <Heading as="h1" fontSize={50} >Camila's Quiz</Heading>

            <Box
                    backgroundColor="gray.700"
                    borderRadius="10"
                    mt="10"
                    px="10"
                    py="5"
                    maxHeight="100%"
                    width="60%"
            >
                {(!questions[questionOption] || questions.length <= 1 ) ? (<Spinner />)
                    : (
                    <>
                        <Text as="h3" fontSize={34} mb={8}>
                            {questions[questionOption].id}. {questions[questionOption].question} 
                        </Text>

                        <VStack {...group} mb={8} >
                            {questions[questionOption].options.map(value => {
                                const radio = getRadioProps({ value: value.description })
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
                    </>
                )}

                {questionOption > 0 && (
                    <Button as="button" type="submit" onClick={() => handleDecreaseQuestionNumber()}>Voltar</Button>
                )}
                <Button ml={200} as="button" type="submit" onClick={() => handleCheckAnswers() }>Check answers</Button>
                
                {questionOption + 1 === questions.length && (
                    <Button ml={200} as="button" type="submit" onClick={() => handleCheckResults() }>Ver resultado</Button>
                )}
                
            </Box>
        </Flex>
    )
}