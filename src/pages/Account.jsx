import "@fontsource/lato/400.css";
import "@fontsource/prompt/900.css";
import "@fontsource/raleway/500.css";
import "@fontsource/roboto/300.css";
import { toaster } from "../components/ui/toaster";
import {
  Box,
  Heading,
  List,
  Flex,
  Text,
  Separator,
  Button,
  Input,
  Drawer,
  Field,
  CloseButton,
  Portal,
} from "@chakra-ui/react";
import {
  FaUser,
  FaCog,
  FaQuestionCircle,
  FaHeadset,
  FaSignOutAlt,
  FaCreditCard,
  FaLink,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useSession from "../context/useSession";
import { supabase } from "../supabaseClient";
import { useState } from "react";

export const Account = () => {
  const navigate = useNavigate();
  const { user, loading, setUser } = useSession();
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    telephone: "",
    nin: "",
    username: "",
  });
  const [errors, setErrors] = useState({});

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    navigate("/login");
  };

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const validateProfile = () => {
    const newErrors = {};
    if (!profile.firstName) newErrors.firstName = "First name is required";
    if (!profile.lastName) newErrors.lastName = "Last name is required";
    if (!profile.telephone) newErrors.telephone = "Telephone is required";
    if (!/^\d{11}$/.test(profile.nin)) newErrors.nin = "NIN must be 11 digits";
    if (!profile.username) newErrors.username = "Username is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleProfileSave = () => {
    if (validateProfile()) {
      toaster.create({
        description: "Profile successfully updated",
        type: "info",
      });
      setOpen(false);
    }
  };

  return (
    <Box maxW="400px" mx="auto" mt={8} p={6} bg="white">
      <Flex
        alignItems="center"
        mb={6}
        direction="column"
        flexDirection="column"
      >
        <Box
          bg="blue.500"
          color="white"
          borderRadius="full"
          w="70px"
          h="70px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="2xl"
          mb={2}
        >
          <FaUser />
        </Box>
        <Heading size="md" fontFamily="prompt">
          Your Profile
        </Heading>
        <Text color="gray.500" fontFamily="lato" fontSize="sm">
          {user?.email || "user@email.com"}
        </Text>
      </Flex>
      <Separator mb={7} />

      <List.Root gap={5}>
        <List.Item
          display="flex"
          alignItems="center"
          cursor="pointer"
          _hover={{ bg: "gray.100", borderRadius: "md" }}
          p={2}
          onClick={() => setOpen(true)}
        >
          <List.Indicator asChild color="blue.500">
            <FaUser />
          </List.Indicator>
          <Text fontFamily="raleway">Profile Data</Text>
        </List.Item>
        <List.Item
          display="flex"
          alignItems="center"
          cursor="pointer"
          _hover={{ bg: "gray.100", borderRadius: "md" }}
          p={2}
        >
          <List.Indicator asChild color="teal.400">
            <FaCreditCard />
          </List.Indicator>
          <Text fontFamily="raleway">Payment Detail</Text>
        </List.Item>
        <List.Item
          display="flex"
          alignItems="center"
          cursor="pointer"
          _hover={{ bg: "gray.100", borderRadius: "md" }}
          p={2}
        >
          <List.Indicator asChild color="orange.400">
            <FaLink />
          </List.Indicator>
          <Text fontFamily="raleway">Referral Code</Text>
        </List.Item>
        <List.Item
          display="flex"
          alignItems="center"
          cursor="pointer"
          _hover={{ bg: "gray.100", borderRadius: "md" }}
          p={2}
        >
          <List.Indicator asChild color="blue.500">
            <FaCog />
          </List.Indicator>
          <Text fontFamily="raleway">Settings</Text>
        </List.Item>
        <List.Item
          display="flex"
          alignItems="center"
          cursor="pointer"
          _hover={{ bg: "gray.100", borderRadius: "md" }}
          p={2}
        >
          <List.Indicator asChild color="green.500">
            <FaQuestionCircle />
          </List.Indicator>
          <Text fontFamily="raleway">FAQs</Text>
        </List.Item>
        <List.Item
          display="flex"
          alignItems="center"
          cursor="pointer"
          _hover={{ bg: "gray.100", borderRadius: "md" }}
          p={2}
        >
          <List.Indicator asChild color="purple.400">
            <FaHeadset />
          </List.Indicator>
          <Text fontFamily="raleway">Customer Service</Text>
        </List.Item>
      </List.Root>

      <Button
        display="flex"
        alignItems="center"
        p={2}
        cursor="pointer"
        onClick={handleLogout}
        mt={10}
        w="100%"
      >
        <FaSignOutAlt />
        <Text fontFamily="raleway">Logout</Text>
      </Button>

      {/* Profile Drawer */}
      <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>Edit Profile</Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>
                <Field.Root mb={3} isInvalid={!!errors.firstName}>
                  <Field.Label>First Name</Field.Label>
                  <Input
                    name="firstName"
                    value={profile.firstName}
                    onChange={handleProfileChange}
                  />
                  <Field.ErrorText>{errors.firstName}</Field.ErrorText>
                </Field.Root>
                <Field.Root mb={3} isInvalid={!!errors.lastName}>
                  <Field.Label>Last Name</Field.Label>
                  <Input
                    name="lastName"
                    value={profile.lastName}
                    onChange={handleProfileChange}
                  />
                  <Field.ErrorText>{errors.lastName}</Field.ErrorText>
                </Field.Root>
                <Field.Root mb={3} isInvalid={!!errors.telephone}>
                  <Field.Label>Telephone</Field.Label>
                  <Input
                    name="telephone"
                    value={profile.telephone}
                    onChange={handleProfileChange}
                  />
                  <Field.ErrorText>{errors.telephone}</Field.ErrorText>
                </Field.Root>
                <Field.Root mb={3} isInvalid={!!errors.nin}>
                  <Field.Label>NIN</Field.Label>
                  <Input
                    name="nin"
                    value={profile.nin}
                    onChange={handleProfileChange}
                    maxLength={11}
                  />
                  <Field.ErrorText>{errors.nin}</Field.ErrorText>
                </Field.Root>
                <Field.Root mb={3} isInvalid={!!errors.username}>
                  <Field.Label>Username</Field.Label>
                  <Input
                    name="username"
                    value={profile.username}
                    onChange={handleProfileChange}
                  />
                  <Field.ErrorText>{errors.username}</Field.ErrorText>
                </Field.Root>
              </Drawer.Body>
              <Drawer.Footer>
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleProfileSave} variant="outline" size="sm">
                  Save
                </Button>
              </Drawer.Footer>
              <Drawer.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </Box>
  );
};
