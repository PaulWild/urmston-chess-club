import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Header from "../components/header";
import Footer from "../components/footer";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Urmston Chess Club</title>
        <meta name="description" content="Umrston chess club" />
      </Head>

      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
