import { ChakraProvider, Flex } from '@chakra-ui/react'
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { QuestionsProvider } from '../hooks/useQuestions';

import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <QuestionsProvider>
        <Flex flexDir={"column"} minHeight={"100vh"} >
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Flex>
      </QuestionsProvider>
    </ChakraProvider>
  )
}

export default MyApp
