import React from "react";
import {
  Box,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const accordionData = [
  {
    title: "What areas of law does Cedar Notions & Associates specialize in?",
    content: "Cedar Notions & Associates specializes in Corporate Law, Litigation, Real Estate, Family Law, Taxation, Banking, Finance, and Energy Law. We provide expert advice in these areas and more.",
  },
  {
    title: "How can I schedule a consultation?",
    content:
      "You can schedule a consultation by visiting our contact page, sending us an email, or calling our office directly. We also offer online consultations for your convenience.",
  },
  {
    title: "What should I bring to my initial consultation?",
    content:
      "It's important to bring any relevant documents, contracts, or correspondence related to your legal matter. This will help us understand your case better and provide accurate advice.",
  },
  {
    title: "How are your legal fees structured?",
    content:
      "Our legal fees vary depending on the complexity of the case. We offer both hourly rates and flat fees for certain services. During your consultation, we will provide a detailed fee structure.",
  },
  {
    title: "How long will it take to resolve my legal issue?",
    content:
      "The duration of your case depends on the nature and complexity of the legal issue. While we aim to resolve matters efficiently, some cases may take longer depending on court schedules and other factors.",
  },
  {
    title: "Do you handle international cases?",
    content:
      "Yes, we have experience handling cases with international elements, particularly in areas like corporate law, tax law, and energy law. Our team is well-equipped to provide legal guidance on cross-border matters.",
  }
  // Add more sections as needed
];

const AccordionComponent = () => {
  return (
    <Box
      w={{ base: "100%", md: "75%", lg: "70%" }}
      m="auto"
      p={{ base: "3", md: "8" }}
      fontFamily="Montserrat"
      data-aos="fade-up"
      my={8}
    >
      <Heading
        textAlign="center"
        fontWeight="500"
        p={15}
        fontSize="24px"
        color="black"
        fontFamily="Montserrat"
      >
        Frequently Asked Questions
      </Heading>
      <Accordion allowMultiple borderColor='#808080'>
        {accordionData.map((item, index) => (
          <AccordionItem key={index}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    {isExpanded ? (
                      <MinusIcon fontSize="16px" color="#9b9b9a" />
                    ) : (
                      <AddIcon fontSize="16px" color="#9b9b9a" />
                    )}
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      ml={5}
                      color="black"
                      py={3}
                    >
                      {item.title}
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel py={4} color="black" >
                  {item.content}
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

export default AccordionComponent;
