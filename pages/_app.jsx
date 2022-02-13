import "../styles/globals.css";
import Head from "next/head";

import { Navbar } from "../components";

export default function MyApp({ Component, pageProps }) {
 return (
  <>
   <Head>
    <title>MyForm</title>
   </Head>
   <>
    <Navbar />
    <Component {...pageProps} />
   </>
  </>
 );
}
