import React from "react";

import { Button as ButtonChakra, ButtonProps } from "@chakra-ui/react";

export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <ButtonChakra {...rest}>{children}</ButtonChakra>;
};
