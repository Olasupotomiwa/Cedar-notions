import React from "react";
import { Box, Flex, Divider, Text, Heading } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

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
      data-aos-duration="200"
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
              <Link to="https://web.facebook.com/profile.php?id=61564295513479&__cft__%5B0%5D=AZVfPJi39QS4rWxfWA-r9AtPzCxyWwzBgmFwrNglba0qMevuKCu7F5-yxs5dsqYZ_RdqG36nCitjT5dOt_ivI9tY3sFjlevim-zTLxNBCkA6vy04xl8mx2lI1gWGltfreAZ6IYZReFtYym3DIXOYan6L0i2HpO7u_k9G59ES_GlH7-hdRPyYM2rw5ZmroP45pTtqLBc6TNnBGJpNuclTNWog&__tn__=-UC%2CP-R">
                <FaFacebookF style={{ color: "white" }} size="25" />
              </Link>
              <Link to="https://www.instagram.com/cedarnotions_law_ratio/">
                <FaInstagram style={{ color: "white" }} size="25" />
              </Link>
              <Link to="https://x.com/CedarNotions">
                <FaTwitter style={{ color: "white" }} size="25" />
              </Link>
              <Link to="https://www.linkedin.com/company/cedar-notions-and-associates-law-ratio/">
                <FaLinkedinIn style={{ color: "white" }} size="25" />
              </Link>
              <Link to="mailto:contact@cedarnotionsassociate.co.site">
                <FaEnvelope style={{ color: "white" }} size="25" />
              </Link>
             
            </Flex>
            <Box mt={4}>
                <Link
                  to="tel:+2349127105771"
                  aria-label="Phone 1"
                  style={{ display: "flex", alignItems: "center", marginTop: '10px' }}
                 
                >
                  <FaPhoneAlt
                    style={{ color: "white", marginRight: "0.5em" }}
                    size="20"
                  />
                  <Text color="white">+234 91 271 057 71</Text>
                </Link>
                <Link
                  to="tel:+2348033277051"
                  aria-label="Phone 2"
                  style={{ display: "flex", alignItems: "center", marginTop: '10px' }}
                >
                  <FaPhoneAlt
                    style={{ color: "white", marginRight: "0.5em" }}
                    size="20"
                  />
                  <Text color="white">+234 80 332 770 51</Text>
                </Link>
              </Box>
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

          <Box flexBasis="25%" fontFamily="Montserrat">
            <Box color="white">
              <Box mb={4}>
                <Text fontWeight={"600"}>
                  <ul>
                    <li>Head Office</li>
                  </ul>
                </Text>
                <Text>6 Allen Avenue, Ikeja, Lagos State</Text>
              </Box>

              <Text fontWeight={"600"}>
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
              Cedar Notions & Associates © {new Date().getFullYear()}, all
              rights reserved
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Footer;
