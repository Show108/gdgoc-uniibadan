import {
  Heading,
  Flex,
  Icon,
  Box,
  Text,
  QrCode,
  Center,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaClipboard, FaQuestionCircle } from "react-icons/fa";

export default function Invite() {
  const navigate = useNavigate();

  return (
    <>
      <Flex alignItems="center" p={4}>
        <Icon
          as={FaArrowLeft}
          boxSize={5}
          aria-label="Go Back"
          onClick={() => navigate(-1)}
        />
        <Heading size="md" textAlign="center" flex="1" fontSize={20}>
          Invite
        </Heading>
        <Icon as={FaQuestionCircle} boxSize={5} aria-label="Help" />
      </Flex>
      <Box>
        <Text fontSize={25} fontWeight={"black"} pr={3} m={5}>
          Refer your friend and extra claiming days!
        </Text>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" mt={5}>
        <QrCode.Root value="https://wwww.p01project.netlify.app/" size={"md"}>
          <QrCode.Frame>
            <QrCode.Pattern />
          </QrCode.Frame>
        </QrCode.Root>
      </Box>
      <Center m={5}>
        <Text>Scan to get your referral code or</Text>
      </Center>
      <Box bg={"gray.100"} p={5} borderRadius="md" m={5}>
        <Flex>
        <Text fontWeight={"black"} fontSize={15}>https://wwww.p01project.netlify.app/</Text>
        <Icon
          as={FaClipboard}
          boxSize={5}
          aria-label="Copy Link"
          ml={10}
          onClick={() => {
            navigator.clipboard.writeText(
              "https://wwww.p01project.netlify.app/"
            );
          }}
        />
        </Flex>
        
      </Box>
      <Center m={5}>
      <Button w={"100%"} p={5}>
        <Text fontWeight={"black"}>Share</Text>
      </Button>
      </Center>
      <Text fontWeight={'black'} m={5}>Your Referrals</Text>
      
    </>
  );
}
