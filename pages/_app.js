import "../styles/globals.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Laura-Ashlee Makes Things</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
