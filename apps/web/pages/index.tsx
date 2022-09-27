import { Box, Text, HStack } from "@chakra-ui/react";
import { Button, Container, StackedCTA } from "ui";
import Image from "next/future/image";

import ImageCity from '../assets/images/city.jpeg';
import ImagePot from '../assets/images/pot.jpeg';
import ImageSwirl from '../assets/images/swirl.jpeg';

export default function Web() {
  return (
    <>
      <Container backgroundImage="https://picsum.photos/1920/700" display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="xl">
        <Container
          variant="borderless"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap="6"
          bgColor="slate.200"
          borderRadius="lg"
        >
          <Text as="h1">Welcome to Block Hackathon Demo</Text>
          <Button>Learn More</Button>
        </Container>
      </Container>
      <Container px="8" py="12">
        <Text as="h1" mb="4" align="center">Welcome to Block Hackathon Demo</Text>
        <HStack spacing="8" justifyContent="center">
          <StackedCTA>
            <Image src={ImageCity} alt="Learn more" />
            <Text>This is the best tool to estimate your renovation</Text>
          </StackedCTA>
          <StackedCTA>
            <Image src={ImagePot} alt="Learn more" />
            <Text>This is the best tool to estimate your renovation</Text>
          </StackedCTA>
					<StackedCTA>
            <Image src={ImageSwirl} alt="Learn more" />
            <Text>This is the best tool to estimate your renovation</Text>
          </StackedCTA>
        </HStack>
      </Container>
    </>
  );
}
