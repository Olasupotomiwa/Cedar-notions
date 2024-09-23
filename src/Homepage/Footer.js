import React from "react";
import { Box, Flex, Divider, Text, Heading } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  FormControl,
} from "@chakra-ui/react";
import Logo from "../assets/Logo.png";
import bg from "../assets/bg.png";

const Footer = () => {
  return (
    <Flex
      w={"full"}
      h={"auto"}
      backgroundImage={bg}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      color="white"
      data-aos="fade-up"
        data-aos-duration="500"
    >
      <Box
        p={8}
        bgGradient="linear(to-b, blackAlpha.800 100%, transparent)"
        color="white"
        
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent="space-around"
          px={{ base: "2", md: "4" }}
        >
          <Box flexBasis="40%" fontFamily="Montserrat" mb={5}>
            <Box>
              <Link to="/">
                <img src={Logo} alt="" width="200px" />
              </Link>
              <Text>
                Your trusted partner in providing expert legal solutions across
                various sectors.
              </Text>
            </Box>

            <Flex mt={8} gap="5">
              <Link to="#">
                <FaFacebookF style={{ color: "white" }} size="25" />
              </Link>
              <Link to="#">
                <FaInstagram style={{ color: "white" }} size="25" />
              </Link>
              <Link to="#">
                <FaTwitter style={{ color: "white" }} size="25" />
              </Link>
              <Link to="#">
                <FaLinkedinIn style={{ color: "white" }} size="25" />
              </Link>
              <Link to="mailto:support@cedarnotions.com">
                <FaEnvelope style={{ color: "white" }} size="25" />
              </Link>
            </Flex>
          </Box>

          <Box mb={5} flexBasis="25%">
            <Box fontFamily="Montserrat">
              <Heading color="white" fontSize="18px" fontWeight={600} mb={2}>
                Our Services
              </Heading>
              <Link>
                <Text>Corporate Law</Text>
              </Link>
              <Link>
                <Text>Litigation</Text>
              </Link>
              <Link>
                <Text>Real Estate & Construction</Text>
              </Link>
              <Link>
                <Text>Family Law</Text>
              </Link>
              <Link>
                <Text>Maritime Law</Text>
              </Link>
            </Box>
          </Box>

          <Box fontFamily="Montserrat" mb={5} flexBasis="15%">
            <Box>
              <Heading color="white" fontSize="18px" fontWeight={400} mb={2}>
                Links
              </Heading>
              <Link to="/about">
                <Text>About</Text>
              </Link>
              <Link to="/services">
                <Text>Services</Text>
              </Link>
              <Link to="/contact">
                <Text>Contact</Text>
              </Link>
            </Box>
          </Box>

          <Box
            flexBasis="25%"
           
            fontFamily="Montserrat"
          >
            <Box color="white">
              <Box mb={4}>
              <Text fontWeight={'600'} >
              <ul>
                <li>Head Office</li>
              </ul>
              </Text>
              <Text>6 Allen Avenue, Ikeja, Lagos State</Text>
              </Box>

              <Text fontWeight={'600'}>
              <ul>
                <li>Branch Oce</li>
              </ul>
              </Text>
              <Text>No. 10 Fullmoon Avenue, Owerri, Imo State</Text>
              
            </Box>
          </Box>
        </Flex>

        <Divider my={6} />

        <Flex
          justifyContent="space-around"
          alignItems="center"
          direction={{ base: "column", md: "row" }}
          px={4}
        >
          <Box my={4} fontFamily="Montserrat">
            <Text fontSize="sm" color="#ffffff">
              Cedar Notions & Associates © {new Date().getFullYear()}, all rights
              reserved
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Footer;
