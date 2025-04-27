import React from "react";
import { Box, Text } from "@chakra-ui/react";

const LevelBox = ({ levelNumber, color }) => {
  return (
    <Box
      bg={color || "gray.200"}
      borderRadius="md"
      p={2}
      minW="50px"
      minH="50px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      boxShadow="md"
    >
      <Text fontSize="sm" fontWeight="bold" color="white">
        Level {levelNumber}
      </Text>
    </Box>
  );
};

export default LevelBox;