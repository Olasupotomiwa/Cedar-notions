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
import Chimaroke from '../assets/Chimaroke.jpg'
import Badejoko from "../assets/BadejokoSelimot.png"
import Collins from '../assets/Collins.jpg'
import EkeChinedu from "../assets/EkeChinedum.jpg"
import IkeNed from "../assets/IkeNed.JPG"
import Okechukwuku from "../assets/Okechukwu.jpg"
import Ogbonna from '../assets/Ogbonna.png'

const Card = ({ imageSrc, name, specialization }) => {
  return (
    <Box
      px={{ base: "4", md: "10" }}
      borderRadius="md"
      width={{ base: "100%", md: "350px" }}
      mb={4}
      data-aos="fade-right"
      data-aos-duration="200"
      
    >
      <Flex direction="column" align="center">
        <Image
          src={imageSrc}
          alt={name}
          borderRadius="20px"
          boxSize="350px"
         
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
      specialization: "Managing Partner",
      imageSrc: EkeChinedu,
    },
    {
      name: "Ogbonna, Vincent Ifeanyi",
      specialization: "Partner",
      imageSrc: Ogbonna,
    },
    {
      name: "Edoziem, Chimarokem Prince",
      specialization: "Senior Associate/Team Lead, Litigation Department",
      imageSrc: Chimaroke,
    },
    {
      name: "Nwaogbo, Ikedinachi Collins",
      specialization: "Senior Associate",
      imageSrc: Collins,
    },
    {
      name: "Badejoko Selimot Jokotade",
      specialization: "Associate",
      imageSrc:  Badejoko,
    },
    {
      name: "Okechukwu Emmanuel Eke",
      specialization: "Real Estate Management, Property Development",
      imageSrc: Okechukwuku,
    },
    {
      name: "Ike Ned Stanley",
      specialization: "Facility Manager & Maintenance Expert ",
      imageSrc: IkeNed,
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
        <Box py={4} width={"100%"} pb={10}>
          <Box textAlign={"center"} p={0} mt={2} data-aos="fade-up"
      data-aos-duration="200">
            <Heading
              fontFamily="Signika Negative"
              fontSize={{ base: "32px", md: "40px" }}
            >
              Meet Our Team
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
              px={4}
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
          <Box mt={6} textAlign={"right"}  px={4}>
            <Button
              colorScheme="teal"
              variant="solid"
              size="lg"
              as="a"
             
              href="/team"
            >
             View full profile
            </Button>
          </Box>
        </Box>
      </Center>
    );
  } else {
    return (
      <Box>
        <Box textAlign={"center"} p={0} mt={6} data-aos="fade-up"
      data-aos-duration="100">
          <Heading
            fontSize={{ base: "32px", md: "40px" }}
            fontFamily="Signika Negative"
          >
            Meet Our Team
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
        <Box pb={10} textAlign={"right"} px={10} data-aos="fade-up"
      data-aos-duration="200">
            <Button
              colorScheme="teal"
              variant="solid"
              size="lg"
              as="a"
              href="/team"
            >
              View Full Profile
            </Button>
          </Box>
      </Box>
    );
  }
};

export default AttorneyProfiles;
