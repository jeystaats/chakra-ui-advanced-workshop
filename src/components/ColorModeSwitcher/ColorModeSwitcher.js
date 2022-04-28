import React from 'react';
import { useColorMode, useColorModeValue, IconButton, Box } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

function ColorModeSwitcher (props) {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <Box w="full" bg={useColorModeValue("white","gray.900")}  py={4} px={2}>    
      <IconButton
        size="md"
        fontSize="lg"
        aria-label={`Switch to ${text} mode`}
        variant="ghost"
        color="current"
        marginLeft="2"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        {...props}
      />
    </Box>
  );
};

export default ColorModeSwitcher