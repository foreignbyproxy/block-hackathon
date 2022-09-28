import { Box, Text, Badge, Link } from '@chakra-ui/react';
import {
  InfoOutlineIcon,
  ArrowForwardIcon,
  CheckIcon,
  EditIcon,
  HamburgerIcon,
} from '@chakra-ui/icons';
import Image from 'next/future/image';

import NextLink from 'next/link';

import {
  Container,
  Select,
  HorizatonalCTA,
  Button,
  StackedCTA,
  LinkArrow,
} from 'ui';

import CTAImage from '../assets/images/cta-brush.png';
import roomImage from '../assets/images/room-image.png';
import { useState } from 'react';

type SelectedOption = 'direct' | 'assisted' | undefined;

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

      <Container
        display="flex"
        alignContent="center"
        h="250"
        variant="border"
        bgColor="cardboard.400"
        borderTop="none"
        borderBottom="none"
      >
        <Text>
          Hi Greg! Here&apos;s your estimate based on your inoputs and our data.
        </Text>
      </Container>

      <Container
        display="grid"
        gridTemplateColumns="1fr 470px"
        variant="border"
        p="0"
      >
        <Box>
          <Container
            background="cardboard.100"
            borderBottomWidth="1px"
            borderBottomStyle="solid"
            borderBottomColor="cardboard.600"
          >
            <HorizatonalCTA icon={<InfoOutlineIcon />} cta={CTA}>
              <Text>
                You&apos;ve made great decisions! Now it&apos;s time to review
                your estimate.
              </Text>
            </HorizatonalCTA>
          </Container>

          <Container
            background="cardboard.100"
            borderBottomWidth="1px"
            borderBottomStyle="solid"
            borderBottomColor="cardboard.600"
          >
            <Select
              size={'md'}
              placeholder="Select an option"
              variant="block_grey"
            >
              <option value="This is cool">This is cool</option>
              <option value="This is ok">This is ok</option>
              <option value="This is bad">This is bad</option>
            </Select>
          </Container>

          <Container
            background="cardboard.100"
            borderBottomWidth="1px"
            borderBottomStyle="solid"
            borderBottomColor="cardboard.600"
          >
            <HorizatonalCTA
              icon={<InfoOutlineIcon />}
              cta={CTA}
              bgColor="pink.200"
            >
              <Text>
                You’ve made great decisions! Now it’s time to review your
                estimate.
              </Text>
            </HorizatonalCTA>
          </Container>

          <Container
            background="cardboard.100"
            borderBottomWidth="1px"
            borderBottomStyle="solid"
            borderBottomColor="cardboard.600"
          >
            <Text fontSize="2xl" as="h2" mb="4px">
              Block service Packages
            </Text>
            <Text variant="subtitle" mb="4">
              Choose a package that fits your renovation needs.
            </Text>

            <Container
              display="grid"
              gridTemplateColumns="1fr 1fr"
              gap="8"
              p="0"
            >
              <Container
                variant="border"
                borderRadius="xl"
                display="grid"
                gap="20px"
              >
                <Container
                  p="0 0 20px 0"
                  borderBottomWidth="1px"
                  borderBottomStyle="solid"
                  borderBottomColor="cardboard.300"
                >
                  <Text fontSize="4xl">Direct</Text>
                  <Text mb="40px">
                    Work directly with a vetted contractor to select and install
                    your kit affordably.
                  </Text>

                  <Button
                    w="100%"
                    leftIcon={
                      selectedOption === 'direct' ? <CheckIcon /> : undefined
                    }
                    isActive={selectedOption === 'direct'}
                    onClick={() => setSelectedOption('direct')}
                  >
                    {selectedOption === 'direct' ? 'Selected' : 'Select'}
                  </Button>
                </Container>

                <Container
                  p="0 0 20px 0"
                  borderBottomWidth="1px"
                  borderBottomStyle="solid"
                  borderBottomColor="cardboard.300"
                >
                  <Text
                    textTransform="uppercase"
                    fontSize="sm"
                    color="grey.600"
                    mb="12px"
                  >
                    Benefits
                  </Text>
                  <Text>
                    You’ll save money by problem solving directly with your
                    contractor and be in control of your time commitment
                  </Text>
                </Container>

                <Container
                  p="0 0 20px 0"
                  borderBottomWidth="1px"
                  borderBottomStyle="solid"
                  borderBottomColor="cardboard.300"
                >
                  <Text
                    textTransform="uppercase"
                    fontSize="sm"
                    color="grey.600"
                    mb="12px"
                  >
                    Design
                  </Text>
                  <Badge textTransform="capitalize">Material Kit</Badge>
                </Container>

                <Container
                  p="0 0 20px 0"
                  borderBottomWidth="1px"
                  borderBottomStyle="solid"
                  borderBottomColor="cardboard.300"
                >
                  <Text
                    textTransform="uppercase"
                    fontSize="sm"
                    color="grey.600"
                    mb="12px"
                  >
                    Additional Help from Block
                  </Text>
                  <Container p="0" display="flex" gap="8px" flexWrap="wrap">
                    <Badge textTransform="capitalize" mr="8px">
                      Material Kit
                    </Badge>
                    <Badge textTransform="capitalize">Delivery support</Badge>
                  </Container>
                </Container>

                <Container
                  p="0 0 20px 0"
                  borderBottomWidth="1px"
                  borderBottomStyle="solid"
                  borderBottomColor="cardboard.300"
                >
                  <Text
                    textTransform="uppercase"
                    fontSize="sm"
                    color="grey.600"
                    mb="12px"
                  >
                    Contractor
                  </Text>
                  <Text>
                    <Link color="orange.400">Block Certified.</Link> Licensed
                    and Insured
                  </Text>
                </Container>

                <Container p="0">
                  <Text
                    textTransform="uppercase"
                    fontSize="sm"
                    color="grey.600"
                    mb="12px"
                  >
                    Scope
                  </Text>
                  <Text>Work with a contractor to finalize scope</Text>
                </Container>
              </Container>

              <Container
                variant="border"
                borderRadius="xl"
                display="grid"
                gap="20px"
              >
                <Container
                  p="0 0 20px 0"
                  borderBottomWidth="1px"
                  borderBottomStyle="solid"
                  borderBottomColor="cardboard.300"
                >
                  <Text
                    fontSize="4xl"
                    display="flex"
                    justifyContent="space-between"
                  >
                    Assisted <span>+$$$</span>
                  </Text>
                  <Text mb="40px">
                    A guided renovation with a dedicated designer and support
                    team from start to finish.
                  </Text>

                  <Button
                    w="100%"
                    leftIcon={
                      selectedOption === 'assisted' ? <CheckIcon /> : undefined
                    }
                    isActive={selectedOption === 'assisted'}
                    onClick={() => setSelectedOption('assisted')}
                  >
                    {selectedOption === 'assisted' ? 'Selected' : 'Select'}
                  </Button>
                </Container>

                <Container
                  p="0 0 20px 0"
                  borderBottomWidth="1px"
                  borderBottomStyle="solid"
                  borderBottomColor="cardboard.300"
                >
                  <Text
                    textTransform="uppercase"
                    fontSize="sm"
                    color="grey.600"
                    mb="12px"
                  >
                    Benefits
                  </Text>
                  <Text>
                    You’ll have a full team guiding you through the process
                  </Text>
                </Container>

                <Container
                  p="0 0 20px 0"
                  borderBottomWidth="1px"
                  borderBottomStyle="solid"
                  borderBottomColor="cardboard.300"
                >
                  <Text
                    textTransform="uppercase"
                    fontSize="sm"
                    color="grey.600"
                    mb="12px"
                  >
                    Design
                  </Text>
                  <Container p="0" display="flex" gap="8px" flexWrap="wrap">
                    <Badge textTransform="capitalize">Material Kit</Badge>
                    <Badge textTransform="capitalize">Dedicated Designer</Badge>
                    <Badge textTransform="capitalize">Custom Designs</Badge>
                    <Badge textTransform="capitalize">
                      2 Design Meetings & Revisions
                    </Badge>
                  </Container>
                </Container>

                <Container
                  p="0 0 20px 0"
                  borderBottomWidth="1px"
                  borderBottomStyle="solid"
                  borderBottomColor="cardboard.300"
                >
                  <Text
                    textTransform="uppercase"
                    fontSize="sm"
                    color="grey.600"
                    mb="12px"
                  >
                    Additional Help from Block
                  </Text>
                  <Container p="0" display="flex" gap="8px" flexWrap="wrap">
                    <Badge textTransform="capitalize">Digital Order</Badge>
                    <Badge textTransform="capitalize">Delivery support</Badge>
                    <Badge textTransform="capitalize">
                      Document Management
                    </Badge>
                    <Badge textTransform="capitalize">
                      License & Insurance Coverage
                    </Badge>
                    <Badge textTransform="capitalize">
                      Guided Project Support
                    </Badge>
                  </Container>
                </Container>

                <Container
                  p="0 0 20px 0"
                  borderBottomWidth="1px"
                  borderBottomStyle="solid"
                  borderBottomColor="cardboard.300"
                >
                  <Text
                    textTransform="uppercase"
                    fontSize="sm"
                    color="grey.600"
                    mb="12px"
                  >
                    Contractor
                  </Text>
                  <Text>
                    <Link color="orange.400">Block Certified.</Link> Licensed
                    and Insured
                  </Text>
                </Container>

                <Container p="0">
                  <Text
                    textTransform="uppercase"
                    fontSize="sm"
                    color="grey.600"
                    mb="12px"
                  >
                    Scope
                  </Text>
                  <Text>Guided Project Support</Text>
                </Container>
              </Container>
            </Container>

            <Box py="4">
              <Container
                p="0"
                display="grid"
                gridTemplateColumns="1fr 1fr"
                my="3"
              >
                <Text>My Rooms</Text>
                <Button
                  onClick={handleCTAClick}
                  position="relative"
                  left="92%"
                  width="fit-content"
                  variant="plain"
                  size="sm"
                  leftIcon={<HamburgerIcon />}
                ></Button>
              </Container>
              <Container
                background="white"
                variant="border"
                borderColor="cardboard.400"
                borderRadius="xl"
                p="0"
              >
                <Container p="0" display="grid" gridTemplateColumns="244px 1fr">
                  <Container
                    borderColor="cardboard.400"
                    variant="border"
                    borderRadius="xl"
                    width="239px"
                    height="239px"
                    m="4"
                  >
                    <Image src={roomImage} alt="Test alt" />
                  </Container>
                  <Box px="8" py="2">
                    <Text variant="title">Main Bathroom</Text>
                    <Text variant="label">Design</Text>
                    <Container
                      background="cardboard.100"
                      display="grid"
                      gridTemplateColumns="1fr 1fr"
                      borderRadius="md"
                      py="3"
                      my="2"
                    >
                      <Text>Gramercy</Text>
                      <Button
                        onClick={handleCTAClick}
                        position="relative"
                        left="72%"
                        width="fit-content"
                        variant="plain"
                        size="sm"
                        leftIcon={<EditIcon />}
                      >
                        Customize
                      </Button>
                    </Container>
                    <Text variant="label">Esitmated Cost</Text>
                    <Container
                      background="cardboard.100"
                      display="grid"
                      gridTemplateColumns="1fr 1fr"
                      borderRadius="md"
                      py="3"
                      my="2"
                    >
                      <Text>$24,300 ± $1,000</Text>
                      <Button
                        onClick={handleCTAClick}
                        position="relative"
                        left="60%"
                        width="fit-content"
                        variant="plain"
                        size="sm"
                        leftIcon={<EditIcon />}
                      >
                        Edit Room Details
                      </Button>
                    </Container>
                  </Box>
                </Container>
              </Container>
            </Box>
          </Container>
        </Box>
        <Container
          background="cardboard.100"
          borderLeftWidth="1px"
          borderLeftStyle="solid"
          borderLeftColor="cardboard.600"
        >
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
