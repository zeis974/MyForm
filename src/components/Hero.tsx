import style from "@/styles/Hero.module.css";

import Link from "next/link";

import SearchIllustration from "@/components/SearchIllustration";

import data from "../../dataFile.json";

export default function Hero() {
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
       <span>MyForm c&apos;est quoi ? </span>
      </Link>
     </div>
    </div>
    <div className={style.hero__stats}>
     <div>
      <span>{data.materials}</span>
      <span>Matières</span>
     </div>
     <div>
      <span>{data.forms}</span>
      <span>Fiches</span>
     </div>
     <div>
      <span>{data.exercises}</span>
      <span>Exercices</span>
     </div>
    </div>
   </div>
   <div className={style.hero__illustrations}></div>
  </div>
 );
}
