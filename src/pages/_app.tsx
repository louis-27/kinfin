import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";

import "~/styles/globals.css";
import { AppLayout } from "~/components/layouts/AppLayout";

import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import theme from "~/theme";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <SessionProvider session={session}>
        <ChakraProvider theme={theme}>
          {Component.appPage ? (
            <AppLayout>
              <Component {...pageProps} />
            </AppLayout>
          ) : (
            <Component {...pageProps} />
          )}
        </ChakraProvider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
