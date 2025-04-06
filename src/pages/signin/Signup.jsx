import React from "react";
import { FaUser } from "react-icons/fa";
import "@fontsource/poppins/300.css";
import { useEffect, useState } from "react";
import { Form, Outlet, useNavigate, useParams } from "react-router-dom";
import { Field, VStack, Input, Container, Box, Heading, Button } from "@chakra-ui/react";

export default function Signup() {
  return (
    <div>
      <Container bg="black" height="100vh" >
        <Heading color={'white'} textAlign="center" pt={5}>Signup</ Heading>
        <Box bg={'white'} px={ 10 }  borderTopLeftRadius={ 50 } overflow={'hidden'} // Full width of the viewport
        height="100vh" mx={-4} mt={15} >
        <VStack gap="7" width="full" mt={20}>
          <Field.Root required>
            <Field.Label>
              Email <Field.RequiredIndicator />
            </Field.Label>
            <Input placeholder="me@example.com" variant="flushed" />
          </Field.Root>
          <Field.Root required>
            <Field.Label>
              Password <Field.RequiredIndicator />
            </Field.Label>
            <Input placeholder="your password" variant="flushed" />
          </Field.Root>
          <Field.Root required>
            <Field.Label>
             Confirm Password <Field.RequiredIndicator />
            </Field.Label>
            <Input placeholder="confirm your password" variant="flushed" />
          </Field.Root>
          <Field.Root required>
            <Field.Label>
              Referral <Field.RequiredIndicator />
            </Field.Label>
            <Input placeholder="enter referral code" variant="flushed" />
          </Field.Root>
        </VStack>

        <Button></Button>
        </Box>
        
      </Container>
    </div>
  );
}
