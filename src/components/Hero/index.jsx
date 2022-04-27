import style from "@/styles/Hero.module.css";

import Link from "next/link";
/* import { useEffect, useState } from "react";*/

import SearchIllustration from "@/components/svg/SearchIllustration";
import HeroIllustration from "@/components/svg/HeroIllustration";

export default function Hero() {
 {
  /* const [data, setData] = useState({});

 useEffect(() => {
  const fetchData = async () => {
   const res = await fetch("/api/getFile");
   const data = await res.json();
   setData(data);
  };
  fetchData();
 }, []); */
 }

 return (
  <div className={style.hero}>
   <div className={style.hero__content}>
    <h1>Des fiches en ligne modulaire sur toutes les matières</h1>
    <p>
     Des fiches, exercices, sujets sur différentes matières, le tout expliqué
     avec simplicité. C&apos;est actuellement le rôle de MyForm, à vos fiches !
    </p>
    <div className={style.hero__buttons}>
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
      <span>NaN</span>
      <span>Matières</span>
     </div>
     <div>
      <span>NaN</span>
      <span>Fiches</span>
     </div>
     <div>
      <span>NaN</span>
      <span>Exercices</span>
     </div>
    </div>
   </div>
   <div className={style.hero__illustrations}>
    <HeroIllustration />
   </div>
  </div>
 );
}
