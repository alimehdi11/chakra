import {
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Progress,
} from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <>
      <Flex justify={"center"} align={"center"} h={"100vh"}>
        <HStack w={"90%"} h={"90%"} boxShadow={"2xl"} p={6}>
          <VStack w={"50%"} h={"100%"} p={4}>
            <HStack h={"40%"} w={"full"} spacing={4}>
              <Image boxSize={"200px"} />

              <VStack align={"start"}>
                <HStack>
                  <Text fontWeight={"bold"}>Name:</Text>{" "}
                  <span>Muneeb-ur-Rehman</span>
                </HStack>
                <HStack>
                  <Text fontWeight={"bold"}>Profile:</Text>{" "}
                  <span>Full Stack</span>
                </HStack>
                <HStack>
                  <Text fontWeight={"bold"}>Email:</Text>{" "}
                  <span>muneeburrehman1912@gmail.com</span>
                </HStack>
                <HStack>
                  <Text fontWeight={"bold"}>Phone:</Text>{" "}
                  <span>593606936</span>
                </HStack>
              </VStack>
            </HStack>

            <VStack h={"60%"} align={"start"} w={"full"} spacing={4}>
              <Heading>Skills</Heading>
              <VStack w={"full"} align={"start"} spacing={2}>
                <Text display={'flex'} justifyContent={'space-between'} w={'full'}>
                <Text>HTML</Text><Text>100%</Text></Text>
                <Progress value={100} rounded={'md'} w="full" />
              </VStack>
              <VStack w={"full"} align={"start"} spacing={2}>
                <Text display={'flex'} justifyContent={'space-between'} w={'full'}>
                <Text>HTML</Text><Text>90%</Text></Text>
                <Progress value={90} rounded={'md'} w="full" />
              </VStack>
              <VStack w={"full"} align={"start"} spacing={2}>
                <Text display={'flex'} justifyContent={'space-between'} w={'full'}>
                <Text>HTML</Text><Text>75%</Text></Text>
                <Progress value={75} rounded={'md'} w="full" />
              </VStack>
              <VStack w={"full"} align={"start"} spacing={2}>
                <Text display={'flex'} justifyContent={'space-between'} w={'full'}>
                <Text>HTML</Text><Text>55%</Text></Text>
                <Progress value={55} rounded={'md'} w="full" />
              </VStack>
            </VStack>
          </VStack>
          <VStack w={"50%"} h={"100%"}></VStack>
        </HStack>
      </Flex>
    </>
  );
};

export default About;
