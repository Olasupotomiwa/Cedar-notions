import { Box, Flex, Image, Heading, Text, Button } from "@chakra-ui/react";

import SampleImage from "../assets/libraryy.jpg";
import path from "../assets/hammer.jpg";

const GradientComponent = () => {
  return (
    <Box bg={"#f2f2f2"} data-aos="fade-up" data-aos-duration="500">
      <Box
        h="auto"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgImage={`linear-gradient(to left, #434A5490, #434A5490), url(${SampleImage})`}
        fontFamily="Poppins"
        bgSize="cover"
        bgPosition="center"
        p={{ base: "1", md: "4" }}
        mt={4}
       
      >
        <Flex
          width="100%"
          boxShadow="lg"
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box
            flex="1"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src={path}
              display={{base: 'none', md: 'block'}}
              alt="Sample"
              objectFit="cover"
              width="75%"
              height="80%"
            />
          </Box>
          <Box flex="1" p={{ base: 4, md: 8 }}>
            <Heading
              as="h1"
              size="2xl"
              color="white"
              mb={4}
              fontFamily="Signika Negative"
            >
              Schedule a consultation with{" "}
              <Text as="span" color="#D6C84A">
                {" "}
                {/* This is where you set the custom color */}
                Cedar Notions & Associates
              </Text>{" "}
              to explore how our tailored legal services can meet your unique
              needs.
            </Heading>

            <Button
              color={"white"}
              bg={"#D6C84A"}
              variant="solid"
              fontWeight={"400"}
              size="md"
              px={10}
              py={6}
              my={10}
              href="/contact"
              target="_blank"
              as={"a"}
              _hover={{ opacity: "0.9" }}
            >
              Get in touch
            </Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default GradientComponent;
