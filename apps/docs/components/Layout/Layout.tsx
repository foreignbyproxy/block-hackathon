import { Box } from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";

import type { ReactElement } from "react";

import { Button, IconButton } from "ui";

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
          <IconButton icon={<ChatIcon />}>Talk to a Planner</IconButton>
          <Button>Save and Close</Button>
        </Box>
      </Box>
      {children}
    </>
  );
};

export default Layout;
