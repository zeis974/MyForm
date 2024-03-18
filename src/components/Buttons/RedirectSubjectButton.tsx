"use client"

import { usePathname } from "next/navigation"

import { FancyButton } from "@/components/Buttons"

export default function RedirectSubjectButton() {
  const pathname = usePathname()
  const isMatchingKnownSubject = pathname.match(
    /\/fiches\/(maths|physique-chimie|i2d)/
  )

  if (isMatchingKnownSubject) {
    return (
      <FancyButton
        name={`Fiche de ${isMatchingKnownSubject[1]}`}
        path={`${isMatchingKnownSubject[0]}`}
      />
    )
  }

  return null
}
