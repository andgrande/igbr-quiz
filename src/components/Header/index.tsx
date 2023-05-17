import { Heading, Flex, IconButton, useColorMode, Select, Button } from "@chakra-ui/react";
import { RiMoonLine, RiSunLine, RiRefreshLine, RiLogoutCircleRLine } from "react-icons/ri";
import { useQuestionsContext } from "../../contexts/useQuestions";
import { useLanguageContext } from "../../contexts/useLanguage";
import { useAuth } from "../../contexts/useAuth";

export default function Header() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { showHome, resultsReady, handleLoadQuestions } = useQuestionsContext();
    const { handleChangeLanguage } = useLanguageContext();
    const { authUser, signOut } = useAuth();

    const t = ['a', 'b', 'c'];

    function handleSelectLanguage(v) {
        console.log(v)
    }

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

            <select placeholder="🔤"
                // width="20"
                onChange={e => handleChangeLanguage(e.target.value)}
            >
                {t.map(opt => <option value={opt}>{opt}</option>)}
                
                <option value='fr'>🇫🇷</option>
                <option value='pt'>🇧🇷</option>
            </select>

            <Button type="submit"
                // onClick={() => handleSelectLanguage()}
            >Subermet</Button>
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
            {authUser?.uid && (
                <IconButton
                    aria-label="Sair"
                    icon={<RiLogoutCircleRLine />}
                    fontSize="20" 
                    color="bg"
                    colorScheme="color"
                    onClick={() => signOut() }
                />
            )}
        </Flex>
    )
}