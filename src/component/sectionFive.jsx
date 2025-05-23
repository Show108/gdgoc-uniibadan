import {
  Box,
  SimpleGrid,
  Text,
  Icon,
  Heading,
  Highlight,
} from "@chakra-ui/react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import IMG_9449 from "../assets/IMG_9449.png";
import { LuLinkedin } from "react-icons/lu";

const SectionFive = () => {
  const images = [
    { src: IMG_9449, title: "Image 1" },
    { src: IMG_9449, title: "Image 2" },
    { src: IMG_9449, title: "Image 3" },
    { src: IMG_9449, title: "Image 4" },
  ];

  return (
    <>
      <Box id="speakers" mx={{ base: 10, lg: 20 }} mt={10}>
        <Heading color={"#474747"} fontSize={"3xl"} fontWeight={"bold"} mb={4} textAlign={{ base: "center", lg: "left" }} lineHeight={1.3}>
          <Highlight
            query="Speakers"
            styles={{ px: "0.1", py: "0.1", bg: "green.500", color: "white" }}
          >
            You will love to meet our Featured Speakers
          </Highlight>
        </Heading>
        <Text color={" #5F6368"} fontSize={"sm"} mb={4} textAlign={{ base: "center", lg: "left" }}>
          We have provided the opportunity to learn from industry leaders and
          innovators who are shaping the future of technology.
        </Text>
      </Box>
      <SimpleGrid columns={[1, 2, 2, 4]} gap={6} p={4}>
        {images.map((image, index) => (
          <Box
            key={index}
            position="relative"
            overflow="hidden"
            borderTopRightRadius="md"
            borderTopLeftRadius="md"
            boxShadow="md"
          >
            
            <Box position="absolute" top="2" right="2" display="flex" gap={2}>
              <Box bg={"white"} borderRadius={"full"} p={2}>
                <Icon
                  as={LuLinkedin}
                  boxSize={5}
                  color="blue.500"
                  cursor="pointer"
                />
              </Box>

              <Box bg={"white"} borderRadius={"full"} p={2}>
                <Icon
                  as={FaTwitter}
                  boxSize={5}
                  color="blue.400"
                  cursor="pointer"
                />
              </Box>
            </Box>

            <img
              src={image.src}
              alt={image.title}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
              }}
            />

            {/* Title Overlay */}
            <Box
              position="absolute"
              bottom="5"
              left="10"
              right="10"
              width="70%"
              height="50px"
              bg="#fff"
              color="white"
              textAlign="center"
              py={2}
              borderRadius={10}
            >
              <Text fontSize="lg" fontWeight="bold" color={"#474747"}>
                {image.title}
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default SectionFive;
