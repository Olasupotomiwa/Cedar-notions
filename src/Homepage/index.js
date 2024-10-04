import React, { useEffect, useState } from 'react';
import { Box, Spinner, Flex } from '@chakra-ui/react';
import HeroPage from './Hero';
import HorizontalCard from './Panel';
import Services from './Services';
import AttorneyProfiles from './Attorney';
import WhyUs from './WhyUs';
import TestimonialPage from './Testimonials';
import BookConsult from './BookConsult';
import Faqs from './Faqs';
import Footer from './Footer';

const Homepage = () => {
  // State to manage loading status
  const [loading, setLoading] = useState(true);

  // Simulate loading data (replace this with your actual data fetching logic)
  useEffect(() => {
    const loadData = async () => {
      // Simulating a delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoading(false);
    };
    loadData();
  }, []);

  return (
    <Box>
      {loading ? (
        // Loader while data is loading
        <Flex align="center" justify="center" height="100vh">
          <Spinner size="xl" />
        </Flex>
      ) : (
        // Render the content once loading is complete
        <Box bg={'gray.100'} fontFamily="Montserrat">
          <HeroPage />
          <HorizontalCard />
          <Services />
          <AttorneyProfiles />
          <WhyUs />
          <TestimonialPage />
          <BookConsult />
          <Faqs />
          <Footer />
        </Box>
      )}
    </Box>
  );
};

export default Homepage;
