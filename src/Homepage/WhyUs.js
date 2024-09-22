import React from "react";
import {
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  Button,
  Flex,
  Box,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import Law from "../assets/jury.jpg";

const HorizontalCard = () => {
  return (
    <Card
      display="flex"
      direction={{ base: "column", md: "row" }} // Column on small screens, row on larger screens
      overflow="hidden"
      variant="outline"
      maxW={{ base: "90vw", md: "70vw" }}
      mx="auto"
      mt={4}
    >
      <Flex flex="1" justifyContent="center" alignItems="center" py={0}>
        <Image objectFit="cover" src={Law} alt="law" />
      </Flex>
      <Flex flex="1" p={4} direction={"row"}>
        <CardBody textAlign="center">
          {" "}
          {/* Center text for better appearance */}
          <Flex alignItems="center">
  <Box as={FaStar} w={6} h={6} color="black" mr={2} /> {/* Icon representing reliability */}
  <Heading size="md" textAlign={{ base: "center", md: "left" }}   fontFamily="Montserrat">
    Why Choose Us ?
  </Heading>
</Flex>

          <Text py="2" textAlign={{ base: "justify", md: "justify" }}   fontFamily="Montserrat">
            At Cedar Notions & Associates, we understand that every legal
            challenge is unique, which is why we off er personalized legal
            expertise specifically tailored to meet your individual needs. Our
            commitment to your success is unwavering; we take the time to
            listen, understand your objectives, and craft strategies that align
            with your goals.
          </Text>
          <Box mt="6" textAlign={"right"}>
            <Button>Read more</Button>
          </Box>
        </CardBody>
      </Flex>
    </Card>
  );
};

export default HorizontalCard;
