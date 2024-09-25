import React from 'react';
import { Box } from '@chakra-ui/react';

import Footer from '../Homepage/Footer';
import History from './History';
import Header from "./hero"

const AboutPage = () => {
  return (
   
      <Box>
        <Header/>
        <Box bg={'gray.100'}  fontFamily="Montserrat">
       <History/>
        <Footer/>
        </Box>
      
    </Box>
  );
};

export default AboutPage;
