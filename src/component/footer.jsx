import { Box, Flex, Heading, Text, List, Input, Button, Separator } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import logo from "../assets/image 4.png";
const Footer = () => {
  return (
    <Box bg="#333333" color="white" pt={10} px={6} mb={-20}>
      <Flex justifyContent="space-between" flexWrap="wrap" gap={8}>
        {/* Logo and Text */}
        <Box flex="1" minW="250px">
          <img src={logo} alt="Logo" style={{ width: "150px", marginBottom: "16px" }} />
          <Text>
           A one-day tech event open to everyone in and out of tech, you name it and you have a seat.
          </Text>
        </Box>

        <Box flex="1" minW="250px">
          <Heading as="h4" size="md" mb={4}>
            Quick Links
          </Heading>
          <List.Root spacing={2} listStyle={'none'}>
            <List.Item>About Us</List.Item>
            <List.Item>Organisers</List.Item>
            <List.Item>Speakers</List.Item>
            <List.Item>Register</List.Item>
          </List.Root>
        </Box>

        <Box flex="1" minW="250px">
          <Heading as="h4" size="md" mb={4}>
            Contact
          </Heading>
          <List.Root spacing={2} listStyle={'none'}>
            <List.Item>
              <List.Indicator asChild color="white">
                <FaPhone />
                </List.Indicator>
              
              +234 819 123 4567
            </List.Item>
            <List.Item>
              <List.Indicator asChild color="white">
                <FaEnvelope />
                </List.Indicator>
              info@techquest2023.com
            </List.Item>
            <List.Item>
              <List.Indicator asChild color="white">
                <FaMapMarkerAlt />
                </List.Indicator>
              KAAF auditorium, Department of Human Nutrition, University of Ibadan123 Tech Street, City, Country
            </List.Item>
          </List.Root>
        </Box>

        <Box flex="1" minW="250px">
          <Heading as="h4" size="md" mb={4}>
            Stay in Touch
          </Heading>
          <Text mb={4}>
           Subscribe to receive updates, access to exclusive details and more
          </Text>
          <Flex>
            <Input placeholder="Enter your email" bg="white" color="black" mr={2} />
            <Button bg={'#34A853'}>Subscribe</Button>
          </Flex>
        </Box>
      </Flex>
      <Separator my={6} />
      <Text textAlign="center" fontSize="sm">
        © 2025 TechQuest. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;