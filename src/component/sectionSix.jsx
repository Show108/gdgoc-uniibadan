import {
  Box,
  Container,
  Heading,
  Field,
  Input,
  RadioGroup,
  Checkbox,
  Stack,
  Button,
  For,
  Text,
  HStack,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import mark from "../assets/vector(3).png";

const registrationBenefits = [
  { text: "Premium learning resources" },
  { text: "Mentorship opportunities" },
  { text: "Study jam sessions" },
  { text: "Network with top industry professionals and map through it" },
];

const SectionSix = () => {
  return (
    <>
      <Box bg="#4285F4" py={10}>
        <Box mx={{ base: 10, lg: 20 }}>
          <Heading mb={2} color={"#fff"}>
            Ready to Join TechQuest 2025?
          </Heading>
          <Text mb={3} fontSize={"sm"} color={"#fafafa"}>
            Secure your spot at the most anticipated tech event of the year —
            TechQuest. Begin your journey into innovation, collaboration, and
            limitless possibilities.
          </Text>
          <Text mb={3} color={"white"} fontSize={15} fontWeight={700}>
            Registration includes:
          </Text>
          <SimpleGrid columns={{ base: 1, lg: 3 }} gap={6} mb={5}>
            {registrationBenefits.map((item, idx) => (
              <Flex
                key={idx}
                bg="white"
                p={4}
                borderRadius="md"
                boxShadow="md"
                alignItems="center"
              >
                <Box w={5} mr={5}>
                  <img src={mark} alt="mark" />
                </Box>

                <Text>{item.text}</Text>
              </Flex>
            ))}
          </SimpleGrid>
        </Box>

        <Container width={"90%"} bg="white" p={8} borderRadius="md">
          <Heading as="h2" size="lg" mb={6} color="blue.700">
            Register Now
          </Heading>

          <Field.Root mb={4}>
            <Field.Label>First Name</Field.Label>
            <Input />
          </Field.Root>

          <Field.Root mb={4}>
            <Field.Label>Last Name</Field.Label>
            <Input />
          </Field.Root>

          <Field.Root mb={4}>
            <Field.Label>Email</Field.Label>
            <Input type="email" />
          </Field.Root>

          <Field.Root mb={4}>
            <Field.Label>University</Field.Label>
            <Input />
          </Field.Root>

          <Field.Root mb={4}>
            <Field.Label>Are you a member?</Field.Label>
            <RadioGroup.Root defaultValue="yes">
              <Stack direction="row" spacing={4}>
                <RadioGroup.Item value="yes">
                  <RadioGroup.ItemIndicator />
                  <RadioGroup.ItemText>Yes</RadioGroup.ItemText>
                </RadioGroup.Item>
                <RadioGroup.Item value="no">
                  <RadioGroup.ItemIndicator />
                  <RadioGroup.ItemText>No</RadioGroup.ItemText>
                </RadioGroup.Item>
              </Stack>
            </RadioGroup.Root>
          </Field.Root>

          {/* Interests in Tech */}
          <Field.Root mb={6}>
            <Field.Label>Interests in Tech</Field.Label>

            <For
              each={[
                "Web Development",
                "UI Design",
                "Mobile Development",
                "Data Science",
                "Cybersecurity",
                "AI/ML",
                "Product management",
                "Other",
              ]}
            >
              {(variant) => (
                <Stack align="flex-start" flex="1" key={variant}>
                  <Checkbox.Root>
                    <Checkbox.HiddenInput />
                    <Checkbox.Control />
                    <Checkbox.Label>{variant}</Checkbox.Label>
                  </Checkbox.Root>
                </Stack>
              )}
            </For>
          </Field.Root>

          <Button
            bgColor={"#DC2626"}
            size="lg"
            width="100%"
            borderRadius={"full"}
            as="a"
            href="https://gdg.community.dev/e/mmkbt8"
            target="_blank"
            rel="noopener noreferrer"
          >
            Secure Your Spot
          </Button>
        </Container>
      </Box>
    </>
  );
};

export default SectionSix;
