import { ChakraProvider, Flex } from '@chakra-ui/react'
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { QuestionsProvider } from '../hooks/useQuestions';

import { theme } from '../styles/theme';
import Favicon from '../components/Favicon';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <QuestionsProvider>
        <Flex flexDir={"column"} minHeight={"100vh"} >
          <Head>
            <title>Camila's Quiz</title>
            {/* <link rel="shortcut icon" href="/favicon.ico" /> */}
          </Head>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Flex>
      </QuestionsProvider>
    </ChakraProvider>
  )
}

export default MyApp
