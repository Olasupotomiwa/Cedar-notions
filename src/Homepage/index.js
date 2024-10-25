import React from 'react';
import { Box } from '@chakra-ui/react';
import HeroPage from './Hero';
import HorizontalCard from './Panel';
import Services from './Services';
import AttorneyProfiles from './Attorney';
import Sinosure from './Sinosure'
import WhyUs from './WhyUs';
import TestimonialPage from './Testimonials';
import BookConsult from './BookConsult';
import Faqs from './Faqs';
import Footer from './Footer';

const Homepage = () => {
  // State to manage loading status
  

  return (
    <Box>
      
        <Box bg={'gray.100'} fontFamily="Montserrat">
          <HeroPage />
          <HorizontalCard />
          <Services />
          <Sinosure/>
          <AttorneyProfiles />
          <WhyUs />
          <TestimonialPage />
          <BookConsult />
          <Faqs />
          <Footer />
        </Box>
     
    </Box>
  );
};

export default Homepage;
