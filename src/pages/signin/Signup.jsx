// import React from 'react';
import {
  VStack,
  Input,
  Box,
  Heading,
  Button,
  Center,
  Text,
  Flex,
  Field,
} from '@chakra-ui/react';
import { PasswordInput } from '../../components/ui/password-input';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabaseClient';
import logo from '../../assets/check-logo.png';

export default function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onFormSubmit = async (data) => {
    const { email, password, referral} = data;

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        referral
      });

      if (error) {
        console.error('Error signing up:', error.message);
        alert(error.message);
      } else {
        alert(
          'Signup successful! Please check your email to confirm your account.'
        );
        navigate('/main'); // Redirect to login page
      }
    } catch (err) {
      console.error('Unexpected error:', err);
    }
  };
  const password = watch('password');
  const navigate = useNavigate();

  // const navigateToHome = () => {
  //   navigate('/main');
  // };

  // const navigateToLogin = () => {
  //   navigate('/login');
  // };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <Box bg='grey' height='100vh'>
        <Center pt={5}>
          <img src={logo} alt='Logo' width='50px' height='50px' />
        </Center>
        <Heading color={'white'} textAlign='center' pt={3}>
          Signup
        </Heading>
        <Box
          bg={'white'}
          px={10}
          borderTopLeftRadius={50}
          overflow={'hidden'}
          height='100vh'
          mt={15}
        >
          <VStack gap='7' width='full' mt={20}>
            <Field.Root required invalid={!!errors.email}>
              <Field.Label color={'black'}>
                Email <Field.RequiredIndicator />
              </Field.Label>
              <Input
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Invalid email address',
                  },
                })}
                placeholder='me@example.com'
                variant='flushed'
                autoComplete='off'
                color='gray.800'
              />
              {errors.email && (
                <Field.ErrorText>{errors.email.message}</Field.ErrorText>
              )}
            </Field.Root>
            <Field.Root required invalid={!!errors.password}>
              <Field.Label color={'black'}>
                Password <Field.RequiredIndicator />
              </Field.Label>
              <PasswordInput
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters long',
                  },
                })}
                placeholder='Enter your password'
                variant='flushed'
                autoComplete='off'
                color='gray.800'
              />
              {errors.password && (
                <Field.ErrorText>{errors.password.message}</Field.ErrorText>
              )}
            </Field.Root>
            <Field.Root required invalid={!!errors.confirmPassword}>
              <Field.Label color={'black'}>
                Confirm Password <Field.RequiredIndicator />
              </Field.Label>
              <PasswordInput
                {...register('confirmPassword', {
                  required: 'Confirm Password is required',
                  validate: (value) =>
                    value === password || 'Passwords do not match',
                })}
                placeholder='Confirm your password'
                variant='flushed'
                autoComplete='off'
                color='gray.800'
              />
              {errors.confirmPassword && (
                <Field.ErrorText>
                  {errors.confirmPassword.message}
                </Field.ErrorText>
              )}
            </Field.Root>
            <Field.Root>
              <Field.Label color={'black'}>Referral</Field.Label>
              <Input
                {...register('referral')}
                placeholder='enter referral code'
                variant='flushed'
                autoComplete='off'
                color='gray.800'
              />
            </Field.Root>
          </VStack>

          <Center>
            <Button w={'50%'} p={5} mt={10} type='submit' cursor='pointer'>
              Submit
            </Button>
          </Center>
          <Flex
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'center'}
            mt={10}
          >
            <Text color={'black'}>Already have an account?</Text>
            <Text
              color={'blue.500'}
              textDecoration={'underline'}
              ml={1}
              _hover={{ cursor: 'pointer' }}
              onClick={() => navigate('/login')}
            >
              Sign in
            </Text>
          </Flex>
        </Box>
      </Box>
    </form>
  );
}
