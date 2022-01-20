import { Box, Button, Flex, Heading, IconButton , Spinner, Text, useRadioGroup, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import RadioCard from "../components/RadioCard";

import { GrPrevious, GrNext, GrRefresh } from "react-icons/gr";

import { useQuestionsContext } from '../hooks/useQuestions';

export default function Quiz() {
    const { questionOption, questions, resultsReady, quizResults, handleLoadQuestions, handleDecreaseQuestionNumber, handleIncreaseQuestionNumber, handleCheckResults, handleCheckAnswers } = useQuestionsContext();
    
    // const [ fadeState, setFadeState ] = useState(true);

    useEffect(() => {
        handleLoadQuestions();
    }, []);

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'framework',
        defaultValue: 'react',
        onChange: console.log,
    })
    const group = getRootProps()

    // const handleFade = () => {
    //     setFadeState(false)
    //     setTimeout(() => setFadeState(true), 300)
        
    // };

    return (
        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6" alignContent="center" justifyContent="center" flexDir="column" alignItems="center" >
            <Heading as="h1" fontSize={50} >Camila's Quiz</Heading>

            {/* <SlideFade offsetY='20px' in={fadeState}> */}
                <Box
                    backgroundColor="gray.700"
                    borderRadius="10"
                    mt="10"
                    px="10"
                    py="5"
                    maxHeight="100%"
                    width="60%"
                >
                    {(!questions[questionOption] || questions.length <= 1)
                        ? (<Spinner />)
                        : !resultsReady ? (
                            <>
                            <Text as="h3" fontSize={34} mb={8}>
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
                            <Button ml={200} as="button" type="submit" onClick={() => handleCheckAnswers() }>Check answers</Button>
                            
                            {questionOption + 1 === questions.length && (
                                <Button ml={200} as="button" type="submit" onClick={() => handleCheckResults()}>Ver resultado</Button>
                            )}
                        </>
                    ) : (
                            <Flex>
                                {!quizResults 
                                    ? <Spinner />
                                    : ( 
                                        <Flex>
                                            <Text>{quizResults.profile}</Text>
                                            <Text>{quizResults.description}</Text>
                                            <Text>{quizResults.tip}</Text>
                                        </Flex>
                                    )
                                }

                            {/* // CONDITION TO DISPLAY RESULTS SCREEN && RESULTS PAGE READY => DISPLAY THIS SECTION
                            // MAYBE A NEW STATE WILL BE REQUIRED */}
                                <Button leftIcon={<GrRefresh />} colorScheme='teal' variant='solid' onClick={() => handleLoadQuestions() }>
                                    Reiniciar
                                </Button>

                            </Flex>
                        )
                    }
                </Box>

                <Flex mt={8} >
                    <IconButton 
                        aria-label='Questão anterior' 
                        colorScheme='teal' 
                        isDisabled={questionOption <= 0}
                        mr={4} 
                        icon={<GrPrevious />} 
                        onClick={() => handleDecreaseQuestionNumber()} 
                    />
                    <IconButton 
                        aria-label='Questão seguinte' 
                        colorScheme='teal' 
                        isDisabled={questionOption + 1 >= questions.length}
                        ml={4} 
                        icon={<GrNext />} 
                        onClick={() => handleIncreaseQuestionNumber()} 
                    />
                </Flex>
            {/* </SlideFade> */}
        </Flex>
    )
}