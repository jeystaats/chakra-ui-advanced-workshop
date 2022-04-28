import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  ChakraProvider,
  Heading,
  HStack,
  Spacer,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

import Card from './components/Card/Card';
import ColorModeSwitcher from './components/ColorModeSwitcher/ColorModeSwitcher';
import MessyCard from './components/MessyCard/MessyCard';
import Page from './components/Page/Page';
import { theme } from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher justifySelf="flex-end" />
      <VStack pb={5}>
        <Alert status="success">
          <AlertIcon />
          <AlertTitle>Watch out!</AlertTitle>
          <AlertDescription>
            These cards are way too sexy for your screen 🔥
          </AlertDescription>
        </Alert>
      </VStack>
      <Page>
        <HStack w="full">
          <Box>
            <Heading>Messy card</Heading>
            <MessyCard my={4} />
          </Box>
          <Spacer></Spacer>
          <Box>
            <Heading>Pwetty card</Heading>
            <Card my={4} />
          </Box>
        </HStack>
      </Page>
    </ChakraProvider>
  );
}

export default App;
