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
import useSession from '../../context/useSession'; // Import useSession
import logo from '../../assets/check-logo.png';

export default function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch('password');
  const navigate = useNavigate();
  const { setUser } = useSession(); // Access setUser from SessionContext

  const onFormSubmit = async (data) => {
    const { email, password } = data;

    try {
      // Query the user_profiles view to check if the email exists
      const { data: user, error: queryError } = await supabase
        .from('user_profiles') // Replace with your view name
        .select('*')
        .eq('email', email)
        .single();

      if (queryError && queryError.code !== 'PGRST116') {
        // Handle unexpected query errors (e.g., database issues)
        console.error('Error querying user_profiles:', queryError.message);
        alert('An error occurred while checking your email. Please try again.');
        return;
      }

      if (user) {
        // Email already exists
        alert('This email is already registered. Please log in instead.');
        return;
      }

      // Proceed with signup if the email does not exist
      const { data: session, error: signupError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (signupError) {
        console.error('Error signing up:', signupError.message);
        alert(signupError.message);
      } else {
        alert(
          'Signup successful! Please check your email to confirm your account.'
        );
        setUser(session?.user || null); // Update global session state
        navigate('/main'); // Redirect to the main page
      }
    } catch (err) {
      console.error('Unexpected error:', err); // Log the full error object
      alert('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <Box bg='grey'>
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
            mt={5}
            mb={5}
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
