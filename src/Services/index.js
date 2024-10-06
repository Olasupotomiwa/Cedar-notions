import React from 'react';
import { Box } from '@chakra-ui/react';

import Footer from '../Homepage/Footer';
import Practice from './practice';
import Virtual from './Virtual'
import ChooseUs from './ChooseUs';

const AboutPage = () => {
  return (
   
      <Box>
       
        <Box bg={'gray.200'}  fontFamily="Montserrat">
       <Practice/>
       <Virtual/>
       <ChooseUs/>
        <Footer/>
        </Box>
      
    </Box>
  );
};

export default AboutPage;
