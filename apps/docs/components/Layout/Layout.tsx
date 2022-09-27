import { useState } from "react";

import { Box } from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";

import type { ReactElement } from "react";

import { Button } from "ui";

import BlockLogo from "../../assets/images/block-logo.svg";

type Props = {
  children: ReactElement;
};

const Layout = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  function saveAndClose() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }

  return (
    <>
      <Box display={"flex"} px="4" py="2" justifyContent={"space-between"} alignItems="center">
        <BlockLogo />
        <Box display={"flex"} gap="2">
          <Button leftIcon={<ChatIcon />} variant="ghost">
            Talk to a Planner
          </Button>
          <Button onClick={saveAndClose} isLoading={isLoading} loadingText="Saving...">
            Save and Close
          </Button>
        </Box>
      </Box>
      {children}
    </>
  );
};

export default Layout;
