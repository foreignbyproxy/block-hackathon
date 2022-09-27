import { BoxProps } from "@chakra-ui/react";
import { Container } from "../Containers";

const defaultValues: BoxProps = {
  display: "flex",
  flexFlow: "column",
  gridGap: "4",
  alignItems: "stretch",
  bgColor: "#E9E6DD",
  borderRadius: "lg",
};

export const StackedCTA: React.FC<BoxProps> = ({ children, ...rest }) => {
  return (
    <Container p="4" variant="borderless" {...defaultValues} {...rest}>
      {children}
    </Container>
  );
};
