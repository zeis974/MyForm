import Head from "next/head";

import HeroBackground from "@/components/svg/HeroBackground";
import Navbar from "@/components/Navbar";

export default function Layout({ children }) {
 return (
  <>
   <Head>
    <title>MyForm</title>
    <meta rel="shortcut icon" href="/favicon.ico" />
    <link
     rel="preload"
     href="/fonts/RowdiesRegular.woff2"
     as="font"
     crossOrigin=""
    />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="theme-color" content="#fffff" />
   </Head>
   <Navbar />
   <HeroBackground />
   <main>{children}</main>
  </>
 );
}
