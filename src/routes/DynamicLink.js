import NavBar from '../components/NavBar'
import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const DynamicLink = () => {
  const { dynamic } = useParams();
  return (
    <div>
    <NavBar/>
    <Box>
      {dynamic}
    </Box>
  </div>
)};

export default DynamicLink;