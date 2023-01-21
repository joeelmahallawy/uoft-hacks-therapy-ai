import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, Button } from '@mantine/core';


function Apps() {
    return <Button>My app button</Button>;
  }
  
  // Custom theme is applied to all components in App
  function Demo() {
    return (
      <MantineProvider theme={{ fontFamily: 'Open Sans' }} withGlobalStyles withNormalizeCSS>
        <Apps />
      </MantineProvider>
    );
  }
export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'dark',
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}