import { Button, Flex, Spinner, Text } from "@chakra-ui/react";
import { useQuestionsContext } from "../../contexts/useQuestions";

import { GrRefresh } from "react-icons/gr";

export default function QuizResult() {
    const { quizResults, handleLoadQuestions } = useQuestionsContext();

    return (
        <Flex direction="column">
            {!quizResults 
                ? <Spinner />
                : ( 
                    <Flex 
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        gap="30px"
                    >
                        <Text fontSize={{ sm: '16px', md: "20px", lg: "24px" }} textAlign="center">
                            <Text fontWeight="semibold" >{quizResults.profile}</Text>
                            <Text fontWeight="medium" >{quizResults.description}</Text>
                            <Text >{quizResults.tip}</Text>
                        </Text>

                        <Button 
                            leftIcon={<GrRefresh />} 
                            colorScheme='teal'
                            variant='solid'
                            width="50%"
                            height={{ base: "36px", md: "56px", lg: "56px" }}
                            fontSize={{ base: '16px', md: "20px", lg: "24px" }}
                            onClick={() => handleLoadQuestions() }
                        >
                            Reiniciar
                        </Button>
                    </Flex>
                )
            }
        </Flex>
    )
}