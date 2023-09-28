import "@/styles/globals.css";

import { Metadata } from "next";
import localFont from "next/font/local";
import { PropsWithChildren } from "react";

import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
 title: {
  template: "%s | MyForm",
  default: "MyForm",
 },
};

const Rowdies = localFont({
 src: "../../public/assets/fonts/RowdiesRegular.woff2",
 display: "swap",
 variable: "--rowdies",
});

export default function RootLayout({ children }: PropsWithChildren) {
 return (
  <html lang="fr" className={`${Rowdies.variable}`}>
   <body>
    <Navbar />
    {children}
   </body>
  </html>
 );
}
