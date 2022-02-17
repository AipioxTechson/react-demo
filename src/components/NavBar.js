import { Link, Flex } from '@chakra-ui/react';
import {Link as RouterLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Flex justify="space-around" align="center">
    <Link to="/dynamic/2" as={RouterLink}>Dynamic Example</Link>
    <Link to="/grabData" as={RouterLink}>GrabData</Link>
    <Link to="/state" as={RouterLink}>State Example</Link>
    <Link to="/qwgqwopgjpoqjgopq" as={RouterLink}>Random page</Link>
  </Flex>
)};

export default NavBar;