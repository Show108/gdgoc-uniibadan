// import {
//   Heading,
//   Flex,
//   Icon,
//   Box,
//   Text,
//   QrCode,
//   Center,
//   Button,
// } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';
// import { FaChevronLeft, FaClipboard, FaQuestionCircle } from 'react-icons/fa';

// export default function Invite() {
//   const navigate = useNavigate();

//   return (
//     <>
//       <Flex alignItems='center' p={4}>
//         <Icon
//           as={FaChevronLeft}
//           boxSize={5}
//           aria-label='Go Back'
//           onClick={() => navigate(-1)}
//         />
//         <Heading size='md' textAlign='center' flex='1' fontSize={20}>
//           Invite
//         </Heading>
//         <Icon as={FaQuestionCircle} boxSize={5} aria-label='Help' />
//       </Flex>
//       <Box>
//         <Text fontSize={23} fontWeight={'black'} pr={3} m={5}>
//           Refer your friend and extra claiming days!
//         </Text>
//       </Box>
//       <Box display='flex' justifyContent='center' alignItems='center' mt={2}>
//         <QrCode.Root value='https://wwww.p01project.netlify.app/' size={'md'}>
//           <QrCode.Frame>
//             <QrCode.Pattern />
//           </QrCode.Frame>
//         </QrCode.Root>
//       </Box>
//       <Center m={3}>
//         <Text>Scan to get your referral code or</Text>
//       </Center>
//       <Box bg={'gray.100'} p={4} borderRadius='md' m={2}>
//         <Flex alignItems={'center'}>
//           <Text fontSize={'12px'}>https://wwww.p01project.netlify.app/123</Text>
//           <Icon
//             as={FaClipboard}
//             boxSize={4}
//             aria-label='Copy Link'
//             flex={'1'}
//             onClick={() => {
//               navigator.clipboard.writeText(
//                 'https://wwww.p01project.netlify.app/'
//               );
//             }}
//           />
//         </Flex>
//       </Box>
//       <Center m={2}>
//         <Button w={'100%'} p={5}>
//           <Text fontWeight={'black'}>Share</Text>
//         </Button>
//       </Center>
//       <Text fontWeight={'black'} m={5}>
//         Your Referrals
//       </Text>
//     </>
//   );
// }

import {
  Heading,
  Flex,
  Icon,
  Box,
  Text,
  Center,
  Button,
  Input,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaClipboard, FaQuestionCircle } from 'react-icons/fa';
import QRCode from 'react-qr-code';
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

export default function Invite() {
  const navigate = useNavigate();
  const [referralLink, setReferralLink] = useState('');

  useEffect(() => {
    const fetchReferralCode = async () => {
      const { data: userData, error: userError } =
        await supabase.auth.getUser();

      if (userError || !userData?.user) {
        console.error(
          'User not logged in or error getting user:',
          userError?.message
        );
        return;
      }

      const { data, error } = await supabase
        .from('user_data')
        .select('referral_code')
        .eq('id', userData.user.id)
        .single();

      console.log('Returned data:', data);
      if (error) {
        console.error('Error fetching referral code:', error.message);
      } else {
        setReferralLink(
          `https://www.p01project.netlify.app?ref=${data.referral_code}`
        );
      }
    };

    fetchReferralCode();
  }, []);

  const handleCopyLink = () => {
    if (referralLink) {
      navigator.clipboard.writeText(referralLink);
      alert('Referral link copied!');
    }
  };

  const handleShareLink = async () => {
    if (!referralLink) return alert('Nothing to share yet!');
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Join P01 Project!',
          text: 'Use my referral link and earn extra claiming days!',
          url: referralLink,
        });
      } catch (err) {
        console.error('Share failed:', err);
      }
    } else {
      alert('Web Share not supported on this browser.');
    }
  };

  return (
    <>
      <Flex alignItems='center' p={4}>
        <Icon
          as={FaChevronLeft}
          boxSize={5}
          onClick={() => navigate(-1)}
          cursor='pointer'
        />
        <Heading size='md' flex='1' textAlign='center'>
          Invite
        </Heading>
        <Icon as={FaQuestionCircle} boxSize={5} />
      </Flex>

      <Box px={5} mb={6}>
        <Text fontSize='2xl' fontWeight='black'>
          Refer your friend and earn extra claiming days!
        </Text>
      </Box>

      <Center mb={6}>
        {referralLink ? (
          <QRCode value={referralLink} size={150} />
        ) : (
          <Text>Loading QR code…</Text>
        )}
      </Center>

      <Box px={5} mb={4}>
        <Text mb={2}>Your referral link:</Text>
        <Flex>
          <Input
            value={referralLink}
            isReadOnly
            placeholder='Loading…'
            flex='1'
            mr={2}
          />
          <Button size='sm' onClick={handleCopyLink} leftIcon={<FaClipboard />}>
            Copy
          </Button>
        </Flex>
      </Box>

      <Center px={5} mb={6}>
        <Button w='100%' onClick={handleShareLink}>
          Share
        </Button>
      </Center>

      <Box px={5} py={3}>
        <Text fontWeight='black'>Your Referrals</Text>
      </Box>
    </>
  );
}
