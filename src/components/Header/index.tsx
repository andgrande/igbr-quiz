import { Heading, Flex, Icon, IconButton, useColorMode, Switch, Button, Box } from "@chakra-ui/react";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

export default function Header() {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Flex 
            as="header"
            width="100%"
            maxWidth={1080}
            height={{ sm: "80px", lg: "100px"}}
            marginX="auto"
            flexDirection="row" 
            justifyContent={{ sm: "space-around", md: "center", lg: "center" }}
            alignItems="center"
            alignContent="center"
        >
            <Heading as="h1" ml={{ sm: "50px", md: "0px", lg: "0px" }} fontSize={{ sm: "40px", md: "45px", lg: "50px"}} >Camila's Quiz</Heading>
            
            <IconButton 
                aria-label="Switch color mode"
                icon={colorMode === 'light' ? <RiMoonLine/> : <RiSunLine/>}
                fontSize="20" 
                ml={{ sm: "0px", md: "50px" }}
                color="bg"
                colorScheme="color"
                onClick={toggleColorMode}
            />
        </Flex>
    )
}