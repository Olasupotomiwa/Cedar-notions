import React from "react";
import {
  Container,
  HStack,
  Icon,
  Button,
  ListIcon,
  ListItem,
  List,
  Box,
} from "@chakra-ui/react";
import { Text, Heading } from "@chakra-ui/react";

import { FaLaptop } from "react-icons/fa";
import { FaCheckCircle, FaShieldAlt } from "react-icons/fa";

const Virtual = () => {
  return (
    <div className="animate-bottom">
      <Container maxW="7xl">
        <Box px={{ base: "0", lg: "10" }}>
          <HStack spacing={2} my={8} data-aos="fade-up" data-aos-duration="500">
            <Icon as={FaShieldAlt} boxSize={6} />
            <Heading
              as="h1"
              size={{ base: "xl", md: "xl" }}
              textAlign="left"
              fontFamily="Signika Negative"
            >
              Sinosure Expertise
            </Heading>
          </HStack>

          <Text
             fontSize={{ base: "md", md: "lg" }}
            fontFamily="Montserrat"
            mb={4}
            data-aos="fade-up"
            data-aos-duration="500"
          >
            Cedar Notions & Associates possesses in-depth knowledge and
            expertise in handling matters involving SINOSURE (China Export &
            Credit Insurance Corporation). Our experienced lawyers provides a
            comprehensive guidance on SINOSURE-related Issues.
          </Text>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            fontFamily="Montserrat"
            mb={4}
            data-aos="fade-up"
            data-aos-duration="500"
          >
           SINOSURE Services include:
          </Text>
          <List spacing={3}>
            <ListItem data-aos="fade-up" data-aos-duration="500">
              <ListIcon as={FaCheckCircle} color="#D6C84A" />
              Policy Interpretation and negotiation.
            </ListItem>
            <ListItem data-aos="fade-up" data-aos-duration="500">
              <ListIcon as={FaCheckCircle} color="#D6C84A" />
              Claim management and recovery.
            </ListItem>
            <ListItem data-aos="fade-up" data-aos-duration="500">
              <ListIcon as={FaCheckCircle} color="#D6C84A" />
              Dispute resolution and arbitration
            </ListItem>
            <ListItem data-aos="fade-up" data-aos-duration="500">
              <ListIcon as={FaCheckCircle} color="#D6C84A" />
              Compliance advisory services.
            </ListItem>
            
          </List>

          <Text
            fontSize={{ base: "lg", md: "xl" }}
            fontFamily="Montserrat"
            my={4}
            data-aos="fade-up"
            data-aos-duration="500"
          >
          Key Strengths:
          </Text>
          <List spacing={3}>
            <ListItem data-aos="fade-up" data-aos-duration="500">
              <ListIcon as={FaCheckCircle} color="#D6C84A" />
              Proven success in Sinosure-related matters.
            </ListItem>
            <ListItem data-aos="fade-up" data-aos-duration="500">
              <ListIcon as={FaCheckCircle} color="#D6C84A" />
              Extensive knowledge of Sinosure policies and procedures.
            </ListItem>
            <ListItem data-aos="fade-up" data-aos-duration="500">
              <ListIcon as={FaCheckCircle} color="#D6C84A" />
              Strong relationships with Sinosure representatives.
            </ListItem>
            <ListItem data-aos="fade-up" data-aos-duration="500">
              <ListIcon as={FaCheckCircle} color="#D6C84A" />
              Effective claim management and recovery.
            </ListItem>
            
          </List>
          
        </Box>
        <Text px={{ base: "0", lg: "10" }} pb={4} fontFamily={"Montserrat"}>
          <Text textAlign="justify">
            <HStack
              spacing={2}
              my={8}
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <Icon as={FaLaptop} boxSize={6} />
              <Heading
                as="h1"
                size={{ base: "xl", md: "xl" }}
                textAlign="left"
                fontFamily="Signika Negative"
                id="our-mission"
              >
                Virtual Legal Services
              </Heading>
            </HStack>
            <p>
              <Text fontSize={16} data-aos="fade-up" data-aos-duration="500">
                As a forward-thinking law firm, Cedar Notions & Associates
                embraces technology to deliver seamless virtual legal services,
                ensuring we remain accessible to clients across the globe. Our
                innovative digital platforms facilitate effi cient
                communication, secure document sharing, and convenient
                consultation scheduling, making it easier than ever for you to
                connect with us from anywhere.
              </Text>
            </p>
            <br />
            <p>
              <Text fontSize={16} data-aos="fade-up" data-aos-duration="500">
                We understand that the legal landscape is evolving, and so are
                the needs of our clients. By integrating advanced technology
                into our practice, we enhance the client experience, allowing
                for real-time updates and collaboration. Our virtual services
                empower you to engage with our dedicated attorneys without the
                constraints of location, ensuring that expert legal support is
                just a click away.
              </Text>
            </p>

            <br />
            <p>
              <Text fontSize={16} data-aos="fade-up" data-aos-duration="500">
                Whether you need assistance with contract reviews, legal
                consultations, or ongoing case management, our virtual off
                erings are designed to provide the same level of professionalism
                and care as in-person meetings. At Cedar Notions & Associates,
                we are committed to making legal services more accessible and
                effi cient, so you can focus on what matters most to you.
                Explore the convenience of our virtual legal services today!
              </Text>
            </p>
          </Text>

          <Button
            color={"white"}
            bg={"#D6C84A"}
            variant="solid"
            fontWeight={"400"}
            size="md"
            px={10}
            py={6}
            my={2}
            href="/contact"
            as={"a"}
            _hover={{ opacity: "0.9" }}
          >
            Get in touch
          </Button>
        </Text>
      </Container>
    </div>
  );
};

export default Virtual;
