import React from "react";
import {
  Container,
  HStack,
  Icon,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { Text, Heading } from "@chakra-ui/react";
import { FiEye } from "react-icons/fi";
import { FaFlag, FaCheckCircle, FaShieldAlt } from "react-icons/fa";

const History = () => {
  return (
    <div className="animate-bottom">
      <Container maxW="7xl">
        <Text px={{ base: "0", lg: "10" }} pb={24} fontFamily={"Montserrat"}>
          <Text textAlign="justify">
            <p>
              <Text
                fontSize={16}
                pt={10}
               
              >
                <Text as="span" fontWeight="bold" fontSize={'32px'} fontFamily={"Montserrat"}>
                  W
                </Text>
                elcome to Cedar Notions & Associates (Law Ratio), a pioneering
                law firm revolutionizing the legal landscape with innovative
                solutions, unwavering integrity, and a relentless commitment to
                client success. With over 15 years of experience, our firm has
                established itself as a beacon of excellence in Nigeria's legal
                industry, fostering long-lasting relationships built on trust,
                expertise, and personalized attention.
              </Text>
            </p>

            <br />

            <p>
              <Text fontSize={16} >
                Founded in 2008, Cedar Notions & Associates has evolved from LAW
                RATIO to become a comprehensive legal firm known for its diverse
                range of services and unwavering commitment to client
                satisfaction. This evolution reflects our dedication to adapting
                to the changing legal landscape and expanding our capabilities
                to better serve our clients.
              </Text>
            </p>
            <br />
            <p>
              <Text fontSize={16} data-aos="fade-up" data-aos-duration="500">
                At Cedar Notions & Associates, we are committed to maintaining
                the highest standards of professionalism and integrity in all
                our dealings. As we continue to grow and evolve, our focus
                remains steadfast: to be the trusted partner you can rely on for
                all your legal needs.
              </Text>
            </p>

            <HStack
              spacing={2}
              my={8}
              data-aos="fade-up"
              data-aos-duration="500"
              
            >
              <Icon as={FaFlag} boxSize={6} />
              <Heading
                as="h1"
                size={{ base: "xl", md: "xl" }}
                textAlign="left"
                fontFamily="Signika Negative"
                id="our-mission"
              >
                Our Mission
              </Heading>
            </HStack>
            <p>
              <Text fontSize={16} data-aos="fade-up" data-aos-duration="500">
                At Cedar Notions & Associates, our mission is to provide
                exceptional legal services by harnessing the power of
                qualitative research to develop informed strategies and
                customized solutions. We take pride in our commitment to
                delivering personalized attention to every client, ensuring that
                their unique needs are addressed with precision and care.
              </Text>
            </p>
            <br />
            <p>
              <Text fontSize={16} data-aos="fade-up" data-aos-duration="500">
                Our unwavering dedication to excellence drives us to continually
                enhance our services, while our passion for justice fuels our
                determination to advocate for our clients’ rights and interests.
                We strive to be more than just legal advisors; we aim to be
                trusted partners in your journey toward achieving your goals.
              </Text>
            </p>

            <br />
            <HStack
              spacing={2}
              my={8}
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <Icon as={FiEye} boxSize={6} />
              <Heading
                as="h1"
                size={{ base: "xl", md: "xl" }}
                textAlign="left"
                fontFamily="Signika Negative"
              >
                Our Vision
              </Heading>
            </HStack>

            <p>
              <Text fontSize={16} data-aos="fade-up" data-aos-duration="500">
                At Cedar Notions & Associates, our vision is to be the leading
                provider of innovative and creative legal services that empower
                individuals, businesses, and organizations to succeed. We aspire
                to deliver exceptional legal expertise while maintaining a
                personal touch, ensuring that every client feels valued and
                understood.
              </Text>
            </p>
            <br />
            <p>
              <Text fontSize={16} data-aos="fade-up" data-aos-duration="500">
                We are committed to fostering a culture of teamwork, diversity,
                and inclusivity within our firm, recognizing that varied
                perspectives strengthen our ability to serve our clients eff
                ectively. Through our pro bono eff orts and community
                involvement, we aim to drive positive change and make a
                meaningful impact in the communities we serve.
              </Text>
            </p>
            <br />
            <p>
              <Text fontSize={16} data-aos="fade-up" data-aos-duration="500">
                Embracing technology is central to our mission, as we
                continually seek ways to enhance client experiences and achieve
                optimal results. By leveraging the latest tools and platforms,
                we strive to make our legal services more accessible and effi
                cient.
              </Text>
            </p>
            <br />
            <p>
              <Text fontSize={16} data-aos="fade-up" data-aos-duration="500">
                Ultimately, we aim to build and nurture lasting relationships
                based on trust, integrity, and respect. At Cedar Notions &
                Associates, we believe that strong relationships are the
                foundation of successful legal partnerships, and we are
                dedicated to walking alongside our clients on their journey to
                success.
              </Text>
            </p>
          </Text>

          <HStack spacing={2} my={8} data-aos="fade-up" data-aos-duration="500">
            <Icon as={FaShieldAlt} boxSize={6} />
            <Heading
              as="h1"
              size={{ base: "xl", md: "xl" }}
              textAlign="left"
              fontFamily="Signika Negative"
            >
              Our Reputation
            </Heading>
          </HStack>

          <Text
            fontSize={{ base: "lg", md: "xl" }}
            fontFamily="Montserrat"
            mb={4}
            data-aos="fade-up"
            data-aos-duration="500"
          >
            Built on a foundation of:
          </Text>
          <List spacing={3}>
            <ListItem data-aos="fade-up" data-aos-duration="500">
              <ListIcon as={FaCheckCircle} color="#D6C84A" />
              Unwavering integrity in every interaction
            </ListItem>
            <ListItem data-aos="fade-up" data-aos-duration="500">
              <ListIcon as={FaCheckCircle} color="#D6C84A" />
              Unrivaled expertise across diverse practice areas
            </ListItem>
            <ListItem data-aos="fade-up" data-aos-duration="500">
              <ListIcon as={FaCheckCircle} color="#D6C84A" />
              Unrelenting dedication to client-centric service
            </ListItem>
          </List>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            fontFamily="Montserrat"
            mt={4}
            data-aos="fade-up"
            data-aos-duration="500"
          >
            Our reputation speaks for itself, earned through years of dedicated
            service to individuals, businesses, and organizations. We have
            consistently demonstrated our ability to navigate complex legal
            challenges, providing innovative solutions that exceed client
            expectations.
          </Text>
        </Text>
      </Container>
    </div>
  );
};

export default History;
