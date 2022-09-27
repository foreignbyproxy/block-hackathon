import * as React from "react";

import { Button, ButtonProps } from "@chakra-ui/react";

export const BlockButton: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};
