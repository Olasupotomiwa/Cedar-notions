import React from "react";
import {
  Box,
  Text,
  Flex,
  Center,
  Heading,
  Image,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Card = ({ imageSrc, name, specialization }) => {
  return (
    <Box
      px={{ base: "2", md: "10" }}
      borderRadius="md"
      width={{ base: "100%", md: "300px" }}
      mb={4}
    >
      <Flex direction="column" align="center">
        <Image
          src={imageSrc}
          alt={name}
          borderRadius="full"
          boxSize="200px"
          objectFit="cover"
          mb={4}
        />
        <Heading
          as="h2"
          size="md"
          mb={2}
          color="black"
          fontWeight="500"
          fontFamily="Montserrat"
          textAlign={'center'}
        >
          {name}
        </Heading>
        <Text fontSize="16px" color="#000000" fontFamily="Montserrat" mb={4} textAlign={'center'}>
          {specialization}
        </Text>
      </Flex>
    </Box>
  );
};

const AttorneyProfiles = () => {
  const data = [
    {
      name: "Eke, Chinedum Obioha",
      specialization: " Real Estate and Property Law, Corporate Governance and Regulatory Compliance, Arbitration & Alternative Dispute Resolution (ADR), Constitutional and Administrative Law",
      imageSrc: "https://via.placeholder.com/150",
    },
    {
      name: "Ogbonna, Vincent Ifeanyi",
      specialization: "Litigation, Taxation, Family Law",
      imageSrc: "https://via.placeholder.com/150",
    },
    {
      name: "Edoziem, Chimarokem Prince",
      specialization: "Senior Associate/Team Lead, Litigation Department",
      imageSrc: "https://via.placeholder.com/150",
    },
    {
      name: "Nwaogbo, Ikedinachi Collins",
      specialization: "Criminal Justice, Corporate Law, Commercial Law",
      imageSrc: "https://via.placeholder.com/150",
    },
    {
      name: "Badejoko Selimot Jokotade",
      specialization: " General Practice",
      imageSrc: "https://via.placeholder.com/150",
    },
    {
      name: "Okechukwu Emmanuel Eke",
      specialization: "Real Estate Management, Property Development",
      imageSrc: "https://via.placeholder.com/150",
    },
    
      
  ];

  const [isMobile] = useMediaQuery("(max-width: 767px)");

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  if (isMobile) {
    return (
      <Center>
        <Box py={4} width={"90%"} pb={10}>
          <Box textAlign={"center"} p={0} mt={2}>
            <Heading
              fontFamily="Montserrat"
              fontSize={{ base: "20px", md: "32px" }}
            >
              Meet Our Attorneys
            </Heading>
            <Text
              fontSize="16px"
              color="#000000"
              fontFamily="Montserrat"
              my={2}
              mx={"auto"}
              w={{ base: "100%", md: "60%" }}
              textAlign={{ base: "justify", md: "center" }}
              mb={8}
            >
              Our team of seasoned legal professionals are distinguished by
              their extensive experience in various practice areas, in-depth
              knowledge of Nigerian law and regulations, and a passion for
              delivering precision-crafted solutions. Each attorney brings
              unique expertise and perspectives to provide comprehensive legal
              services.
            </Text>
          </Box>
          <Carousel
            responsive={responsive}
            swipeable
            draggable
            showDots
            infinite
            autoPlay
            autoPlaySpeed={3000}
            customTransition="transform 300ms ease-in-out"
            transitionDuration={300}
            containerClass="carousel-container"
            dotListClass="custom-dot-list"
            arrows={false}
          >
            {data.map((attorney, index) => (
              <Card
                key={index}
                imageSrc={attorney.imageSrc}
                name={attorney.name}
                specialization={attorney.specialization}
              />
            ))}
          </Carousel>
          <Box mt={6} textAlign={"right"}>
            <Button
              colorScheme="teal"
              variant="solid"
              size="lg"
              as="a"
              href="/full-details"
            >
              Exlore Full Details
            </Button>
          </Box>
        </Box>
      </Center>
    );
  } else {
    return (
      <Box>
        <Box textAlign={"center"} p={0} mt={6}>
          <Heading
            fontSize={{ base: "20px", md: "32px" }}
            fontFamily="Montserrat"
          >
            Meet Our Attorneys
          </Heading>
          <Text
            fontSize="16px"
            color="#000000"
            fontFamily="Montserrat"
            my={2}
            mx={"auto"}
            w={"60%"}
            textAlign={{ base: "justify", md: "center" }}
          >
            Our team of seasoned legal professionals are distinguished by their
            extensive experience in various practice areas, in-depth knowledge
            of Nigerian law and regulations, and a passion for delivering
            precision-crafted solutions. Each attorney brings unique expertise
            and perspectives to provide comprehensive legal services.
          </Text>
        </Box>

        <Flex
          direction={{ base: "column", md: "row" }}
          align={{ base: "center", md: "flex-start" }}
          justify="center"
          wrap="wrap"
          mt={10}
          fontFamily="Montserrat"
          pb={0}
        >
          {data.map((attorney, index) => (
            <Card
              key={index}
              imageSrc={attorney.imageSrc}
              name={attorney.name}
              specialization={attorney.specialization}
            />
          ))}

         
        </Flex>
        <Box mt={0} textAlign={"right"} px={10}>
            <Button
              colorScheme="teal"
              variant="solid"
              size="lg"
              as="a"
              href="/full-details"
            >
              Exlore Full Details
            </Button>
          </Box>
      </Box>
    );
  }
};

export default AttorneyProfiles;