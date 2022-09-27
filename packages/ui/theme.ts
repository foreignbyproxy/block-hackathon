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
  },
  grey: {
    100: "#EDF2F7",
    200: "#E2E8F0",
    300: "#CBD5E0",
    400: "#A0AEC0",
    500: "#718096",
    600: "#4A5568",
  },
  cardboard: {
    100: "#F7F6F5",
    200: "#EFEBE9",
    300: "#E4E0DE",
    400: "#DCD5CE",
    500: "#CDC3B9",
    600: "#B0A59A",
  },
  slate: {
    100: "#EEF1F3",
    200: "#E4E9EC",
    300: "#D6DDE2",
    400: "#BBC7CF",
    500: "#92A4B0",
    600: "#556F81",
  },
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
  Select: {
    // For multipart components it seems better to use variants to style as opposed to a base
    variants: {
      block_orange: {
        field: {
          bg: "orange.400",
        },
        icon: {
          bg: "orange.400",
        },
      },
      block_grey: {
        field: {
          bg: "grey.300",
          color: "orange.600",
        },
        icon: {
          bg: "grey.300",
          color: "orange.600",
        },
      },
    },
  },
};

export const theme = extendTheme({
  colors,
  components,
});
