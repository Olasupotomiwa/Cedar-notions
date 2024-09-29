import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Link,
} from "@chakra-ui/react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { MdPhone, MdLocationOn } from "react-icons/md";
import Footer from "../Homepage/Footer";

const ContactSection = () => {
  return (
    <Box>
      <Box py={8} px={4} bg={"gray.100"}>
        {/* Get in Touch Section */}
        <VStack align="flex-start" spacing={4}>
          <Heading
            as="h2"
            size="lg"
            fontFamily="Signika Negative"
            color="black"
          >
            Get in Touch
          </Heading>
          <Text fontSize="md">
            Schedule a consultation with Cedar Notions & Associates to explore
            how our tailored legal services can meet your unique needs.
            Experience firsthand the power of personalized legal expertise that
            has earned us the trust of countless satisfied clients.
          </Text>
          <Text fontSize="md">
            Whether you require guidance in corporate law, family law, real
            estate, or any other area of legal practice, our dedicated team is
            here to support you every step of the way. We pride ourselves on
            building strong relationships and understanding the specific
            challenges you face, ensuring that our solutions are aligned with
            your goals.
          </Text>
          <Text fontSize="md">
            Don’t hesitate to take the first step toward achieving your legal
            objectives. Discover the Cedar Notions & Associates difference
            today—reach out to us, and let’s embark on this journey together.
            Your success is our priority, and we look forward to being your
            trusted legal partner.
          </Text>
        </VStack>

        {/* Contact Information Section */}
        <VStack spacing={4} align="flex-start" mt={6}>
          {/* Social Media Icons */}
          <HStack spacing={4}>
            <Link href="https://www.facebook.com" isExternal>
              <Icon as={FaFacebookF} boxSize={6} color="black" />
            </Link>
            <Link href="https://www.twitter.com" isExternal>
              <Icon as={FaTwitter} boxSize={6} color="black" />
            </Link>
            <Link href="https://www.linkedin.com" isExternal>
              <Icon as={FaLinkedinIn} boxSize={6} color="black" />
            </Link>
            <Link href="https://www.instagram.com" isExternal>
              <Icon as={FaInstagram} boxSize={6} color="black" />
            </Link>
          </HStack>

          {/* Phone Contact */}
          <HStack spacing={2}>
            <Icon as={MdPhone} boxSize={6} color="black" />
            <Text fontSize="lg">+123-456-7890</Text>
          </HStack>

          {/* Address */}
          <VStack spacing={4} align="flex-start">
            {/* Head Office */}
            <HStack spacing={2}>
              <Icon as={MdLocationOn} boxSize={6} color="black" />
              <Text fontSize="lg" fontWeight="bold">
                Head Office: 86 Allen Avenue, Ikeja, Lagos State
              </Text>
            </HStack>
            <Text fontSize="md">
              Our primary office serves as the hub for our operations, where our
              team collaborates to provide high-quality legal services to
              clients throughout the region.
            </Text>

            {/* Branch Office */}
            <HStack spacing={2}>
              <Icon as={MdLocationOn} boxSize={6} color="black" />
              <Text fontSize="lg" fontWeight="bold">
                Branch Office: No. 10 Fullmoon Avenue, Owerri, Imo State
              </Text>
            </HStack>
            <Text fontSize="md">
              Our branch office extends our reach, allowing us to offer our
              expertise to clients in the Imo State area and beyond.
            </Text>
          </VStack>
        </VStack>
      </Box>
      <Footer />
    </Box>
  );
};

export default ContactSection;
