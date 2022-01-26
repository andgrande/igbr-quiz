import { Heading, Flex, IconButton, useColorMode } from "@chakra-ui/react";
import { RiMoonLine, RiSunLine, RiRefreshLine } from "react-icons/ri";
import { useQuestionsContext } from "../../hooks/useQuestions";

export default function Header() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { showHome, resultsReady, handleLoadQuestions } = useQuestionsContext();

    return (
        <Flex 
            as="header"
            width="100%"
            maxWidth={1080}
            height={{ base: "80px", lg: "100px"}}
            marginX="auto"
            flexDirection="row" 
            justifyContent={{ base: "space-around", md: "center", lg: "center" }}
            alignItems="center"
            alignContent="center"
        >
            <Heading as="h1" ml={{ base: "5px", sm: "50px", md: "0px", lg: "0px" }} fontSize={{ base: "30px", sm: "35px", md: "45px", lg: "50px"}} >
                {"Camila's Quiz"}
            </Heading>
            
            <IconButton 
                aria-label="Alternar modo de cor"
                icon={colorMode === 'light' ? <RiMoonLine/> : <RiSunLine/>}
                fontSize="20" 
                ml={{ base: "0px", md: "50px" }}
                color="bg"
                colorScheme="color"
                onClick={toggleColorMode}
            />
            {!showHome && !resultsReady && (
                <IconButton
                    aria-label="Reiniciar quiz"
                    icon={<RiRefreshLine />} 
                    // mr={{ sm: "10px", md: "0px" }}
                    fontSize="20" 
                    color="bg"
                    colorScheme="color"
                    onClick={() => handleLoadQuestions() }
                />
            )}
        </Flex>
    )
}