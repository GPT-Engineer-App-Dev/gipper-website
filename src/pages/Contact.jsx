import { Box, Button, FormControl, FormLabel, Input, Textarea, Container } from '@chakra-ui/react';

const Contact = () => {
  return (
    <Container maxW="container.md" centerContent>
      <Box padding="4" maxW="3xl">
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input placeholder="Your name" />
          <FormLabel mt={4}>Email</FormLabel>
          <Input placeholder="Your email" type="email" />
          <FormLabel mt={4}>Message</FormLabel>
          <Textarea placeholder="Your message" />
          <Button mt={4} colorScheme="blue">Send Message</Button>
        </FormControl>
      </Box>
    </Container>
  );
};

export default Contact;