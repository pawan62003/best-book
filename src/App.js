import './App.css';
import Navbar from './component/Navbar';
import KeyFeature from './component/KeyFeature';
import {Box} from '@chakra-ui/react'
import Bottom from './component/Bottom';
import Footer from './component/Footer';

function App() {
  return (
    <Box margin={'auto'} width={{ base: '90%', md: '80%', lg: '80%' }} p={4} className="App">
     <Navbar/>
     <KeyFeature />
     <Bottom/>
     <Footer/>
    </Box>
  );
}

export default App;
