// TestimonialPage.jsx
import React, { useState } from "react";
import { Box, Flex, Heading, Text, Avatar, IconButton } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import { useSwipeable } from "react-swipeable";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import HeroCustomDot from "./Customdot";

const TestimonialPage = () => {
  const [selectedSlide, setSelectedSlide] = useState(0);

  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      name: " - Michael, CEO, XYZ Ltd.",
      avatarUrl: "https://picsum.photos/151",
      text: "“Cedar Notions & Associates provided exceptional guidance during our company’s restructuring process. Their deep understanding of corporate law and strategic insights were invaluable in helping us navigate complex challenges. The team’s professionalism and commitment to our success made all the diff erence.”",
     
    },
    {
      id: 2,
      name: "- Emily, Lagos",
      avatarUrl: "https://picsum.photos/150",
      text: "“Their expertise in family law helped me navigate a diffi cult divorce with compassion and clarity. I felt supported every step of the way, and their guidance made a challenging situation much more manageable. I truly appreciate the personalized attention and care I received from the entire team.”",
     
    },
    {
      id: 3,
      name: "- David, MD, ABC Ltd.",
      avatarUrl: "https://picsum.photos/153",
      text: "“The firm’s dedication to client success is unparalleled. From start to finish, Cedar Notions & Associates demonstrated a proactive approach and unwavering commitment to achieving our goals. Their legal expertise, combined with their understanding of our  business needs, made them an invaluable partner in our journey.”-",
     
    },
  ];

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setSelectedSlide((prev) => (prev + 1) % testimonials.length),
    onSwipedRight: () =>
      setSelectedSlide(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      ),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <Box
     
      display="flex"
      alignItems="center"
      justifyContent="center"
      fontFamily="Poppins"
      padding={{ base: "2", md: "6" }}
      my={0}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <Box maxWidth="540px" width="100%" p={0} {...handlers}>
        <Box p={2} mt={10} textAlign={"center"}>
         
          <Heading fontFamily={"Signika Negative"} paddingY={2}>
          Testimonials
          </Heading>
        </Box>
        <Box position="relative" data-aos="fade-up" data-aos-duration="1000">
          <Carousel
            selectedItem={selectedSlide}
            onChange={(index) => setSelectedSlide(index)}
            showArrows={false} // Disable default arrows
            showStatus={false}
            showIndicators={false} // Disable default indicators
            infiniteLoop={true}
            autoPlay={true}
            swipeable={false} // Disable default swipe behavior
          >
            {testimonials.map((testimonial) => (
              <Box key={testimonial.id} p={4}>
                <Flex
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Avatar
                    src={testimonial.avatarUrl}
                    name={testimonial.name}
                    size="xl"
                    mb={4}
                    border={"5px"}
                    borderColor={"white"}
                  />
                  <Text textAlign="center" px={8} fontFamily={"Montserrat"}>
                    {testimonial.text}
                  </Text>
                  <Text
                    fontSize={"12px"}
                    fontWeight={"700"}
                    mt={2}
                    textAlign="center"
                    fontFamily={"Montserrat"}
                  >
                    {testimonial.name}
                  </Text>
                 
                </Flex>
              </Box>
            ))}
          </Carousel>
          <IconButton
            aria-label="Previous"
            icon={<ArrowBackIcon />}
            onClick={() =>
              setSelectedSlide(
                (selectedSlide - 1 + testimonials.length) % testimonials.length
              )
            }
            position="absolute"
            left={0}
            top="50%"
            transform="translateY(-50%)"
            borderRadius="full"
            bgColor="#737373"
            color="white"
            _hover={{ bgColor: "rgba(0, 0, 0, 0.8)" }}
            cursor={"pointer"}
          />
          <IconButton
            aria-label="Next"
            icon={<ArrowForwardIcon />}
            onClick={() =>
              setSelectedSlide((selectedSlide + 1) % testimonials.length)
            }
            position="absolute"
            right={0}
            top="50%"
            transform="translateY(-50%)"
            borderRadius="full"
            bgColor="#737373"
            color="white"
            _hover={{ bgColor: "rgba(0, 0, 0, 0.8)" }}
            cursor={"pointer"}
          />
        </Box>
        {/* Custom dot component rendered below the carousel */}
        <Flex justifyContent="center" mt={2} mb={5}>
          {testimonials.map((_, dotIndex) => (
            <HeroCustomDot
              key={dotIndex}
              onClick={() => setSelectedSlide(dotIndex)}
              isActive={selectedSlide === dotIndex}
            />
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default TestimonialPage;
