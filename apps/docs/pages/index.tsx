import { Box, Text } from "@chakra-ui/react";
import { InfoOutlineIcon, ArrowForwardIcon, CheckIcon } from "@chakra-ui/icons";
import Image from "next/future/image";

import NextLink from "next/link";

import { Container, Select, HorizatonalCTA, Button, StackedCTA, LinkArrow } from "ui";

import CTAImage from "../assets/images/cta-brush.png";
import { useState } from "react";

type SelectedOption = "direct" | "assisted" | undefined;

export default function Docs() {
  const [selectedOption, setSelectedOption] = useState<SelectedOption>();

  function handleCTAClick() {
    alert('You click "Go!"');
  }

  const CTA = (
    <Button onClick={handleCTAClick} size="sm" rightIcon={<ArrowForwardIcon />}>
      Go
    </Button>
  );

  return (
    <Box px="4">
      <Container borderTopRadius="lg" variant="border" bgColor="cardboard.400">
        <Text as="h1" m="0">
          My Renovation Planner
        </Text>
      </Container>
      <Container display="flex" alignContent="center" h="250" variant="border" bgColor="cardboard.400" borderTop="none" borderBottom="none">
        <Text>Hi Greg! Here&apos;s your estimate based on your inoputs and our data.</Text>
      </Container>
      <Container display="grid" gridTemplateColumns="1fr 470px" variant="border" p="0">
        <Box>
          <Container borderBottomWidth="1px" borderBottomStyle="solid" borderBottomColor="cardboard.600">
            <HorizatonalCTA icon={<InfoOutlineIcon />} cta={CTA}>
              <Text>You&apos;ve made great decisions! Now it&apos;s time to review your estimate.</Text>
            </HorizatonalCTA>
          </Container>
          <Container borderBottomWidth="1px" borderBottomStyle="solid" borderBottomColor="cardboard.600">
            <Select size={"md"} placeholder="Select an option" variant="block_grey">
              <option value="This is cool">This is cool</option>
              <option value="This is ok">This is ok</option>
              <option value="This is bad">This is bad</option>
            </Select>
          </Container>
          <Container borderBottomWidth="1px" borderBottomStyle="solid" borderBottomColor="cardboard.600">
            <Text as="h2">Block service Packages</Text>
            <Text variant="subtitle" mb="4">
              Choose a package that fits your renovation needs.
            </Text>
						<HorizatonalCTA icon={<InfoOutlineIcon />} cta={CTA} bgColor="pink.200" mb="4">
              <Text>@Patryk: maybe you can contribute by finishing this section from the &quot;Chose How to Build&quot; screen in Figma</Text>
            </HorizatonalCTA>
            <Container display="grid" gridTemplateColumns="1fr 1fr" gap="8" p="0">
              <Container variant="border" borderRadius="xl">
                <Text>Direct</Text>

                <Button
                  w="100%"
                  leftIcon={selectedOption === "direct" ? <CheckIcon /> : undefined}
                  isActive={selectedOption === "direct"}
                  onClick={() => setSelectedOption("direct")}
                >
                  {selectedOption === "direct" ? "Selected" : "Select"}
                </Button>
              </Container>
              <Container variant="border" borderRadius="xl">
                <Text>Assisted</Text>
                <Button
                  w="100%"
                  leftIcon={selectedOption === "assisted" ? <CheckIcon /> : undefined}
                  isActive={selectedOption === "assisted"}
                  onClick={() => setSelectedOption("assisted")}
                >
                  {selectedOption === "assisted" ? "Selected" : "Select"}
                </Button>
              </Container>
            </Container>
          </Container>
        </Box>
        <Container borderLeftWidth="1px" borderLeftStyle="solid" borderLeftColor="cardboard.600">
          <StackedCTA mb="4">
            <Image src={CTAImage} alt="Learn more" />
            <Text>This is the best tool to estimate your renovation</Text>
            <NextLink href="/learn-more" passHref>
              <LinkArrow>Learn More</LinkArrow>
            </NextLink>
          </StackedCTA>
          <StackedCTA>
            <Image src={CTAImage} alt="Learn more" />
            <NextLink href="/learn-more" passHref>
              <LinkArrow>Learn how to paint</LinkArrow>
            </NextLink>
          </StackedCTA>
        </Container>
      </Container>
    </Box>
  );
}
