import React from "react";
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import Chimaroke from "../assets/IkeNed.JPG";

const attorneys = [
  {
    name: "Ogbonna Vincent Ifeanyi",
    position: "Partner",
    expertise: ["Litigation, \n", "Oil and Gas / Energy Law, \n", "Family Law"],
    experience: "18 years",
    education: "University of Lagos",
    contact: "v.ogbonna@cedarnotionsassociate.co.site",
    profile: [
      `Ogbonna Vincent Ifeanyi is a distinguished legal partner with two decades of experience in litigation, taxation, and family law. 
      He possesses a deep understanding of dispute resolution, where his analytical skills and strategic thinking play a crucial role in effectively advocating for clients.`,
      `Vincent's extensive knowledge in taxation enables him to provide comprehensive tax planning and compliance strategies, helping clients navigate the complexities of tax regulations with confidence.`,
      `His expertise extends to family law, where he offers compassionate guidance in sensitive matters such as divorce, custody, and asset division, ensuring that clients receive support tailored to their unique situations.`,
      `Educated at the University of Lagos, Vincent combines his academic foundation with practical experience to deliver nuanced legal solutions. 
      His client-centered approach emphasizes understanding individual needs and crafting strategies that align with their goals. 
      This dedication to personalized service has earned him a reputation as a trusted advisor in both corporate and personal legal matters.`,
    ],
    image: Chimaroke, 
  },
];

const MeetOurAttorneys = () => {
  return (
    <Box p={5}>
      <Heading as="h2" mb={5}>
        Meet Our Attorneys
      </Heading>
      {attorneys.map((attorney, index) => (
        <Box
          key={index}
          mb={6}
          borderWidth="1px"
          borderRadius="lg"
          p={4}
          boxShadow="md"
        >
          <Flex alignItems="flex-start" display={{base: 'block', md: 'flex'}}>
            <Box flex="1" mr={5}>
              <Image
                borderRadius="10px"
                boxSize="500px"
               
                src={attorney.image}
                alt={attorney.name}
               
                mb={3} // Margin below the image
              />
             
            </Box>
            <Box flex="1">
              <Box >
                <Box my={6}>
                <Heading size="md">{attorney.name}</Heading>
              <Text>
                <strong>Position:</strong> {attorney.position}
              </Text>
              <Text>
                <strong>Expertise:</strong> {attorney.expertise}
              </Text>
              <Text>
                <strong>Experience:</strong> {attorney.experience}
              </Text>
              <Text>
                <strong>Education:</strong> {attorney.education}
              </Text>
              <Text>
                <strong>Contact:</strong>{" "}
                <a href={`mailto:${attorney.contact}`}>
                  {attorney.contact}
                </a>
              </Text>
                </Box>
                {attorney.profile.map((paragraph, idx) => (
                  <Text key={idx} mb={2}>
                    {paragraph}
                  </Text>
                ))}
              </Box>
            </Box>
          </Flex>
        </Box>
      ))}
    </Box>
  );
};

export default MeetOurAttorneys;
