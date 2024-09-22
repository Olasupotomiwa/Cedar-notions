import React from "react";
import { Box, Heading, Text, Button, Flex, VStack } from "@chakra-ui/react";
import heroBg from "../assets/bg.png";

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
        <Box px={{ base: "4", md: "10" }} mb={20}>
          <Heading
            as="h1"
            size="2xl"
            mb={10}
            textAlign="center"
            fontFamily="Montserrat"
          >
            Cedar Notions & Associates (Law Ratio)
          </Heading>
          <Text
            fontSize="xl"
            mb={24}
            textAlign="center"
            fontFamily="Montserrat"
          >
            A pioneering law firm revolutionizing the legal landscape with
            innovative solutions, unwavering integrity, and a relentless
            commitment to client success.
          </Text>
          <Box mx={"auto"} textAlign={"center"}>
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
