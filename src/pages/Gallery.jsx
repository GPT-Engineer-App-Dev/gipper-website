import { Box, Image, SimpleGrid, Container } from '@chakra-ui/react';

const Gallery = () => {
  const images = [
    '/images/gallery1.jpg',
    '/images/gallery2.jpg',
    '/images/gallery3.jpg',
    '/images/gallery4.jpg'
  ];

  return (
    <Container maxW="container.lg" centerContent>
      <Box padding="4">
        <SimpleGrid columns={2} spacing={10}>
          {images.map((src, index) => (
            <Image key={index} src={src} boxSize="300px" objectFit="cover" />
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Gallery;