import { Flex, Button, Text, Heading, Highlight } from "@chakra-ui/react";
import IMG_9487 from "../assets/IMG_9487.png";
import IMG_9460 from "../assets/IMG_9460.png";
import IMG_9449 from "../assets/IMG_9449.png";
import arrow from "../assets/solar_arrow-up-linear.png";

const SectionThree = () => {
  const images = [
    { src: IMG_9487, alt: "Image 1" },
    { src: IMG_9460, alt: "Image 2" },
    { src: IMG_9449, alt: "Image 3" },
  ];

  return (
    <>
      <Flex
        mt={70}
        mx={{ base: 10, lg: 20 }}
        gap={10}
        alignItems="center"
        mb={10}
        flexDir={{ base: "column", lg: "row" }}
      >
        <Heading
          borderRight={{ base: "none", lg: "5px solid #ccc" }}
          pr={10}
          pl={10}
          color={"#474747"}
          fontSize={{ base: "3xl", lg: "2xl" }}
          lineHeight={1}
          textAlign={{ base: "center", lg: "left" }}
        >
          More People <br></br> More Impact
        </Heading>
        <Text
          fontSize={"sm"}
          color={"#5F6368"}
          textAlign={{ base: "center", lg: "left" }}
        >
          TechQuest believes that together we can make a real <br /> difference.
          Our call for volunteer is in variety of roles according to your skills
          and interest
        </Text>
        <Button
          bgColor={"#2563EB"}
          color={"white"}
          borderRadius={"full"}
          p={6}
          ml={4}
          as="a"
          href="https://forms.gle/EceoqWuBPjtT3CKn6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Text>Become a Volunteer</Text>
          <img src={arrow} alt="arrow" />
        </Button>
      </Flex>
      <Flex
        justifyContent="center"
        alignItems="center"
        gap={10}
        overflowX="auto"
        p={4}
        flexDir={{ base: "column", lg: "row" }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            style={{
              width: "300px",
              height: "250px",
              objectFit: "cover",
              borderTopRightRadius: "12px",
              borderTopLeftRadius: "12px",
            }}
          />
        ))}
      </Flex>
    </>
  );
};

export default SectionThree;
