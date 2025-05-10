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
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';
import useSession from '../../context/useSession';
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
  const { setUser } = useSession();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const referralCodeFromURL = queryParams.get('ref');

  const [referralCode, setReferralCode] = useState('');

  useEffect(() => {
    if (referralCodeFromURL) {
      setReferralCode(referralCodeFromURL);
    }
  }, [referralCodeFromURL]);

  const onFormSubmit = async (data) => {
    const { email, password } = data;

    try {
      const { data: user, error: queryError } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('email', email)
        .single();

      if (queryError && queryError.code !== 'PGRST116') {
        console.error('Error querying user_profiles:', queryError.message);
        alert('An error occurred while checking your email. Please try again.');
        return;
      }

      if (user) {
        alert('This email is already registered. Please log in instead.');
        return;
      }

      const { data: session, error: signupError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (signupError) {
        console.error('Error signing up:', signupError.message);
        alert(signupError.message);
        return;
      }

      const newUser = session?.user;
      if (!newUser) {
        alert('Signup succeeded but no user was returned.');
        return;
      }

      if (referralCode) {
        const { data: referrer } = await supabase
          .from('user_data')
          .select('id')
          .eq('referral_code', referralCode)
          .single();

        if (referrer && referrer.id) {
          const { error: insertError } = await supabase
            .from('referrals')
            .insert({
              referrer_id: referrer.id,
              referred_user_id: newUser.id,
              referred_email: email,
            });

          if (insertError) {
            console.error('Error inserting referral:', insertError.message);
          }
        } else {
          console.warn('Invalid referral code, referrer not found.');
        }
      }

      alert(
        'Signup successful! Please check your email to confirm your account.'
      );
      setUser(newUser);
      navigate('/main', { replace: true });

      // if (signupError) {
      //   console.error('Error signing up:', signupError.message);
      //   console.log('Error details:', signupError);
      //   alert(signupError.message);
      // } else {
      //   alert(
      //     'Signup successful! Please check your email to confirm your account.'
      //   );
      //   setUser(session?.user || null);
      //   navigate('/main', { replace: true });
      // }
    } catch (err) {
      console.error('Unexpected error:', err);
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
                value={referralCode}
                isReadOnly={!!referralCodeFromURL}
                placeholder='enter referral code'
                variant='flushed'
                autoComplete='off'
                color='gray.800'
                onChange={(e) => setReferralCode(e.target.value)}
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
