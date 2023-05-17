import { ChakraProvider, Flex } from '@chakra-ui/react'
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { QuestionsProvider } from '../contexts/useQuestions';
import { LanguageProvider } from '../contexts/useLanguage';

import { theme } from '../styles/theme';
import { AuthUserProvider } from '../contexts/useAuth';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <LanguageProvider>
        <QuestionsProvider>
          <Flex flexDir={"column"} minHeight={"100vh"} >
            <Head>
              <title>{"Camila's Quiz"}</title>
            </Head>
            <AuthUserProvider>
              <Header />
                <Component {...pageProps} />
              <Footer />
            </AuthUserProvider>
          </Flex>
        </QuestionsProvider>
      </LanguageProvider>
    </ChakraProvider>
  )
}

export default MyApp
