import type { ReactElement } from "react";
import NextLink from "next/link";
import { Box } from "@chakra-ui/react";
import { LinkArrow } from "ui";

import BlockLogo from "../../assets/images/block-logo.svg";

type Props = {
  children: ReactElement;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Box display={"flex"} px="4" py="2" justifyContent={"space-between"} alignItems="center">
        <BlockLogo />
        <Box display={"flex"} gap="2">
          <NextLink href="/estimate" passHref>
            <LinkArrow variant="solid" size="sm">
              Get Your Estimate
            </LinkArrow>
          </NextLink>
        </Box>
      </Box>
      {children}
    </>
  );
};

export default Layout;
