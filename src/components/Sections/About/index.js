import React from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react'



export default function About(){
  return (
    <Flex
      py="32"
      px="4"
      flexDirection={['column', '', '', 'row']}
      alignItems="flex-end"
      textAlign={['center', '', '', 'left']}
      maxW={['container.sm', 'container.sm', 'container.sm', 'container.lg']}
      mx="auto"
    >
      <Image src="https://source.unsplash.com/collection/404339/800x600" w="full" />
      <Box
        mt={['8', '8', '8', '0']}
        p={['0', '0', '0', '2rem 0 0 4rem']}
        w={['full', 'full', 'full', '70%']}
        bgColor="white"
        ml={['0', '0', '0', '-24']}
      >
        <Text
          fontWeight="hairline"
          textTransform="uppercase"
          letterSpacing="widest"
          fontSize="4xl"
          lineHeight="10"
        >
          The leader in interactive VR
        </Text>
        <Text
          mt="4"
          color="gray.500"
          letterSpacing="wide"
          fontWeight="semibold"
        >
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </Text>
      </Box>
    </Flex>
  )
}