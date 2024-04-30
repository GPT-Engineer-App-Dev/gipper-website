import { Box, Heading, Text, Container } from '@chakra-ui/react';

const Biography = () => {
  return (
    <Container maxW="container.md" centerContent>
      <Box padding="4" maxW="3xl">
        <Heading mb={4}>Biography</Heading>
        <Text fontSize="xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
        </Text>
      </Box>
    </Container>
  );
};

export default Biography;