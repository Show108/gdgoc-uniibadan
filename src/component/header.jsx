import {
  Box,
  Flex,
  Text,
  Button,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import logo from "../assets/image 4.png";
import arrow from "../assets/solar_arrow-up-linear.png";
import menu from "../assets/Vector (2).png";
import { LuX } from "react-icons/lu";

const navLinks = [
  { label: "About", href: "#about" },
  {
    label: "Become a Volunteer",
    href: "https://forms.gle/EceoqWuBPjtT3CKn6",
    external: true,
  },
  { label: "Organisers", href: "#organisers" },
  { label: "Speakers", href: "#speakers" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (href, external) => {
    setMenuOpen(false);
    if (href) {
      if (external) {
        window.open(href, "_blank", "noopener,noreferrer");
      } else {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <Box px={{ base: 4, md: 20 }} mt={{ base: 4, lg: 10 }} position="relative">
      <Box alignItems="center" justifyContent="space-between">
        <img
          src={logo}
          alt="Logo"
          style={{ width: "100px", maxWidth: "15vw" }}
        />

        {/* Desktop Nav */}
        <Flex as="nav" display={{ base: "none", lg: "flex" }} ml={20} mt={-5} justifyContent={'flex-end'}>
          {navLinks.map((link) => (
            <Text
              key={link.label}
              color="#878787"
              fontWeight="medium"
              _hover={{ textDecoration: "none", color: "teal.500" }}
              pr={10}
              cursor="pointer"
              onClick={() => handleNavClick(link.href, link.external)}
            >
              {link.label}
            </Text>
          ))}

          <Box display={{ base: "none", lg: "flex" }} mt={-3}>
          <Button
            as="a"
            href="https://gdg.community.dev/e/mmkbt8"
            target="_blank"
            rel="noopener noreferrer"
            // display={{ base: "none", lg: "flex" }}
            size="md"
            borderRadius="full"
            boxShadow="md"
            p={6}
          >
            <Text>Register Now</Text>
          </Button>
        </Box>
        </Flex>

        {/* Desktop Button */}
        

        <Flex
          display={{ base: "flex", lg: "none" }}
          justifyContent={"flex-end"}
          mt={-3}
        >
          <img
            src={menu}
            alt="menu"
            onClick={() => setMenuOpen((open) => !open)}
            width={"20px"}
          />
        </Flex>
      </Box>

      {/* Mobile Nav Box */}
      {menuOpen && (
        <Box
          position="absolute"
          top="-4"
          right="0"
          bg="#34A853"
          w="70vw"
          height={"50vh"}
          boxShadow="lg"
          zIndex={100}
          p={6}
          display={{ base: "block", md: "none" }}
        >
          <Flex
            color={"white"}
            justifyContent={"flex-end"}
            onClick={() => setMenuOpen(false)}
          >
            <LuX />
          </Flex>
          <VStack align="stretch" spacing={6} mt={20}>
            {navLinks.map((link) => (
              <Text
                key={link.label}
                fontWeight="medium"
                fontSize="lg"
                color="white"
                _hover={{ color: "teal.500" }}
                onClick={() => handleNavClick(link.href, link.external)}
                textAlign={"center"}
                cursor="pointer"
              >
                {link.label}
              </Text>
            ))}
            <Button
              as="a"
              href="https://gdg.community.dev/e/mmkbt8"
              target="_blank"
              rel="noopener noreferrer"
              colorScheme="teal"
              borderRadius="full"
              boxShadow="md"
              width="100%"
              leftIcon={<img src={arrow} alt="arrow" style={{ width: 18 }} />}
              onClick={() => setMenuOpen(false)}
              mt={10}
            >
              Register Now
            </Button>
          </VStack>
        </Box>
      )}
    </Box>
  );
};

export default Header;
