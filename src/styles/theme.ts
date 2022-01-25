import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { mode, createBreakpoints } from "@chakra-ui/theme-tools"

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

const breakpoints = createBreakpoints({
    sm: '320px',
    md: '640px',
    heightMd: '720px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
});

const fonts = ({
    body: 'Manrope',
    heading: 'Manrope',
});

const colors = ({
    gray: {
        "50": "#EEEEF2",
        "100": "#D1D2DC",
        "200": "#B3B5C6",
        "300": "#9699B0",
        "400": "#797D9A",
        "500": "#616480",
        "600": "#4B4D63",
        "700": "#313147",
        "800": "#272733",
        "900": "#181B23",
    },
});

export const theme = extendTheme({
    colors,
    fonts,
    config,
    breakpoints,
    styles: {
        global: (props) => ({
            body: {
                bg: mode('whiteAlpha.900', 'gray.900')(props),
                color: mode('gray.800', 'gray.50')(props),
            }
        })
    },
});