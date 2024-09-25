import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import NavBar from "./Homepage/NavBar";
import Homepage from "./Homepage";

import Animation from "./Animation";
import AboutPage from "./About";
import ScrollToTop from './Top';

const pageTitles = {
  "/": "Cedar Notions Associate",
  "/about": "About Us",
  "/services": "Our Services",
  "/contact": "contact",
};

const App = () => {
  const location = useLocation();

  useEffect(() => {
    const title = pageTitles[location.pathname] || "Default Title";
    document.title = title;
  }, [location]);

  return (
    <Box px={0} fontFamily={"Montserrat"}>
      <>
        {/* <ScrollToTop /> */}
        <Container maxW="1200px" px={0}>
          <ScrollToTop/>
          <NavBar />
          <Animation>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </Animation>
        </Container>
      </>
    </Box>
  );
};

export default App;
