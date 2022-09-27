import type { StyleFunctionProps } from "@chakra-ui/styled-system";
import { extendTheme } from "@chakra-ui/react";

export const colors = {
  orange: {
    100: "#FFEDE7",
    200: "#FFD2C3",
    300: "#FF9E81",
    400: "#FF7C55",
    500: "#E56740",
    600: "#CC5936",
  }
};

export const components = {
  Button: {
    // 1. We can update the base styles
    baseStyle: {
      fontWeight: "bold", // Normally, it is "semibold"
    },
    // 2. We can add a new button size or extend existing
    sizes: {
      xl: {
        h: "56px",
        fontSize: "lg",
        px: "32px",
      },
    },
    // 3. We can add a new visual variant
    variants: {
      "with-shadow": {
        bg: "orange.400",
        boxShadow: "0 0 2px 2px #efdfde",
      },
      // 4. We can override existing variants
      solid: (props: StyleFunctionProps) => ({
        bg: props.colorMode === "dark" ? "orange.400" : "orange.400",
      }),
      // 5. We can add responsive variants
      sm: {
        bg: "orange.400",
        fontSize: "md",
      },
    },
    // 6. We can overwrite defaultProps
    defaultProps: {
      size: "lg", // default is md
      variant: "sm", // default is solid
      colorScheme: "orange", // default is gray
    },
  },
};

export const theme = extendTheme({
  colors,
  components,
});
