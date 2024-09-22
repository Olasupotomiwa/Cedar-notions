import React from 'react';
import { Box } from '@chakra-ui/react';
import HeroPage from './Hero';
import HorizontalCard from './Panel';
import Services from './Services';
import AttorneyProfiles from './Attorney';
import WhyUs from './WhyUs'
import TestimonialPage from './Testimonials';
import BookConsult from './BookConsult'

const Homepage = () => {
  return (
   
      <Box>
        <HeroPage/>
        <Box bg={'gray.100'}  fontFamily="Montserrat">
        <HorizontalCard/>
        
        <Services/>
        <AttorneyProfiles/>
        < WhyUs/>
        <TestimonialPage/>
        <BookConsult/>
        </Box>
      
    </Box>
  );
};

export default Homepage;
