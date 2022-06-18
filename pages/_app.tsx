import '../styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import {ChakraProvider, Flex} from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import { ColorModeScript } from '@chakra-ui/react'
import theme from '../styles/theme'
import { extendTheme } from '@chakra-ui/react'


import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'



function MyApp({ Component, pageProps }: AppProps) {

// 2. Extend the theme to include custom colors, fonts, etc
 const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
  }

 const theme = extendTheme({ colors })




 return (
    <ChakraProvider theme={theme}>
        <Head>
        <title> Eversole.dev</title>
      </Head>
      <Navbar></Navbar>
      <Flex
        w="100%"
        px="15vw">
      <Component {...pageProps }/>
     </Flex>
  </ChakraProvider>
   )
}

export default MyApp
