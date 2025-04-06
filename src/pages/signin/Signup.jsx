import React from "react";
import { VStack, Input, Box, Heading, Button, Center, Text, Flex, Field } from "@chakra-ui/react";
import { PasswordInput } from "../../components/ui/password-input";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const password = watch("password"); // Watch the password field for validation

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/main");
  };

  const navigateToLogin = () => {
    navigate("/login");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box bg="black" height="100vh">
        <Heading color={"white"} textAlign="center" pt={5}>
          Signup
        </Heading>
        <Box
          bg={"white"}
          px={10}
          borderTopLeftRadius={50}
          overflow={"hidden"}
          height="100vh"
          mt={15}
        >
          <VStack gap="7" width="full" mt={20}>
            <Field.Root required invalid={!!errors.email}>
              <Field.Label>
                Email <Field.RequiredIndicator />
              </Field.Label>
              <Input
                {...register("email", { required: "Email is required" })}
                placeholder="me@example.com"
                variant="flushed"
              />
              {errors.email && (
                <Field.ErrorText>{errors.email.message}</Field.ErrorText>
              )}
            </Field.Root>
            <Field.Root required invalid={!!errors.password}>
              <Field.Label>
                Password <Field.RequiredIndicator />
              </Field.Label>
              <PasswordInput
                {...register("password", { required: "Password is required" })}
                placeholder="enter your password"
                variant="flushed"
              />
              {errors.password && (
                <Field.ErrorText>{errors.password.message}</Field.ErrorText>
              )}
            </Field.Root>
            <Field.Root required invalid={!!errors.confirmPassword}>
              <Field.Label>
                Confirm Password <Field.RequiredIndicator />
              </Field.Label>
              <PasswordInput
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                placeholder="confirm your password"
                variant="flushed"
              />
              {errors.confirmPassword && (
                <Field.ErrorText>{errors.confirmPassword.message}</Field.ErrorText>
              )}
            </Field.Root>
            <Field.Root>
              <Field.Label>Referral</Field.Label>
              <Input
                {...register("referral")}
                placeholder="enter referral code"
                variant="flushed"
              />
            </Field.Root>
          </VStack>

          <Center>
            <Button w={"50%"} p={5} mt={10} type="submit" onClick={navigateToHome} cursor="pointer">
              Submit
            </Button>
          </Center>
          <Flex
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            mt={10}
          >
            <Text>Already have an account,</Text>
            <Text color={"blue.500"} ml={1} >
              Sign in
            </Text>
          </Flex>
        </Box>
      </Box>
    </form>
  );
}