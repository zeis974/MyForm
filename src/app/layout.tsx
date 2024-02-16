import "@/styles/globals.css"

import type { Metadata } from "next"
import type { PropsWithChildren } from "react"

import localFont from "next/font/local"
import { KumaRegistry } from "@kuma-ui/next-plugin/registry"

import Navbar from "@/components/Navbar"

export const metadata: Metadata = {
  title: {
    template: "%s | MyForm",
    default: "MyForm",
  },
}

const Rowdies = localFont({
  src: "../../public/assets/fonts/RowdiesRegular.woff2",
  display: "swap",
  variable: "--rowdies",
})

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="fr" className={`${Rowdies.variable}`}>
      <body>
        <KumaRegistry>
          <Navbar />
          {children}
        </KumaRegistry>
      </body>
    </html>
  )
}
