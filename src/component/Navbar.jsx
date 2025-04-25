import { Box, Flex, Text, Icon } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUserFriends, FaWallet, FaUser } from 'react-icons/fa';

export default function Navbar() {
  const location = useLocation(); // Get the current path

  return (
    <Box
      position='fixed'
      bottom={0}
      width='100%'
      bg='white'
      boxShadow='0 -2px 5px rgba(0, 0, 0, 0.1)'
      zIndex={1000}
    >
      <Flex justifyContent='space-around' alignItems='center' py={2}>
        <Link
          to='/main'
          style={{
            color: location.pathname === '/main' ? '#3182CE' : 'black',
            textDecoration: 'none',
          }}
        >
          <Flex direction='column' align='center'>
            <Icon as={FaHome} boxSize={5} />
            <Text fontSize='sm'>Home</Text>
          </Flex>
        </Link>

        <Link
          to='/main/invite'
          style={{
            color: location.pathname === '/main/invite' ? '#3182CE' : 'black',
            textDecoration: 'none',
          }}
        >
          <Flex direction='column' align='center'>
            <Icon as={FaUserFriends} boxSize={5} />
            <Text fontSize='sm'>Invite</Text>
          </Flex>
        </Link>

        <Link
          to='/main/wallet'
          style={{
            color: location.pathname === '/main/wallet' ? '#3182CE' : 'black',
            textDecoration: 'none',
          }}
        >
          <Flex direction='column' align='center'>
            <Icon as={FaWallet} boxSize={5} />
            <Text fontSize='sm'>Wallet</Text>
          </Flex>
        </Link>

        <Link
          to='/main/account'
          style={{
            color: location.pathname === '/main/account' ? '#3182CE' : 'black',
            textDecoration: 'none',
          }}
        >
          <Flex direction='column' align='center'>
            <Icon as={FaUser} boxSize={5} />
            <Text fontSize='sm'>Account</Text>
          </Flex>
        </Link>
      </Flex>
    </Box>
  );
}
