import NavBar from '../components/NavBar'
import { Box, Image } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Card = ({avatar, first_name, last_name, email}) => {
  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={avatar} />

      <Box p='6'>
        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated
        >
          {first_name}, {last_name}
        </Box>

        <Box>
          {email}
        </Box>
      </Box>
    </Box>
  );
}
const ApiData = () => {

  const [users, setUsers] = useState([]);

  useEffect(async () => {
    const { data } = await axios.get('https://random-data-api.com/api/users/random_user?size=50');
    setUsers(data);
  },[]);

  return (
    <Box>
    <NavBar/>
    <Box paddingLeft = "500px">
      
      {users.map((user) => (
        <Card {...user} />
      ))}
    </Box>
  </Box>
)};

export default ApiData;