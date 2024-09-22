import React from "react";
import {
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  Button,
  Flex,
  Box
} from "@chakra-ui/react";
import { FaBullseye } from "react-icons/fa";
import Law from '../assets/law.jpg'

const HorizontalCard = () => {
  return (
    <Card
      display="flex"
      direction={{ base: "column", md: "row" }} // Column on small screens, row on larger screens
      overflow="hidden"
      variant="outline"
      maxW={{ base: "90vw", md: "70vw" }}
      mx="auto"
      mt={-16}
      
    >
      <Flex flex="1" p={4} direction={'row'}>
        <CardBody textAlign="center">
          {" "}
          {/* Center text for better appearance */}
          <Flex alignItems="center">
  <Box as={FaBullseye} w={6} h={6} color="black" mr={2} /> {/* Icon with some styling */}
  <Heading size="md" textAlign={{ base: "center", md: "left" }}>
    Our Mission
  </Heading>
</Flex>
          <Text py="2" textAlign={{ base: "justify", md: "justify" }} >
          At Cedar Notions & Associates, our mission is to provide exceptional legal services by
harnessing the power of qualitative research to develop informed strategies and customized
solutions. We take pride in our commitment to delivering personalized attention to every
client, ensuring that their unique needs are addressed with precision and care.
          </Text>
         <Box mt='6' textAlign={'left'}>

         <Button>
                Read more
            </Button>
         </Box>
        </CardBody>
       
      </Flex>
     

      <Flex flex="1" justifyContent="center" alignItems="center" py={0}>
        <Image
          objectFit="cover"
         
          src={Law}
          alt="law"
        />
      </Flex>
    </Card>
  );
};

export default HorizontalCard;