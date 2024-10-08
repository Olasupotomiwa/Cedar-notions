import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import Bg from '../assets/bg.png';

const header = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="250px"
      position="relative"
      overflow="hidden"
     
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bgImage={`linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Bg})`}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
      />
      <Heading as="h1" size="xl" color="white" zIndex={1} fontFamily={'Signika Negative'} textAlign={'center'} px={4}>
      Welcome to Cedar Notions & Associates
      </Heading>
    </Box>
  );
};

export default header;
