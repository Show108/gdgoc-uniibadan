import { Box, SimpleGrid, Text, Highlight,Heading } from "@chakra-ui/react";
import Img1 from '../assets/IMG-20250519-WA0037.jpg'
import Img2 from '../assets/HEADSHOT WINTER 73.jpg'
import Img3 from '../assets/IMG-20250517-WA0013.jpg'
import Img4 from '../assets/IMG-20250517-WA0015.jpg'
import Img5 from '../assets/IMG-20250517-WA0016.jpg'
import Img6 from '../assets/IMG-20250517-WA0017.jpg'
import Img7 from '../assets/IMG-20250517-WA0018.jpg'
import Img8 from '../assets/IMG-20250517-WA0019.jpg'
import Img9 from '../assets/IMG-20250519-WA0025.jpg'
import Img10 from '../assets/IMG-20250519-WA0027.jpg'
import Img11 from '../assets/IMG-20250519-WA0028.jpg'
import Img12 from '../assets/IMG-20250519-WA0029.jpg'
import Img13 from '../assets/IMG-20250519-WA0030.jpg'
import Img14 from '../assets/IMG-20250519-WA0033.jpg'
import Img15 from '../assets/IMG-20250519-WA0034.jpg'
import Img16 from '../assets/IMG-20250519-WA0036.jpg'


const SectionThree = () => {
  const images = [
    { src: Img1, title: "Aderibigbe Jesutoni", role: "Organizer/Team Lead" },
    { src: Img6, title: "Ajayi Oyindamola", role: "Organizer/Co-Team Lead" },
    { src: Img3, title: "Qosim Aisha", role: "Co-Organizer/Volunteering Lead" },
    { src: Img11, title: "Favour Etunwoke", role: "Co-Organizer/Sponsorship Lead" },
    { src: Img2, title: "Showunmi Segun", role: "Co-Organizer/Technical Lead" },
    { src: Img5, title: "Rofiat Lawal", role: "Logistic Lead" },
    { src: Img4, title: "Ikwuje Peace", role: "Content writing Lead" },
    { src: Img7, title: "David Aminasaun", role: "Program Lead" },
    { src: Img8, title: "Olowe Oluwafunmibi", role: "Logistic Lead" },
    { src: Img9, title: "Olaleye Anuoluwapo", role: "Event Lead" },
    { src: Img10, title: "Victor Abuka", role: "Technical Lead" },
    { src: Img12, title: "Oluwanifemi Adeyemi", role: "Protocol Lead" },
    { src: Img13, title: "Mahmud Amatullah", role: "Volunteering Lead" },
    { src: Img14, title: "Alo Esther", role: "Publicity Lead" },
    { src: Img15, title: "Ajiboyede Faith" , role: "Social media Lead"},
    { src: Img16, title: "Ahmed Olawale", role: "Design Lead" },

  ];

  return (
    <>
    <Box id="organisers" mx={{ base: 10, lg: 20 }} mt={10}>
      <Heading color={"#474747"} fontSize={'3xl'} fontWeight={'bold'}  mb={4} textAlign={{ base: "center", lg: "left" }} lineHeight={1.3}>
        <Highlight
          query="organizers"
          styles={{ px: "0.1", py: "0.1", bg: "orange", color: "white" }}
          >
        You will love to meet our organizers
        </Highlight>
      </Heading>
      <Text  color={" #5F6368"} fontSize={'sm'}  mb={4} textAlign={{ base: "center", lg: "left" }}>
        TechQuest  is brought to you bythese leading organizations in the technology space, committed to fostering innovation and knowledge sharing.
        </Text>
      </Box>
    <SimpleGrid columns={[1, 2, 2, 4]} gap={6} p={4}>
      {images.map((image, index) => (
        <Box
          key={index}
          position="relative"
          overflow="hidden"
          borderTopRightRadius="lg"
          borderTopLeftRadius="lg"
          boxShadow="md"
        >
          <img
            src={image.src}
            alt={image.title}
            style={{
              width: "100%",
              height: "500px",
              objectFit: "cover",
            }}
          />
          <Box
            position="absolute"
            bottom="5"
            left="7"
            right="10"
            width="80%"
            height={"70px"}
            bg="#fff"
            textAlign="center"
            py={2}
            borderRadius={"md"}
          >
            <Text fontSize="lg" fontWeight="bold" color={"#474747"}>
              {image.title}
            </Text>
            <Text fontSize="sm" fontWeight="bold" color={"#5F6368"}>
              {image.role}
            </Text>
          </Box>
        </Box>
      ))}
    </SimpleGrid>
    </>
  );
};

export default SectionThree;