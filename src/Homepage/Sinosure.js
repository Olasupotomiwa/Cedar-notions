import React from "react";
import {
  Container,
  HStack,
  Icon,
  ListIcon,
  ListItem,
  List,
  Box,
} from "@chakra-ui/react";
import { Text, Heading } from "@chakra-ui/react";

import { FaCheckCircle, FaShieldAlt } from "react-icons/fa";

const Virtual = () => {
  return (
    <div className="animate-bottom">
      <Container maxW="7xl" mb={4}>
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
       
       
      </Container>
    </div>
  );
};

export default Virtual;
