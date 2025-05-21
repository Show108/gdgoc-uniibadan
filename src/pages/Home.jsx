import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Icon,
  Text,
  Spacer,
  Button,
} from "@chakra-ui/react";
import { FaBell, FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useSession from "../context/useSession";
import logo from "../assets/logo.png";
import Loader from "../components/Loader";
import { supabase } from "../supabaseClient";
import { LuCheck, LuPlus } from "react-icons/lu";

export const Home = () => {
  const { user, loading, setUser } = useSession();
  const navigate = useNavigate();
  const username = user?.email.split("@")[0] || "Guest";
  const todayDate = new Date();
  const todayDateStr = todayDate.toISOString().slice(0, 10);
  const daysInMonth = Array.from({ length: 30 }, (_, i) => {
    const d = new Date();
    d.setDate(todayDate.getDate() - (29 - i));
    return d.toISOString().slice(0, 10);
  });

  const [claimedDays, setClaimedDays] = useState([]);
  const [claimDisabled, setClaimDisabled] = useState(false);

  // Real-time countdown to midnight
  const getTimeLeftToMidnight = () => {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    const diff = midnight - now;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { hours, minutes, seconds };
  };
  const [timeLeft, setTimeLeft] = useState(getTimeLeftToMidnight());

  useEffect(() => {
    const stored = localStorage.getItem("claimedDays");
    if (stored) setClaimedDays(JSON.parse(stored));
    const lastClaim = localStorage.getItem("lastClaim");
    if (lastClaim) {
      const last = new Date(lastClaim);
      const now = new Date();
      if (
        last.getDate() === now.getDate() &&
        last.getMonth() === now.getMonth() &&
        last.getFullYear() === now.getFullYear()
      ) {
        setClaimDisabled(true);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("claimedDays", JSON.stringify(claimedDays));
  }, [claimedDays]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeftToMidnight())
      if (
        timeLeft.hours === 0 &&
        timeLeft.minutes === 0 &&
        timeLeft.seconds === 0
      ) {
        setClaimDisabled(false);
      }
    }, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [timeLeft]);

  useEffect(() => {
    const handleBackButton = () => {
      const confirmLogout = window.confirm('Do you want to log out?');
      if (confirmLogout) {
        supabase.auth.signOut();
        setUser(null);
        navigate('/login');
      } else {
        window.history.pushState(null, '', window.location.href);
      }
    };

    window.history.pushState(null, '', window.location.href);

    window.addEventListener('popstate', handleBackButton);

    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, [navigate, setUser]);

  const handleClaim = () => {
    if (
      claimedDays.length < 30 &&
      !claimedDays.includes(todayDateStr) &&
      !claimDisabled
    ) {
      setClaimedDays([...claimedDays, todayDateStr]);
      setClaimDisabled(true);
      localStorage.setItem("lastClaim", new Date().toISOString());
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Box p={4}>
      <Box mb={5}>
        <img src={logo} alt="Logo" width="50px" height="50px" />
      </Box>
      <Flex alignItems="center" mb={4}>
        <Heading size="md" textAlign="center">
          Welcome, {username}!
        </Heading>
        <Spacer />
        <Icon as={FaBell} boxSize={6} cursor="pointer" />
      </Flex>

      <Box p={5} mb={4} overflowX="auto">
        <Flex minW="600px" gap={2} ml={-4}>
          {daysInMonth.map((dateStr, idx) => {
            const dayNum = new Date(dateStr).getDate();
            const isClaimed = claimedDays.includes(dateStr);
            return (
              <Box
                key={dateStr}
                w="70px"
                h="70px"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                borderRadius="md"
                fontWeight="bold"
                bg={isClaimed ? "blue.500" : "white"}
                color={isClaimed ? "white" : "black"}
                border={
                  isClaimed
                    ? "2px solid #3182ce"
                    : "1px solid #e2e8f0"
                }
                boxShadow={isClaimed ? "md" : "sm"}
                flexShrink={0}
                mr={idx === daysInMonth.length - 1 ? 2 : 0}
              >
                <Box
                  borderRadius="full"
                  bg={isClaimed ? "white" : "gray.200"}
                  color={isClaimed ? "#3182ce" : "white"}
                  padding={2}
                  w={"30px"}
                >
                  {isClaimed ? <LuCheck /> : <LuPlus />}
                </Box>
                <Text>Day {dayNum}</Text>
              </Box>
            );
          })}
        </Flex>
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
            {claimedDays.length} Day Check-in
          </Text>
          <Text fontSize="sm" color="gray.500" mb={2}>
            Next check-in: {timeLeft.hours} hr {timeLeft.minutes} min
          </Text>
        </Box>
        <Button
          bg="orange"
          width="20%"
          borderRadius={"2xl"}
          onClick={handleClaim}
          disabled={claimDisabled || claimedDays.length >= 30 || claimedDays.includes(todayDateStr)}
          _disabled={{ opacity: 0.6, cursor: "not-allowed" }}
        >
          Claim
        </Button>
      </Flex>
    </Box>
  );
};