import style from "../../styles/Navbar.module.css";

import Link from "next/link";

import CustomLink from "@/components/CustomLink";

export default function Navbar() {
 return (
  <nav className={style.nav}>
   <span>
    <Link href="/">
     <a className={style.nav__logo}>MyForm</a>
    </Link>
   </span>
   <div className={style.nav__links}>
    <ul>
     <li>
      <CustomLink text="Exercices" path="exercices" />
     </li>
     <li>
      <CustomLink text="Maths" path="fiches/maths" />
     </li>
     <li>
      <CustomLink text="Physique" path="fiches/physique" />
     </li>
     <li>
      <CustomLink text="I2D" path="fiches/i2d" />
     </li>
    </ul>
   </div>
   <div className={style.nav__featureBtn}>
    <a href="/fiches">Les fiches</a>
   </div>
   <button className={style.nav__menu}></button>
  </nav>
 );
}
