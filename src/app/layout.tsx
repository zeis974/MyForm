import "@/styles/globals.css";

import { Metadata } from "next";
import localFont from "next/font/local";

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

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
  <html lang="fr" className={`${Rowdies.variable}`}>
   <body>
    <Navbar />
    {children}
   </body>
  </html>
 );
}
