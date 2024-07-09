import React from 'react'
import { Box, Button, Center, Flex, Link, Text } from "@chakra-ui/react"
import Typewriter from 'typewriter-effect';
const Hero = () => {
  return (
    <>
    <Flex h={'86.5vh'} pos={'relative'} _before={{
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0,0,0,0.5)'
    }} flexDirection={'column'} bg={'url(https://emeritus.org/in/wp-content/uploads/sites/3/2023/02/pexels-myburgh-roux-1102797-1024x683.jpg.optimal.jpg)'} bgRepeat={'no-repeat'} bgSize={'cover'} justify={'Center'} align={'center'} color={'white'}>
    <Box fontSize={'60px'} pos={'relative'} zIndex={10}>I am Muneeb Ur Rehman</Box>
    <Box fontSize={'40px'} pos={'relative'} zIndex={10} fontWeight={'bold'}>
    <Typewriter
    options={{
      strings: ['Developer', 'Freelancer',],
      autoStart: true,
      loop: true,
    }}
    /></Box>
    </Flex>
    </>
  )
}

export default Hero