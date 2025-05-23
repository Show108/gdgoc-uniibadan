import {
  Box,
  Container,
  Flex,
  Text,
  Button,
  Heading,
  HStack,
} from "@chakra-ui/react";
import logo from "../assets/image 5.png";
import image1 from "../assets/Group 9.png";
import image3 from "../assets/Group 76 (1).png";
import image2 from "../assets/Frame 323.png";
import image4 from "../assets/Frame.png";
import image5 from "../assets/Pin_alt.png";
import arrow from "../assets/solar_arrow-up-linear.png";

const SectionOne = () => {
  return (
    <>
      <Flex alignItems="center" mx={{ base: 10, lg: 20 }}>
        
        <Box flex={1} mt={10} ml={8}>
           <Flex justifyContent={{ base: "center", lg: "flex-start" }} mt={6} ml={{base:-10,lg:0}}>
          <HStack ml={{ base: 10, lg: 0 }}>
            <Box w={20}>
              <img src={logo} alt="Logo" />
            </Box>
            <Text
              fontWeight={700}
              color={"#34A853"}
              fontSize={{ base: 10, lg: 13 }}
            >
              2.0
            </Text>
          </HStack>
          </Flex>

          <Heading
            fontWeight="bold"
            fontSize={{ base: "3xl", lg: "6xl" }}
            lineHeight={1}
            color={"#474747"}
            textAlign={{ base: "center", lg: "left" }}
            mt={5}
            mb={5}
          >
            Explore the Future of Technology
          </Heading>
          <Flex
            gap={{ base: 5, lg: 10 }}
            my={5}
            ml={{ base: -5, lg: 0 }}
            justifyContent={{ base: "center", lg: "flex-start" }}
          >
            <Flex>
              <Box w={3}>
                <img src={image4} alt="Image 1" />
              </Box>
              <Text color={"#5F6368"} pl={2} fontSize={{ base: 10 }}>
                7th June,2025
              </Text>
            </Flex>
            <Flex>
              <Box w={3}>
                <img src={image5} alt="" />
              </Box>
              <Text color={"#5F6368"} pl={2} fontSize={{ base: 10 }}>
                University of Ibadan
              </Text>
            </Flex>
          </Flex>

          <Flex justifyContent={{ base: "center", lg: "flex-start" }} mt={6}>
            <Button
              bgColor={"#34A853"}
              borderRadius={"full"}
              p={6}
              boxShadow="md"
              display="flex"
              alignItems="center"
              w={{ base: "75%", lg: "30%" }}
              as="a"
              href="https://gdg.community.dev/e/mmkbt8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Text>Register for free</Text>
              <Box w={5}><img src={arrow} alt="arrow" /></Box>
            </Button>
          </Flex>
        </Box>
        <Box
          display={{ base: "none", lg: "flex" }}
          flex={1}
          justifyContent="center"
          alignItems="center"
        >
          <Box w={"75%"} mt={{ lg: -20 }} ml={10}>
            <img src={image1} alt="Image 1" />
          </Box>

          <Box mt={0} w={"15%"}>
            <img src={image2} alt="Image 2" />
            <img src={image3} alt="Image 2" />
          </Box>
        </Box>
      </Flex>

      <Box display={{ lg: "none" }} w="100%" mt={-10} position="relative">
        <img
          src={image1}
          alt="Image 1"
          style={{ width: "100%", display: "block", marginLeft: "-30px" }}
        />
        <Box position="absolute" top="30%" right="5%" w="30%" zIndex={2}>
          <img src={image2} alt="Image 2" style={{ width: "100%" }} />
          <img src={image3} alt="Image 3" style={{ width: "50%" }} />
        </Box>
      </Box>
    </>
  );
};

export default SectionOne;
