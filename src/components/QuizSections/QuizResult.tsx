import { Button, Flex, Spinner, Text } from "@chakra-ui/react";
import { useQuestionsContext } from "../../hooks/useQuestions";

import { GrRefresh } from "react-icons/gr";

export default function QuizResult() {
    const { quizResults, handleLoadQuestions } = useQuestionsContext();

    return (
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
                height={{ base: "36px", md: "56px", lg: "56px" }}
                fontSize={{ base: '16px', md: "20px", lg: "24px" }}
                onClick={() => handleLoadQuestions() }
            >
                Reiniciar
            </Button>

        </Flex>
    )
}