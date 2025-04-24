import { Spinner, Center } from '@chakra-ui/react';

const Loader = () => (
  <Center height='100vh'>
    <Spinner size='xl' thickness='4px' speed='0.65s' color='blue.500' />
  </Center>
);

export default Loader;
