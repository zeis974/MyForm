import "../styles/globals.css";

import { AppProvider } from "../context/AppContext";
import Layout from "../components/Layout/index"; // import default file

export default function MyForm({ Component, pageProps }) {
 return (
  <AppProvider>
   <Layout>
    <Component {...pageProps} />
   </Layout>
  </AppProvider>
 );
}
