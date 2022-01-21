import { Box, Button, Flex, IconButton , Spinner, Text, useRadioGroup, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
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
        <Flex w="100%" my="6" maxWidth={1080} mx="auto" px="6" alignContent="center" justifyContent="center" flexDir="column" alignItems="center" >
            

            {/* <SlideFade offsetY='20px' in={fadeState}> */}
                <Box
                    // SHOULD DEFINE COLORS
                    // backgroundColor="gray.700"
                    borderRadius="10"
                    mt={{ sm: "4px", md: "8px", lg: "10px" }}
                    p={{ sm: "20px", md: "30px", lg: "40px" }}
                    maxHeight="100%"
                    width="90%"
                >
                    {(!questions[questionOption] || questions.length <= 1)
                        ? (<Spinner />)
                        : !resultsReady ? (
                            <>
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
                        </>
                    ) : (
                            <Flex direction="column">
                                {!quizResults 
                                    ? <Spinner />
                                    : ( 
                                        <Flex direction="column">
                                            <Text>{quizResults.profile}</Text>
                                            <Text>{quizResults.description}</Text>
                                            <Text>{quizResults.tip}</Text>
                                        </Flex>
                                    )
                                }

                                <Button 
                                    leftIcon={<GrRefresh />} 
                                    colorScheme='teal' 
                                    variant='solid' 
                                    width="100%"
                                    height={{ sm: "56px", md: "56px", lg: "56px" }}
                                    fontSize={{ sm: '16px', md: "20px", lg: "24px" }}
                                    onClick={() => handleLoadQuestions() }
                                >
                                    Reiniciar
                                </Button>

                            </Flex>
                        )
                    }
                </Box>

                {!quizResults &&
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
                }
            {/* </SlideFade> */}
        </Flex>
    )
}