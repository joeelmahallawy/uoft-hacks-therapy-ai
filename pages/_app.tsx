import { AppProps } from "next/app";
import Head from "next/head";
import {
  MantineProvider,
  Button,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";
import { useState } from "react";
import { ColorSchemeContext } from "../context/ColorScheme";

function Apps() {
  return <Button>My app button</Button>;
}

// Custom theme is applied to all components in App
function Demo() {
  return (
    <MantineProvider
      theme={{ fontFamily: "Open Sans" }}
      withGlobalStyles
      withNormalizeCSS
    >
      <Apps />
    </MantineProvider>
  );
}
export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <ColorSchemeContext.Provider>
        <ColorSchemeProvider
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        >
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
              /** Put your mantine theme override here */
              colorScheme: "dark",
            }}
          >
            <Component {...pageProps} />
          </MantineProvider>
        </ColorSchemeProvider>
      </ColorSchemeContext.Provider>
    </>
  );
}
