import { Flex, useStyles } from '@chakra-ui/react';
import React from 'react';

function CardFooter({ children }) {

  const { footer } = useStyles()

  return (
    <Flex sx={footer}>
      {children}
    </Flex>
  );
}

export default CardFooter