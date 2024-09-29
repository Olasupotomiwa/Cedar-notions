import React from "react";
import { Container, HStack, Icon, Button } from "@chakra-ui/react";
import { Text, Heading } from "@chakra-ui/react";

import { FaStar } from "react-icons/fa";

const ChooseUs = () => {
  return (
    <div className="animate-bottom">
      <Container maxW="7xl">
        <Text px={{ base: "0", lg: "10" }} pb={24} fontFamily={"Montserrat"}>
          <Text textAlign="justify">
            <HStack
              spacing={2}
              my={8}
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <Icon as={FaStar} boxSize={6} />
              <Heading
                as="h1"
                size={{ base: "xl", md: "xl" }}
                textAlign="left"
                fontFamily="Signika Negative"
                id="choose-us"
              >
                Why Choose Us?
              </Heading>
            </HStack>
            <p>
              <Text fontSize={16} data-aos="fade-up" data-aos-duration="500">
                Our innovative solutions are rooted in cutting-edge research and
                a proactive approach, allowing us to navigate the complexities
                of the legal landscape eff ectively. We pride ourselves on
                staying ahead of industry trends, ensuring that you receive the
                most relevant and eff ective legal advice available.
              </Text>
            </p>
            <br />
            <p>
              <Text fontSize={16} data-aos="fade-up" data-aos-duration="500">
                Our team boasts unrivaled expertise across a diverse range of
                practice areas, from corporate law to family law, real estate to
                intellectual property. This breadth of knowledge enables us to
                address multifaceted legal issues with confidence and precision,
                giving you peace of mind knowing that you’re in capable hands.
              </Text>
            </p>

            <br />
            <p>
              <Text fontSize={16} data-aos="fade-up" data-aos-duration="500">
                In today’s fast-paced world, accessibility is paramount. That’s
                why we off er seamless virtual legal services, making it easy
                for clients around the globe to connect with us. Our digital
                platforms ensure that you have quick and secure access to our
                attorneys, regardless of your location.
              </Text>
            </p>

            <br />
            <p>
              <Text fontSize={16} data-aos="fade-up" data-aos-duration="500">
                With a proven track record of success in handling complex legal
                matters, we are dedicated to achieving the best possible
                outcomes for our clients. Our history of delivering favorable
                results speaks volumes about our expertise and commitment.
                Choose Cedar Notions & Associates for your legal needs and
                experience the diff erence that our dedicated team can make in
                your journey toward success.
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
            href="/"
            target="_blank"
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

export default ChooseUs;
