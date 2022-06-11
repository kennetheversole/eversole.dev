import { Button, ButtonGroup, Flex, Stack, Spacer, Box, Heading } from '@chakra-ui/react'
import Link from 'next/link'


const Navbar = () => {
    return (
     <Flex
        w="100%"
        px="30"
        py="5"
        align="center"
        justify="space-between"
        minWidth="max-content">
         <Box p='2'>
           <Heading size='md'>Eversole.dev</Heading>
         </Box>
         <Spacer /> 
         <Stack px="10" spacing={8} direction='row'>
            <Link href="/">
              <a>Home</a>
           </Link>
           <Link href="/about">
              <a>About</a>
           </Link>
         </Stack>
    </Flex>

    )


}


export default Navbar
