import { Box, BoxProps } from "@chakra-ui/react";

type ContainerProps = {
  variant?: "border" | "borderless";
} & BoxProps;

const config = {
  variant: {
    border: {
      borderColor: "cardboard.600",
      borderWidth: "1px",
    },
    borderless: {
      border: "none",
    },
  },
};

export const Container: React.FC<ContainerProps> = ({ variant, children, ...rest }) => {
  const variantAttrs = variant ? config.variant[variant] : config.variant.borderless;

  return (
    <Box px="6" py="4" {...variantAttrs} {...rest}>
      {children}
    </Box>
  );
};
