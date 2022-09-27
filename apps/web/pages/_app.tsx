import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { theme } from "ui";

import Layout from "../components/Layout/Layout";

import type { AppProps } from "next/app";

const appTheme = extendTheme(theme);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={appTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
