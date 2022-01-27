import { Box, Flex, useColorMode, useMediaQuery } from "@chakra-ui/react"
import { useQuestionsContext } from "../../hooks/useQuestions";
import BeginButton from "./BeginButton";

export const Home = () => {
    const { colorMode } = useColorMode();
    const { isLargerThan1080p } = useQuestionsContext();

    return (
        <Flex
            backgroundColor={colorMode === 'dark' ? "gray.700" : "gray.50"}
            borderRadius="10"
            mt={{ base: "4px", md: "8px", lg: "10px" }}
            // p={{ base: "20px", md: "30px", lg: "40px" }}
            // height={{ base: "500px", heightMd: "720px" }}
            height="calc(100vh - 250px)"
            maxWidth="1080px"
            minHeight="500px"
            maxHeight="720px"
            width="90%"
            flexDirection={{ base: 'column', md: 'row' }}
        >
            <Box
                flex={1}
                borderRadius={ !isLargerThan1080p ? "10px" : "10px 0px 0px 10px" }
                backgroundImage="/assets/images/home.jpg"
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
            >
                {!isLargerThan1080p && (
                    <Flex flex="1" mt="25%" color="gray.900" >
                        <BeginButton fixedColor="whiteAlpha.600" />
                    </Flex>
                )}
            </Box>
            {isLargerThan1080p && (
                <Flex 
                    flex={1} 
                    // bgGradient='linear(to-r, green.200, pink.500)' 
                    borderTopEndRadius="10px" 
                    borderBottomEndRadius="10px" 
                >
                    <BeginButton />
                </Flex>
            )}
        </Flex>
    )
}