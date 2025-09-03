import React from "react";
import { Box, Heading, Text, Button, Flex, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaInfoCircle } from "react-icons/fa";
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
  size={{ base: "2xl", md: "3xl" }}
  mb={10}
  textAlign="center"
  fontFamily="Signika Negative"
  px={8}
  data-aos="fade-up"
  data-aos-duration="200"
>
  Cedar Notions & Associates
  <Text as="span" fontSize="2xl" fontWeight="400" fontFamily="Signika Negative" display="block" mt={2} color="white.700">
    (Law Ratio)
  </Text>
</Heading>


          <Text
            fontSize={{ base: "18px", md: "xl" }}
            mb={10}
            textAlign="center"
            fontFamily="Montserrat"
            px={{ base: "0", md: "28" }}
            data-aos="fade-down"
            data-aos-duration="300"
          >
            A pioneering law firm revolutionizing the legal landscape with
            innovative solutions, unwavering integrity, and a relentless
            commitment to client success with over 15 years experience.
          </Text>
          <Box mx={"auto"} textAlign={"center"} mb={4}>
            <Button
              leftIcon={<FaInfoCircle />}
              bg={"#D6C84A"}
              color="white"
              size="lg"
              textAlign="center"
              as={Link}
              to="/about"
            >
              About Us
            </Button>
          </Box>
        </Box>
      </VStack>
    </Flex>
  );
};

export default HeroPage;
