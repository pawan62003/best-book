import './App.css';
import Navbar from './component/Navbar';
import KeyFeature from './component/KeyFeature';
import {Box} from '@chakra-ui/react'

function App() {
  return (
    <Box margin={'auto'} width={{ base: '90%', md: '80%', lg: '80%' }} p={4} className="App">
     <Navbar/>
     <KeyFeature />
    </Box>
  );
}

export default App;
