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
import useSession from '../../context/useSession';
import logo from '../../assets/check-logo.png';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { setUser } = useSession();

  const onFormSubmit = async (data) => {
    const { email, password } = data;

    try {
      const { data: session, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error('Error logging in:', error.message);
        alert(error.message);
      } else {
        alert('Login successful!');
        setUser(session?.user || null);
        navigate('/main', { replace: true });
      }
    } catch (err) {
      console.error('Unexpected error:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <Box bg='grey' height='100vh'>
        <Center pt={5}>
          <img src={logo} alt='Logo' width='50px' height='50px' />
        </Center>
        <Heading color={'white'} textAlign='center' pt={2}>
          Login
        </Heading>
        <Box
          bg={'white'}
          px={10}
          borderTopLeftRadius={50}
          overflow={'hidden'}
          height='100vh'
          mt={15}
        >
          <VStack gap='10' width='full' mt={20}>
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
          </VStack>

          <Center>
            <Button w={'50%'} p={5} mt={10} type='submit' cursor='pointer'>
              Login
            </Button>
          </Center>
          <Flex
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'center'}
            mt={5}
          >
            <Text color={'black'}>Don&apos;t have an account?</Text>
            <Text
              color={'blue.500'}
              textDecoration={'underline'}
              ml={1}
              _hover={{ cursor: 'pointer' }}
              onClick={() => navigate('/')}
            >
              Sign up
            </Text>
          </Flex>
        </Box>
      </Box>
    </form>
  );
}
