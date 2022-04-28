import { Box, Flex, Grid } from '@chakra-ui/react';
import { useMultiStyleConfig } from '@chakra-ui/system';
import React from 'react';

function Page({ children, ...rest }) {
  const styles = useMultiStyleConfig('Page', rest);

  return (
    <Box __css={styles}>
      <Grid>        
        <Flex py={4} direction="column">
          {children}
        </Flex>
      </Grid>
    </Box>
  );
}

export default Page;
