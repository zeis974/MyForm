import Head from "next/head";
import { HeroBackground, Navbar } from "@/components";

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
