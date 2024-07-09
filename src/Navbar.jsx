import React from 'react'
import { Flex, Link ,Button } from "@chakra-ui/react"
import { FaBars } from "react-icons/fa6";
const Navbar = () => {
  let navitems=[
  {nam:'Home',path:'/'},
  {nam:'About',path:'/'},
  {nam:'Services',path:'/'},
  {nam:'Portfolio',path:'/'},
  {nam:'Contact',path:'/'}
]
  return (
    <>
    <Flex align={'center'} justify={'space-between'}  px={'10%'} py={'25px'} bg={'black'} color={'white'}>
    <Link as={"a"} fontSize={'30px'}  fontWeight={'bold'}>DevFolio</Link>
    <Button display={{md:"none"}}><FaBars /></Button>
    <Flex gap={'20px'} >
     {
      navitems.map((item,index)=>(
        <Link as={"a"} key={index} fontSize={16}>{item.nam}</Link>
      ))
     }
    </Flex>
</Flex>
</>
  )
}

export default Navbar