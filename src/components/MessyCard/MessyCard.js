import React from 'react';

import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';

function MessyCard(props) {
  return (
    <Box
      mx="auto"
      px={8}
      py={4}
      rounded="lg"
      shadow="lg"
      bg={useColorModeValue('white', 'gray.800')}
      maxW="2xl"
      {...props}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <chakra.span
          fontSize="sm"
          color={useColorModeValue('gray.600', 'gray.400')}
        >
          April 21, 2022
        </chakra.span>
        <Link
          px={3}
          py={1}
          bg="gray.600"
          color="gray.100"
          fontSize="sm"
          fontWeight="700"
          rounded="md"
          _hover={{ bg: 'gray.500' }}
        >
          FoomNav
        </Link>
      </Flex>

      <Box mt={2}>
        <Link
          fontSize="2xl"
          color={useColorModeValue('gray.700', 'white')}
          fontWeight="700"
          _hover={{
            color: useColorModeValue('gray.600', 'gray.200'),
            textDecor: 'underline',
          }}
        >
          This is one of the worst cards I've ever seen ❌
        </Link>
        <chakra.p mt={2} color={useColorModeValue('gray.600', 'gray.300')}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
          expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
          enim reprehenderit nisi, accusamus delectus nihil quis facere in modi
          ratione libero!
        </chakra.p>
      </Box>

      <Flex justifyContent="space-between" alignItems="center" mt={4}>
        <Link
          color={useColorModeValue('brand.600', 'brand.400')}
          _hover={{ textDecor: 'underline' }}
        >
          Please don't read 📗
        </Link>

        <Flex alignItems="center">
          <Image
            mx={4}
            w={10}
            h={10}
            rounded="full"
            fit="cover"
            display={{ base: 'none', sm: 'block' }}
            src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
            alt="avatar"
          />
          <Link
            color={useColorModeValue('gray.700', 'gray.200')}
            fontWeight="700"
            cursor="pointer"
          >
            Repsaj Staats
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}

export default MessyCard;
