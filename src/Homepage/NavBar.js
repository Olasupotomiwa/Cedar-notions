import React from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useDisclosure,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, } from '@chakra-ui/icons';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaEnvelope, FaPhone } from 'react-icons/fa';
import Logo from '../assets/Logo.png';

export default function Navbar() {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
    onClose();
  };

  return (
    <Box
      fontFamily={'Poppins'}
      bgGradient="linear(to-b, blackAlpha.800 100%, transparent)"
      position="sticky"
      Boxshadow='md'
      top={0}
      zIndex={1000}
    >
      <Flex
        color="#000000"
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 2, md: 8 }} // Adjusting padding for mobile and desktop
        align={'center'}
        justify={{ base: 'space-between', md: 'center' }}
      >
        <Flex flex={{ base: 1, md: 'auto' }} align="center">
          <Image src={Logo} h={'65px'} onClick={handleLogoClick} cursor="pointer" />
        </Flex>
        <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
          <DesktopNav />
        </Flex>
        <Flex flex={{ base: 1, md: 'auto' }} justify="flex-end" align="center">
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} color={'white'} /> : <HamburgerIcon w={5} h={5} color={"white"} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
            display={{ base: 'flex', md: 'none' }}
          />
          <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            color={'black'}
            variant='ghost'
            _hover={{
              opacity: '0.9',
            }}
            display={{ base: 'none', md: 'inline-flex' }}
            ml={4}
            leftIcon={<FaPhone />}
            href="https://wa.me/393500460774"
            target="_blank"
          >
            Book Now
          </Button>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav onClose={onClose} />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = '#ffffff';
  const linkHoverColor = '#9b9b9a';
  const activeLinkColor = '#D6C84A';

  return (
    <Stack direction={'row'} spacing={4} justify={'center'}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <NavLink
            to={navItem.href}
            style={({ isActive }) => ({
              padding: '8px 16px',
              fontSize: '16px',
              fontWeight: isActive ? '500' : 400,
              color: isActive ? activeLinkColor : linkColor,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              transition: 'color 0.2s',
              // Hover effect inside style
              ':hover': {
                color: linkHoverColor,
              },
            })}
          >
            {/* {navItem.icon} */}
            <Box ml={2}>{navItem.label}</Box>
          </NavLink>
        </Box>
      ))}
    </Stack>
  );
};


const MobileNav = ({ onClose }) => {
  const linkColor = '#000000';
  const linkHoverColor = '#9b9b9a';
  const activeLinkColor = '#D6C84A';

  return (
    <Stack bg="white" p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} py={2} display="flex" alignItems="center" onClick={onClose}>
          <NavLink
            to={navItem.href}
            style={({ isActive }) => ({
              fontWeight: isActive ? '500' : 400,
              color: isActive ? activeLinkColor : linkColor,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              padding: '8px 16px',
              fontSize: '16px',
              transition: 'color 0.2s',
              ':hover': {
                color: linkHoverColor,
              },
            })}
          >
            {/* {navItem.icon} */}
            <Text ml={2}>{navItem.label}</Text>
          </NavLink>
        </Box>
      ))}
      <Button
        as={'a'}
        fontSize={'sm'}
        variant='ghost'
        fontWeight={500}
        color={'black'}
        _hover={{
          opacity: '0.9',
        }}
        mt={4}
        w={'full'}
        leftIcon={<FaPhone />}
        onClick={onClose}
        href="https://wa.me/393500460774"
        target="_blank"
      >
        Book Now
      </Button>
    </Stack>
  );
};


const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
    icon: <FaHome size={20}  />,
  },
  {
    label: 'About',
    href: '/about',
    icon: <FaInfoCircle size={20}/>,
  },
  {
    label: 'Services',
    href: '/services',
    icon: <FaHome size={20}  />,
  },
 
  {
    label: 'Contact',
    href: '/contact',
    icon: <FaEnvelope size={18}/>,
  },
];
