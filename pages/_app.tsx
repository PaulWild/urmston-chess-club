import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Header from "../components/header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div className="container">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
