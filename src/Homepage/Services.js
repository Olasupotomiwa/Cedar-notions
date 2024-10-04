import React from "react";
import {
  Box,
  Text,
  Flex,
  Center,
  Heading,
  Button,
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
  FaPhoneAlt,
  FaUniversity,
  FaMoneyBillAlt,
  FaShip,
} from "react-icons/fa";

const Card = ({ header, content, text, icon }) => {
  const getRandomThree = (array) => {
    return array
      .sort(() => 0.5 - Math.random()) // Shuffle the array
      .slice(0, 3); // Select the first 3 items
  };
  return (
    <Box
      px={{ base: "2", md: "10" }}
      borderRadius="md"
      width={{ base: "100%", md: "300px" }}
      mb={4}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <Flex direction="column" align="center">
        {" "}
        {/* Make Flex column and center items */}
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
              textAlign={"left"}
            >
              {text}
            </Text>
            <Box
              fontSize="16px"
              color="#000000"
              fontFamily="Montserrat"
              textAlign={"left"}
            >
              <ul style={{ paddingLeft: "1.5em", listStyleType: "disc" }}>
                {getRandomThree(content).map((item, index) => (
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
        "Corporate governance (board advisory, shareholder agreements)",
        "Commercial agreements (contracts, MOUs, NDAs)",
        "Business restructuring and insolvency",
        "Corporate finance and securities law",
      ],
      icon: <FaBalanceScale style={{ color: "#000000", width: "20px" }} />, // React Icon
    },
    {
      header: "Litigation",
      text: "Strategic representation and dispute resolution in:",
      content: [
        "Civil and commercial litigation (contract disputes, debt recovery)",
        "Arbitration and mediation (alternative dispute resolution)",
        "Intellectual property disputes (patent, trademark, copyright infringement)",
        "Employment and labor disputes (wrongful termination, workplace harassment)",
        "Alternative dispute resolution (ADR) methods",
        "Appellate litigation and judicial review",
      ],
      icon: <FaGavel style={{ color: "#000000", width: "20px" }} />, // React Icon
    },
    {
      header: "Real Estate & Construction",
      text: "Expert guidance for:",
      content: [
        "Complex transactions and negotiations (acquisitions, disposals)",
        "Property development and infrastructure projects (urban planning, zoning)",
        "Land acquisition and zoning (permits, regulatory approvals)",
        "Construction law and contracts (EPC, FIDIC)",
        "Real estate finance and investment (mortgages, leasing)",
        "Project management and dispute resolution",
        "Environmental and regulatory compliance",
      ],
      icon: <FaBuilding style={{ color: "#000000", width: "20px" }} />, // React Icon
    },
    {
      header: "Matrimonial Causes/Family Law",
      text: "Compassionate and effective advocacy for:",
      content: [
        "Divorce and separation (contested, uncontested)",
        "Child custody and support (access, maintenance)",
        "Spousal maintenance and alimony",
        "Pre-nuptial and post-nuptial agreements",
        "Family dispute resolution (mediation, arbitration)",
        "Child adoption and surrogacy",
        "Domestic violence and protection orders",
      ],
      icon: <FaShieldAlt style={{ color: "#000000", width: "20px" }} />, // React Icon
    },
    {
      header: "Taxation",
      text: "Optimized strategies for:",
      content: [
        "Minimized tax liability (tax planning, optimization)",
        "Tax planning and compliance (filing, reporting)",
        "International tax planning (transfer pricing, tax treaties)",
        "Transfer pricing and tax disputes (audits, appeals)",
        "Tax advisory services (consulting, training)",
        "Value-added tax (VAT) and goods and services tax (GST)",
        "Tax implications of mergers and acquisitions",
      ],
      icon: <FaMoneyBillAlt style={{ color: "#000000", width: "20px" }} />, // React Icon
    },
    {
      header: "Banking and Finance",
      text: "Expert navigation of:",
      content: [
        "Complex regulatory frameworks (CBN, SEC guidelines)",
        "Financial transactions and instruments (loans, derivatives)",
        "Investment and securities law (equity, debt capital markets)",
        "Project finance and infrastructure development",
        "Banking and financial institutions law (lending, deposit-taking)",
        "Financial technology (fintech) and digital payments",
        "Asset management and wealth preservation",
      ],
      icon: <FaUniversity style={{ color: "#000000", width: "20px" }} />, // React Icon
    },
    {
      header: "Telecommunications Law",
      text: "Comprehensive expertise in:",
      content: [
        "Regulatory compliance with Nigerian Communications Commission (NCC) and other regulatory bodies",
        "Telecommunications licensing and permits",
        "Network infrastructure development and sharing agreements",
        "Telecommunications contracts and agreements (e.g., service level agreements, interconnection agreements)",
        "Dispute resolution in telecommunications (e.g., mediation, arbitration, litigation)",
        "Spectrum management and allocation",
        "Cybersecurity and data protection in telecommunications",
        "Telecommunications policy and advisory services",
        "Mergers and acquisitions in the telecommunications sector",
      ],
      icon: <FaPhoneAlt style={{ color: "#000000", width: "20px" }} />, // React Icon
    },
    {
      header: "Oil & Gas Law/Energy Law",
      text: "Comprehensive expertise in:",
      content: [
        "Upstream and downstream oil and gas operations",
        "Exploration and production contracts (JOAs, PSAs)",
        "Petroleum regulations and licensing",
        "Energy policy and advisory services",
        "Renewable energy (solar, wind, hydro) development",
        "Environmental and social impact assessments",
        "Oil and gas disputes (arbitration, litigation)",
        "Mergers and acquisitions in the oil and gas sector",
      ],
      icon: <FaOilCan style={{ color: "#000000", width: "20px" }} />, // React Icon
    },
    {
      header: "Maritime Law",
      text: "Expert guidance on:",
      content: [
        "Shipping and navigation regulations",
        "Maritime contracts (charter parties, bills of lading)",
        "Admiralty law and jurisdiction",
        "Shipbuilding and ship repair contracts",
        "Maritime disputes (arbitration, litigation)",
        "Cargo claims and insurance disputes",
        "Maritime safety and security regulations",
        "Port development and operations",
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
      <Box>
      <Center>
        <Box py={4} style={carouselContainerStyle} px={0} width={"90%"} pb={10}>
          <Box
            textAlign={"center"}
            p={0}
            mt={8}
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <Heading
              fontFamily="Signika Negative"
              fontSize={{ base: "32px", md: "40px" }}
            >
              Our Expertise/ Practice Area Overviews
            </Heading>

            <Text
              fontSize="16px"
              color="#000000"
              fontFamily="Montserrat"
              my={2}
              mx={"auto"}
              w={{ base: "100%", md: "60%" }}
              textAlign={"justify"}
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
       <Box pb={10} textAlign={"right"} px={10} data-aos="fade-up"
       data-aos-duration="500">
             <Button
               colorScheme="teal"
               variant="solid"
               size="lg"
               as="a"
               href="/details"
             >
               See more
             </Button>
           </Box>
          </Box>
    );
  } else {
    return (
      <Box>
      <Flex
        direction={{ base: "column", md: "row" }}
        align={{ base: "center", md: "flex-start" }}
        justify="center"
        wrap="wrap"
        fontFamily="Montserrat"
        pb={10}
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <Box textAlign={"center"} p={0} mt={10}>
          <Heading
            fontSize={{ base: "32px", md: "40px" }}
            fontFamily="Signika Negative"
          >
            Our Expertise/ Practice Area Overviews
          </Heading>

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

      <Box pb={10} textAlign={"right"} px={10} data-aos="fade-up"
      data-aos-duration="500">
            <Button
              colorScheme="teal"
              variant="solid"
              size="lg"
              as="a"
              href="/services"
            >
              See more
            </Button>
          </Box>
      </Box>
    );
  }
};

export default Services;
