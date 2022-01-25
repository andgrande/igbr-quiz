import { useEffect } from "react";
import { Box, Flex, IconButton , Spinner, useColorMode } from "@chakra-ui/react";
import { useQuestionsContext } from '../hooks/useQuestions';
import QuestionsCard from "../components/QuizSections/QuestionsCard";
import QuizResult from "../components/QuizSections/QuizResult";
import { Home } from '../components/Home';

import { GrPrevious, GrNext } from "react-icons/gr";

export default function Quiz() {
    const { 
        showHome,
        questionOption, 
        questions, 
        resultsReady, 
        quizResults, 
        handleLoadQuestions, 
        handleDecreaseQuestionNumber, 
        handleIncreaseQuestionNumber 
    } = useQuestionsContext();
    const { colorMode } = useColorMode();
    // const [ fadeState, setFadeState ] = useState(true);

    useEffect(() => {
        handleLoadQuestions();
    }, []);

    // const handleFade = () => {
    //     setFadeState(false)
    //     setTimeout(() => setFadeState(true), 300)
        
    // };

    return (
        <Flex w="100%" my="6" maxWidth={1920} mx="auto" alignContent="center" justifyContent="center" flexDir="column" alignItems="center" position="relative" >
            
            {/* <SlideFade offsetY='20px' in={fadeState}> */}
                {showHome ? <Home />
                : (
                    <>
                        <Box
                            // SHOULD DEFINE COLORS
                            backgroundColor={colorMode === 'dark' ? "gray.700" : "gray.50"}
                            borderRadius="10"
                            mt={{ base: "4px", md: "8px", lg: "10px" }}
                            p={{ base: "20px", md: "30px", lg: "40px" }}
                            maxHeight="100%"
                            maxWidth="1080px"
                            width="90%"
                        >
                            {(!questions[questionOption] || questions.length <= 1)
                                ? (
                                    <Spinner />
                                ): !resultsReady ? (
                                    <QuestionsCard />        
                            ) : (
                                    <QuizResult />
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
                    </>
                )}
            {/* </SlideFade> */}
        </Flex>
    )
}