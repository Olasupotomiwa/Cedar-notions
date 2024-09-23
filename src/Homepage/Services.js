import React from "react";
import {
  Box,
  Text,
  Flex,
  Center,
  Heading,
  useMediaQuery,
} from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  FaBalanceScale,
  FaGavel,
  FaBuilding,
  FaShieldAlt,
  FaOilCan,
  FaShip,
} from "react-icons/fa";

const Card = ({ header, content, text, icon }) => {
    return (
      <Box
        px={{ base: "2", md: "10" }}
        borderRadius="md"
        width={{ base: "100%", md: "300px" }}
        mb={4}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <Flex direction="column" align="center"> {/* Make Flex column and center items */}
          <Box mt={2} width="100%" textAlign="center">
            <Box
              w={12}
              h={12}
              borderRadius="md"
              display="flex"
              justifyContent="center"
              alignItems="center"
              bg="gray.200" // Optional: add a background color for better visibility
              mb={4} // Add some space below the icon
              mx="auto" // Center the icon horizontally
            >
              {icon}
            </Box>
  
            <Box>
              <Heading
                as="h2"
                size="md"
                mb={4}
                color="black"
                fontWeight="500"
                fontFamily="Montserrat"
              >
                {header}
              </Heading>
              <Text
                fontSize="16px"
                color="#000000"
                fontFamily="Montserrat"
                my={2}
                textAlign={'left'}
              >
                {text}
              </Text>
              <Box fontSize="16px" color="#000000" fontFamily="Montserrat" textAlign={'left'}>
                <ul style={{ paddingLeft: "1.5em", listStyleType: "disc" }}>
                  {content.map((item, index) => (
                    <li key={index} style={{ marginBottom: "0.5em" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    );
  };
  
const Services = () => {
  const data = [
    {
      header: "Corporate Law & Practices",
      text: "Innovative solutions and comprehensive guidance on:",
      content: [
        "Entity formation (incorporation, partnerships, joint ventures)",
        "Regulatory compliance (company secretarial services, filings)",
        "Mergers and acquisitions (due diligence, negotiations)",
      ],
      icon: <FaBalanceScale style={{ color: "#000000", width: "20px" }} />, // React Icon
    },
    {
      header: "Litigation",
      text: "Strategic representation and dispute resolution in:",
      content: [
        "Civil and commercial litigation (contract disputes, debt recovery)",
        "Arbitration and mediation (ADR)",
        "Intellectual property disputes (patent, trademark, copyright infringement).",
      ],
      icon: <FaGavel style={{ color: "#000000", width: "20px" }} />, // React Icon
    },
    {
      header: "Real Estate & Construction",
      text: "Expert guidance for:",
      content: [
        "Complex transactions and negotiations (acquisitions, disposals)",
        "Property development and infrastructure projects",
        "Construction law and contracts (EPC, FIDIC).",
      ],
      icon: <FaBuilding style={{ color: "#000000", width: "20px" }} />, // React Icon
    },
    {
      header: "Family Law",
      text: "Compassionate and effective advocacy for:",
      content: [
        "Divorce and separation",
        "Child custody and support",
        "Pre-nuptial and post-nuptial agreements.",
      ],
      icon: <FaShieldAlt style={{ color: "#000000", width: "20px" }} />, // React Icon
    },
    {
      header: "Oil & Gas Law",
      text: "Comprehensive expertise in:",
      content: [
        "Upstream and downstream oil and gas operations",
        "Exploration and production contracts",
        "Oil and gas disputes (arbitration, litigation).",
      ],
      icon: <FaOilCan style={{ color: "#000000", width: "20px" }} />, // React Icon
    },
    {
      header: "Maritime Law",
      text: "Expert guidance on:",
      content: [
        "Shipping and navigation regulations",
        "Maritime contracts (charter parties, bills of lading)",
        "Maritime disputes (arbitration, litigation).",
      ],
      icon: <FaShip style={{ color: "#000000", width: "20px" }} />, // React Icon
    },
  ];

  const [isMobile] = useMediaQuery("(max-width: 767px)");

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const carouselContainerStyle = {
    maxWidth: "100%",
  };

  if (isMobile) {
    return (
      <Center>
        <Box py={4} style={carouselContainerStyle} px={0} width={"90%"} pb={10}>
          <Box textAlign={"center"} p={0} mt={8}data-aos="fade-up"
      data-aos-duration="500">
            <Heading  fontFamily="Montserrat" fontSize={{ base: "20px", md: "32px" }}>Our Expertise/ Practice Area Overviews</Heading>

            <Text
              fontSize="16px"
              color="#000000"
              fontFamily="Montserrat"
              my={2}
              mx={"auto"}
              w={{ base: "100%", md: "60%" }}
            >
              Our team of seasoned legal professionals boasts extensive
              experience, in-depth knowledge, and a passion for delivering
              precision-crafted solutions in:
            </Text>
          </Box>
          <Carousel
            responsive={responsive}
            swipeable
            draggable
            showDots
            infinite
            autoPlay
            autoPlaySpeed={3000}
            customTransition="transform 300ms ease-in-out"
            transitionDuration={300}
            containerClass="carousel-container"
            dotListClass="custom-dot-list"
            arrows={false} // Remove the next and previous arrows
          >
            {data.map((card, index) => (
              <Card
                key={index}
                text={card.text}
                header={card.header}
                content={card.content}
                icon={card.icon}
              />
            ))}
          </Carousel>
        </Box>
      </Center>
    );
  } else {
    return (
      <Flex
        direction={{ base: "column", md: "row" }}
        align={{ base: "center", md: "flex-start" }}
        justify='center'
        wrap="wrap"
        fontFamily="Montserrat"
        pb={10}
        data-aos="fade-up"
      data-aos-duration="500"
      >
        <Box textAlign={"center"} p={0} mt={8}>
          <Heading fontSize={{ base: "20px", md: "32px" }} fontFamily="Montserrat">Our Expertise/ Practice Area Overviews</Heading>

          <Text
            fontSize="16px"
            color="#000000"
            fontFamily="Montserrat"
            my={2}
            mx={"auto"}
            w={"60%"}
          >
            Our team of seasoned legal professionals boasts extensive
            experience, in-depth knowledge, and a passion for delivering
            precision-crafted solutions in:
          </Text>
        </Box>

        {data.map((card, index) => (
          <Card
            key={index}
            header={card.header}
            content={card.content}
            icon={card.icon}
            text={card.text}
          />
        ))}
      </Flex>
    );
  }
};

export default Services;
