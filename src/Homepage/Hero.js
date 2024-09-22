import React from "react";
import { Box, Heading, Text, Button, Flex, VStack } from "@chakra-ui/react";
import heroBg from "../assets/library.jpg";

const HeroPage = () => {
  return (
    <Flex
      w={"full"}
      h={"85vh"}
      backgroundImage={heroBg}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      color="white"
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={{ base: 4, md: 8 }}
        bgGradient="linear(to-b, blackAlpha.800 100%, transparent)"
      >
        <Box px={{ base: "4", md: "10" }} mb={10}>
          <Heading
            as="h1"
            size={{base: '2xl', md: '3xl'}}
            mb={10}
            textAlign="center"
            fontFamily="Montserrat"
            px={8}
          >
            Cedar Notions & Associates (Law Ratio)
          </Heading>
          <Text
            fontSize={{base: '18px', md: 'xl'}}
            mb={10}
            textAlign="center"
            fontFamily="Montserrat"
            px={{base: '4', md: '28'}}
          >
            A pioneering law firm revolutionizing the legal landscape with
            innovative solutions, unwavering integrity, and a relentless
            commitment to client success with over 15 years experience.
          </Text>
          <Box mx={"auto"} textAlign={"center"} mb={4}>
            <Button colorScheme="teal" size="lg" textAlign="center">
              Make enquiry
            </Button>
          </Box>
        </Box>
      </VStack>
    </Flex>
  );
};

export default HeroPage;
