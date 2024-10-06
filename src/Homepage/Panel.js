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
import { FaFlag } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import Law from "../assets/law.jpg";

const HorizontalCard = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/about");
    setTimeout(() => {
      const missionSection = document.getElementById("our-mission");
      if (missionSection) {
        const offset = -200; 
        const elementPosition =
          missionSection.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition + offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 500); // Delay for navigation to complete
  };

  return (
    <Card
      display="flex"
      direction={{ base: "column", md: "row" }} // Column on small screens, row on larger screens
      overflow="hidden"
      variant="outline"
      maxW={{ base: "90vw", md: "70vw" }}
      mx="auto"
     
    >
      <Flex
        flex="1"
        p={4}
        direction={"row"}
        data-aos="fade-up"
        data-aos-duration="200"
      >
        <CardBody textAlign="center">
          {" "}
          {/* Center text for better appearance */}
          <Flex alignItems="center">
            <Box as={FaFlag} w={6} h={6} color="black" mr={2} />{" "}
            {/* Icon with some styling */}
            <Heading
              size="md"
              textAlign={{ base: "center", md: "left" }}
              fontFamily={"Signika Negative"}
            >
              Our Mission
            </Heading>
          </Flex>
          <Text py="2" textAlign={{ base: "justify", md: "justify" }}>
            At Cedar Notions & Associates, our mission is to provide exceptional
            legal services by harnessing the power of qualitative research to
            develop informed strategies and customized solutions. We take pride
            in our commitment to delivering personalized attention to every
            client, ensuring that their unique needs are addressed with
            precision and care.
          </Text>
          <Box mt="6" textAlign={"left"}>
            <Button onClick={handleClick}>Read more</Button>
          </Box>
        </CardBody>
      </Flex>

      <Flex
        flex="1"
        justifyContent="center"
        alignItems="center"
        py={0}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <Image objectFit="cover" h={"full"} src={Law} alt="law" />
      </Flex>
    </Card>
  );
};

export default HorizontalCard;
