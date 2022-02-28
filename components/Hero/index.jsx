import style from "../../styles/Hero.module.css";

import Link from "next/link";

import SearchIllustration from "../svg/SearchIllustration";
import HeroIllustration from "../svg/HeroIllustration";
import FormIcons from "../svg/FormIcons";

export default function Hero() {
 return (
  <div className={style.hero}>
   <div className={style.hero__content}>
    <h1>Des fiches en ligne modulaire sur toutes les matières</h1>
    <p>
     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi officiis
     veniam corrupti consectetur odit reiciendis ipsam ratione qui. Quae,
     aliquid.
    </p>
    <div className={style.hero__buttons}>
     <Link href="/fiches">
      <a>Les fiches</a>
     </Link>
     <div>
      <SearchIllustration />
      <Link href="/faq">
       <a>
        <span>MyForm c&apos;est quoi ? </span>
       </a>
      </Link>
     </div>
    </div>
    <div className={style.hero__stats}>
     <div>
      <FormIcons color="#8a97e2" />
      <span>NaN</span>
      <span>Matières</span>
     </div>
     <div>
      <FormIcons color="#8a97e2" />
      <span>NaN</span>
      <span>Fiches</span>
     </div>
     <div>
      <FormIcons color="#8a97e2" />
      <span>NaN</span>
      <span>Exercices</span>
     </div>
    </div>
   </div>
   <div>
    <HeroIllustration />
   </div>
  </div>
 );
}
