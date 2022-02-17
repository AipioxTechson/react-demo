import NavBar from '../components/NavBar'
import { Box, Button, ButtonGroup } from '@chakra-ui/react';
import { useState } from 'react';


const StateExample = () => {

  const [count, setCount] = useState(0);


  return (
    <Box>
    <NavBar/>
    <Box paddingLeft="500px">
      <Box paddingLeft="125px">
        {count}
      </Box>
      <ButtonGroup variant='outline' spacing='6'>
        <Button onClick={() => setCount(count => count + 1)} colorScheme='blue'>Increment</Button>
        <Button onClick={() => setCount(count => count - 1)} colorScheme='blue'>Decrement</Button>
      </ButtonGroup>
    </Box>
  </Box>
)};

export default StateExample;