import { Container, Select } from "ui";
import { Box, Text } from "@chakra-ui/react";

export default function Docs() {
  return (
    <Box p="4">
      <Container borderTopRadius="lg" variant="border" bgColor="cardboard.400">
        <Text as="h1" m="0">
          My Renovation Planner
        </Text>
      </Container>
      <Container display="flex" alignContent="center" h="250" variant="border" bgColor="cardboard.400" borderTop="none" borderBottom="none">
        <Text>Hi Greg! Here's your estimate based on your inoputs and our data.</Text>
      </Container>
      <Container display="grid" gridTemplateColumns="1fr 470px" variant="border" p="0">
        <Box>
          <Container borderBottomWidth="1px" borderBottomStyle="solid" borderBottomColor="cardboard.600">
            <Text>You&apos;ve made great decisions! Now it&apos;s time to review your estimate.</Text>
          </Container>
          <Container>
            <Select size={"md"} placeholder="Select an option" variant="block_grey">
              <option value="This is cool">This is cool</option>
              <option value="This is ok">This is ok</option>
              <option value="This is bad">This is bad</option>
            </Select>
          </Container>
        </Box>
        <Container borderLeftWidth="1px" borderLeftStyle="solid" borderLeftColor="cardboard.600"></Container>
      </Container>
    </Box>
  );
}
