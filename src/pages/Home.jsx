import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Icon,
  Text,
  Spacer,
  HStack,
  VStack,
  Button,
} from "@chakra-ui/react";
import { FaBell, FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useSession from "../context/useSession";
import logo from "../assets/check-logo.png";

export const Home = () => {
  const { user, loading } = useSession();
  const navigate = useNavigate();

  if (loading) {
    return <Text>Loading...</Text>;
  }

  const username = user?.email.split("@")[0] || "Guest";

  const currentDate = new Date();
  const currentDay = currentDate.toLocaleDateString("en-US", {
    weekday: "short",
  });
  const daysOfWeek = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(currentDate);
    date.setDate(currentDate.getDate() - currentDate.getDay() + i);
    return {
      day: date.toLocaleDateString("en-US", { weekday: "short" }),
      date: date.toLocaleDateString("en-US", { day: "numeric" }),
    };
  });

  const [timeLeft, setTimeLeft] = useState({
    hours: 11,
    minutes: 29,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        const totalSeconds =
          prev.hours * 3600 + prev.minutes * 60 + prev.seconds - 1;

        if (totalSeconds <= 0) {
          clearInterval(interval);
          return { hours: 0, minutes: 0, seconds: 0 };
        }

        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box p={4}>
      <Flex alignItems="center" mb={4}>
        <img src={logo} alt="Logo" width="50px" height="50px" />
        <Spacer />
        <Heading size="md" textAlign="center">
          Welcome, {username}!
        </Heading>
        <Spacer />
        <Icon as={FaBell} boxSize={6} cursor="pointer" />
      </Flex>

      <Box bg="gray.100" p={4} borderRadius="md" boxShadow="md" mb={4}>
        <HStack spacing={4} justifyContent="space-between" mb={4}>
          {daysOfWeek.map((day, index) => (
            <VStack
              key={index}
              bg={day.day === currentDay ? "blue.500" : "transparent"}
              color={day.day === currentDay ? "white" : "black"}
              p={2}
              borderRadius="md"
            >
              <Text fontWeight="bold">{day.day}</Text>
              <Text>{day.date}</Text>
            </VStack>
          ))}
        </HStack>
      </Box>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        mb={4}
        bg={"gray.100"}
        p={3}
        borderRadius="xl"
      >
        <Icon as={FaCalendarAlt} boxSize={6} />
        <Box textAlign="center" mt={4}>
          <Text fontSize="lg" fontWeight="bold">
            0 Day Check-in
          </Text>
          <Text fontSize="sm" color="gray.500" mb={2}>
            Next check-in: {timeLeft.hours} hr {timeLeft.minutes} min
          </Text>
        </Box>
        <Button bg="orange" width="20%" borderRadius={"2xl"}>
          Claim
        </Button>
      </Flex>
    </Box>
  );
};
