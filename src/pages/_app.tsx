import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app';

import { QuestionsProvider } from '../hooks/useQuestions';

import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <QuestionsProvider>
        <Component {...pageProps} />
      </QuestionsProvider>
    </ChakraProvider>
  )
}

export default MyApp