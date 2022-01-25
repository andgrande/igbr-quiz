import { Box, Text } from "@chakra-ui/react";

export default function Footer() {
    return (
        <Box
            as="footer"
            marginTop={"auto"}
            mb="4"
        >
            <Text align="center" fontSize={{ base: "12px", md: "16px" }}>
                © 2021, por Camila Paccini
            </Text>
        </Box>
    )
}