import "../styles/globals.css";

import { AppProvider } from "@/context/AppContext";
import Layout from "@/components/Layout";

export default function MyForm({ Component, pageProps }) {
 return (
  <AppProvider>
   <Layout>
    <Component {...pageProps} />
   </Layout>
  </AppProvider>
 );
}
