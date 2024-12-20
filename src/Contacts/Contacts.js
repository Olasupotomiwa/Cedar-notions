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
  FaPhoneAlt,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import Footer from "../Homepage/Footer";

const ContactSection = () => {
  return (
    <Box>
      <Box py={8} px={4} bg={"gray.200"}>
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
            <Box mt={4}>
              <Link
                to="tel:+2349137105771"
                aria-label="Phone 1"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FaPhoneAlt
                  style={{ color: "black", marginRight: "0.5em" }}
                  size="20"
                />
                <Text color="black">+234 91 371 057 71</Text>
              </Link>
              <Link
                to="tel:+2348033277051"
                aria-label="Phone 2"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <FaPhoneAlt
                  style={{ color: "black", marginRight: "0.5em" }}
                  size="20"
                />
                <Text color="black">+234 80 332 770 51</Text>
              </Link>
            </Box>
          </HStack>

          {/* Address */}
          <VStack spacing={4} align="flex-start">
            {/* Head Office */}
            <HStack spacing={2}>
              <Icon as={MdLocationOn} boxSize={6} color="black" />
              <Text fontSize="lg" fontWeight="bold">
                Lagos Office (Head of Operations): 86 Allen Avenue, Ikeja, Lagos
                State
              </Text>
            </HStack>
            <Text fontSize="md">
              Our primary office serves as the hub for our operations, where our
              team collaborates to provide high-quality legal services to
              clients throughout the South West Region, including ; Ibadan,
              Osogbo, Akure, Abeokuta and Ilorin.
            </Text>

            {/* Branch Office */}
            <HStack spacing={2}>
              <Icon as={MdLocationOn} boxSize={6} color="black" />
              <Text fontSize="lg" fontWeight="bold">
                Owerri Office: 34A Gov Ikedi Ohakhim Plaza, Relief Market,
                Owerri, Imo State.
              </Text>
            </HStack>
            <Text fontSize="md">
              Our Owerri office extends our reach, delivering expertise to
              clients in the South -East and South-South Regions including;
              Enugu, Awka, Port Harcourt, Asaba, Uyo, Umahia and Abakaliki.
            </Text>
          </VStack>
          <Text fontSize="md">
            With a national footprint, we remain committed to upholding the
            highest standards of professionalism and integrity in all our
            dealings. As we continue to grow and evolve, our focus remains
            steadfast: to be the trusted partner you can rely on for all your
            legal needs.
          </Text>
        </VStack>
      </Box>
      <Footer />
    </Box>
  );
};

export default ContactSection;
