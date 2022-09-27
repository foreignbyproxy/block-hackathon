import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { theme } from "ui";

import type { AppProps } from 'next/app'

const appTheme = extendTheme(theme);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={appTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
