import { Flex, Card, Text, Box, Heading, Highlight } from "@chakra-ui/react";
import { useState } from "react";
import icon1 from "../assets/icon-park-outline_weixin-people-nearby.png";
import carbon from "../assets/carbon_ibm-global-storage-architecture.png";
import grommet from "../assets/grommet-icons_workshop.png";
import workshop from "../assets/grommet-icons_workshop (1).png";

const SectionTwo = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(index);
  };

  const cardContents = [
    {
      title: "Cutting-edge workshops",
      description:
        "Hands-on sessions with the latest technologies and frameworks led by industry",
      src: icon1,
    },
    {
      title: "Networking opportunities",
      description:
        "Connect with like-minded professionals, potential professionals, potential collaborators. This is the second card.",
      src: carbon,
    },
    {
      title: "Global perspectives",
      description:
        "Insights from international speakers on worldwide tech trends and innovations.",
      src: grommet,
    },
    {
      title: "Innovation showcase",
      description:
        "Demonstration of groundbreaking projects and emerging  technologies. ",
      src: workshop,
    },
  ];

  return (
    <>
      <Box id="about" mx={{ base: 10, lg: 20 }} mt={10}>
        <Heading fontSize="3xl" mb={5} textAlign={{ base: "center", lg: "left" }} lineHeight={1.3}>
          <Highlight query="TechQuest" styles={{ px: "0.5", bg: "yellow" }}>
            The things you need to know about TechQuest
          </Highlight>
        </Heading>
        <Text color={"#5F6368"} fontSize="sm" mb={4} textAlign={{ base: "center", lg: "left" }}>
          TechQuest is a premier tech conference where developers, designers,
          entrepreneurs, and enthusiasts come together to explore
          innovation and the future of technology.
        </Text>
      </Box>
      <Flex
        justifyContent="center"
        alignItems="center"
        gap={{base:0,lg:6}}
        direction={{base:'column',lg:"row"}}
      >
        {cardContents.map((content, index) => (
          <Card.Root
            key={index}
            width="300px"
            height="280px"
            mt={{base:5,lg:20}}
            bg={activeCard === index ? "#474747" : "gray.300"}
            borderRadius="lg"
            boxShadow="lg"
            cursor="pointer"
            transition="all 0.3s ease"
            onClick={() => handleCardClick(index)}
          >
            <Card.Body
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="center"
              height="100%"
              px={4}
            >
              <Box bgColor={"#2563EB"} borderRadius={"full"} p={3} mb={4}>
                <img
                  src={content.src}
                  alt={content.title}
                  style={{
                    filter: activeCard === index ? "invert(1)" : "none",
                  }}
                />
              </Box>

              <Card.Title
                fontSize="xl"
                pb={5}
                fontWeight="bold"
                fontFamily={'heading'}
                color={activeCard === index ? "white" : "black"}
                textAlign={{ base: "center", lg: "left" }}
              >
                {content.title}
              </Card.Title>
              <Card.Description
                fontSize="sm"
                color={activeCard === index ? "white" : "black"}
                textAlign={{ base: "center", lg: "left" }}
              >
                {content.description}
              </Card.Description>
            </Card.Body>
          </Card.Root>
        ))}
      </Flex>
    </>
  );
};

export default SectionTwo;
