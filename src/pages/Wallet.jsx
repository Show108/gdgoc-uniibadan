import {
  Flex,
  Icon,
  Heading,
  Box,
  Text,
  Button,
  Card,
  Switch,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft,FaBars, FaWallet, FaPaperPlane } from "react-icons/fa";

export default function Wallet() {
  const navigate = useNavigate();
  const [showAmount, setShowAmount] = useState(true); 

  return (
    <Box p={4}>
      <Flex alignItems="center" mb={10}>
        <Icon
          as={FaChevronLeft}
          boxSize={5}
          aria-label="Go Back"
          onClick={() => navigate(-1)}
          cursor="pointer"
        />
        <Heading size="md" textAlign="center" flex="1" fontSize={20}>
          Wallet
        </Heading>
        <Icon
          as={FaBars}
          boxSize={5}
          aria-label="Setting"
          cursor="pointer"
        />

      </Flex>
      <Card.Root bg="lightblue" boxShadow="md" borderRadius="md" mb={4}>
        <Card.Body>
          <Flex justifyContent="space-between" alignItems="center">
            <Text fontSize="lg" fontWeight="bold">
              Wallet Balance
            </Text>

            <Switch.Root
              isChecked={showAmount}
              onChange={() => setShowAmount(!showAmount)}
              colorPalette={'blue'}
              size="sm"
            >
              <Switch.HiddenInput />
              <Switch.Control />
              <Switch.Label>{showAmount ? "Hide" : "Show"}</Switch.Label>
            </Switch.Root>
          </Flex>
          <Text fontSize="2xl" fontWeight="bold" mt={2}>
            {showAmount ? "$0.00" : "****"}
          </Text>
        </Card.Body>

      </Card.Root>
      <Flex justifyContent="space-between" width="100%" mb={10} >
            <Button  flex="1" mr={2} borderRadius={'md'} bg={'darkblue'}>
              <Text fontSize="sm" fontWeight={'bold'}>Fund</Text> 
              <Icon as={FaWallet} boxSize={4} ml={1} />
            </Button>
            <Button flex="1" ml={2} borderRadius={'md'} bg={'darkgreen'}>
            <Text fontSize="sm" fontWeight={'bold'}>Withdraw</Text> 
            <Icon as={FaPaperPlane} boxSize={4} ml={1} />
            </Button>
          </Flex>
      <Box bg="white" boxShadow="md" borderRadius="md" p={4}>
        <Heading size="sm" mb={4}>
          Transactions
        </Heading>
        <VStack spacing={4}>
          <Text color="gray.500">No transactions yet.</Text>
        </VStack>
      </Box>
    </Box>
  );
}
