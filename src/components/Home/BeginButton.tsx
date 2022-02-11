import { Button, Flex, Text } from "@chakra-ui/react";
import { useQuestionsContext } from "../../contexts/useQuestions";

interface InternProp {
    fixedColor?: string;
}

export default function BeginButton({ fixedColor }: InternProp) {
    const { handleStartQuiz } = useQuestionsContext();

    return (
        <Flex
            flex={1}
            flexDirection="column"
            alignSelf="center"
            alignItems="center"
            gap="30px"
        >
            <Text 
                align="center" 
                w="70%" 
                textAlign="justify" 
                fontSize={{ sm: '20px', md: "24px", lg: "28px" }} 
                fontWeight={"regular"} 
            >
                Descubra seu perfil de professora e eu direi o que você mais precisa ler pra começar 2022.
            </Text>
            <Button 
                as="button"
                w="70%"
                aria-label="Start Quiz"
                backgroundColor={fixedColor}
                height={{ sm: "56px", md: "56px", lg: "56px" }}
                fontSize={{ sm: '20px', md: "24px", lg: "28px" }} 
                fontWeight={"medium"}
                onClick={ () => handleStartQuiz()}
            >
                Iniciar Quiz
            </Button>
        </Flex>
    )
}