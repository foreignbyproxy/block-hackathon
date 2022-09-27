import { Box, Button } from "@chakra-ui/react";
import type { ReactElement } from 'react'

import BlockLogo from "../../assets/images/block-logo.svg";

type Props = {
  children: ReactElement;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Box display={"flex"} p="2" justifyContent={"space-between"}>
        <BlockLogo />
        <Box display={"flex"} gap="2">
          <Button>Talk to a Planner</Button>
          <Button>Save and Close</Button>
        </Box>
      </Box>
      {children}
    </>
  );
};

export default Layout;
