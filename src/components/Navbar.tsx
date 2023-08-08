"use client";

import style from "@/styles/Navbar.module.css";

import Link from "next/link";
import { useState } from "react";


import GitHubIcon from "@/components/icons/GitHubIcon";

interface NavLink {
 to: string;
 text: string;
}

export default function Navbar() {
 const [open, setOpen] = useState(false);

 const links: NavLink[] = [
  { to: "maths", text: "Maths" },
  { to: "physique-chimie", text: "Physique-Chimie" },
  { to: "i2d", text: "I2D" },
 ];

 const handleOutsideClick = () => {
  setOpen(false);
 };

 return (
  <nav className={style.nav} data-open="false">
   <span>
    <Link href="/" className={style.nav__logo}>
     MyForm
    </Link>
   </span>
   <button
    className={style.burger__icon}
    data-open={open}
    onClick={() => setOpen(!open)}
    tabIndex={0}
   >
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
   </button>
    <div className={style.nav__links}>
     <ul>
      {links.map((link, index) => (
       <li key={index}>
        <Link href={`/fiches/${link.to}`}>{link.text}</Link>
       </li>
      ))}
     </ul>
    </div>
   <Link
    href="https://github.com/zeis974/MyForm"
    className={style.nav__featureBtn}
   >
    <GitHubIcon />
    GitHub
   </Link>
  </nav>
 );
}
