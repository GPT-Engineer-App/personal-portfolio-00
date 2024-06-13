import { Container, Text, VStack, Box, Heading, Button, Image, Flex } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8} align="flex-start">
        <Box boxSize="150px">
          <Image src="https://via.placeholder.com/150" alt="Profile Picture" borderRadius="full" boxSize="150px" />
        </Box>
        <Heading as="h1" size="2xl">John Doe</Heading>
        <Text fontSize="lg" textAlign="left">Full Stack Developer | JavaScript Enthusiast | Open Source Contributor</Text>
        <Flex justify="flex-start" width="100%" mt={4}>
          <Button as="a" href="https://github.com/yourusername" target="_blank" leftIcon={<FaGithub />} m={2}>GitHub</Button>
          <Button as="a" href="https://linkedin.com/in/yourusername" target="_blank" leftIcon={<FaLinkedin />} m={2}>LinkedIn</Button>
          <Button as="a" href="https://twitter.com/yourusername" target="_blank" leftIcon={<FaTwitter />} m={2}>Twitter</Button>
        </Flex>
        <Button colorScheme="teal" size="lg" mt={8}>Get in Touch</Button>
      </VStack>
    </Container>
  );
};

export default Index;