import React from 'react';
import { Box } from '@chakra-ui/react';
import HeroPage from './Hero';
import HorizontalCard from './Panel';
import Services from './Services';

const Homepage = () => {
  return (
   
      <Box>
        <HeroPage/>
        <Box bg={'gray.100'}  fontFamily="Montserrat">
        <HorizontalCard/>
        <Services/>
        </Box>
    </Box>
  );
};

export default Homepage;
