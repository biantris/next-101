import Head from "next/head";
import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/global";

interface MyAppProps extends AppProps {}

export const MyApp = (props: MyAppProps) => {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
