"use client"

import { Container, Logo, FeatureBtn, NavLinks, Burger } from "./Navbar.styled"

import Link from "next/link"
import { useState } from "react"

import { GitHubIcon } from "@/components/icons"
import useOutsideClick from "@/hooks/useOutsideClick"

interface NavLink {
  path: string
  text: string
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links: NavLink[] = [
    { path: "maths", text: "Maths" },
    { path: "physique-chimie", text: "Physique-Chimie" },
    { path: "i2d", text: "I2D" },
  ]

  const handleClick = () => {
    setOpen(false)
  }

  const navRef = useOutsideClick(handleClick)

  return (
    <Container>
      <Logo>
        <Link href="/">MyForm {open}</Link>
      </Logo>
      <Burger onClick={() => setOpen((value) => !value)}>
        <svg
          width="36"
          height="22"
          viewBox="0 0 36 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="36" height="6" rx="2" fill="white" />
          <rect y="8" width="36" height="6" rx="2" fill="white" />
          <rect y="16" width="36" height="6" rx="2" fill="white" />
        </svg>
      </Burger>
      <NavLinks data-open={open} ref={navRef}>
        {links.map(({ text, path }) => (
          <li key={text.toLowerCase()}>
            <Link href={`/fiches/${path}`}>{text}</Link>
          </li>
        ))}
      </NavLinks>
      <FeatureBtn>
        <Link href="https://github.com/zeis974/MyForm" target="_blank">
          <GitHubIcon />
          GitHub
        </Link>
      </FeatureBtn>
    </Container>
  )
}
