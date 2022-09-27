import * as React from "react";

import { Button as ButtonChakra, ButtonProps } from "@chakra-ui/react";

export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <ButtonChakra {...rest}>{children}</ButtonChakra>;
};

type IconButtonProps = {
  icon?: React.ReactElement;
} & ButtonProps;

export const IconButton: React.FC<IconButtonProps> = ({ children, icon, ...rest }) => {
  return (
    <ButtonChakra leftIcon={icon} {...rest}>
      {children}
    </ButtonChakra>
  );
};
