import Head from "next/head";

import HeroBackground from "@/components/svg/HeroBackground";
import Navbar from "@/components/Navbar";

export default function Layout({ children }) {
 return (
  <>
   <Head>
    <title>MyForm</title>
   </Head>
   <Navbar />
   <HeroBackground />
   <main>{children}</main>
  </>
 );
}
