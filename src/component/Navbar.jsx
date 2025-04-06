import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FaHome, FaTasks, FaEnvelope, FaUser } from "react-icons/fa";

export default function Navbar() {
  return (
    <Box
      position="fixed"
      bottom={0}
      width="100%"
      bg="white"
      boxShadow="0 -2px 5px rgba(0, 0, 0, 0.1)"
      zIndex={1000}
    >
      <Flex justifyContent="space-around" alignItems="center" py={2}>
        <NavLink
          to="/main"
          style={({ isActive }) => ({
            color: isActive ? "#3182CE" : "inherit", // Remove color when not active
            textDecoration: "none",
          })}
        >
          <Flex direction="column" align="center">
            <Icon as={FaHome} boxSize={5} />
            <Text fontSize="sm">Home</Text>
          </Flex>
        </NavLink>
        <NavLink
          to="/main/contact"
          style={({ isActive }) => ({
            color: isActive ? "#3182CE" : "black", // Change color when active
            textDecoration: "none",
          })}
        >
          <Flex direction="column" align="center">
            <Icon as={FaTasks} boxSize={5} />
            <Text fontSize="sm">Task</Text>
          </Flex>
        </NavLink>
        <NavLink
          to="/main/about"
          style={({ isActive }) => ({
            color: isActive ? "#3182CE" : "black", // Change color when active
            textDecoration: "none",
          })}
        >
          <Flex direction="column" align="center">
            <Icon as={FaEnvelope} boxSize={5} />
            <Text fontSize="sm">Message</Text>
          </Flex>
        </NavLink>
        <NavLink
          to="/main/account"
          style={({ isActive }) => ({
            color: isActive ? "#3182CE" : "black", // Change color when active
            textDecoration: "none",
          })}
        >
          <Flex direction="column" align="center">
            <Icon as={FaUser} boxSize={5} />
            <Text fontSize="sm">Account</Text>
          </Flex>
        </NavLink>
      </Flex>
    </Box>
  );
}