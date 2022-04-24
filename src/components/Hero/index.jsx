import style from "../../styles/Hero.module.css";

import Link from "next/link";
import { useEffect, useState } from "react";

import SearchIllustration from "@/components/svg/SearchIllustration";
import HeroIllustration from "@/components/svg/HeroIllustration";
import FormIcons from "@/components/svg/FormIcons";

export default function Hero() {
 const [data, setData] = useState({});

 useEffect(() => {
  const fetchData = async () => {
   const res = await fetch("/api/getFile");
   const data = await res.json();
   setData(data);
  };
  fetchData();
 });

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
      <span>{data.materials}</span>
      <span>Matières</span>
     </div>
     <div>
      <FormIcons color="#8a97e2" />
      <span>NaN</span>
      <span>{data.forms}</span>
      <span>Fiches</span>
     </div>
     <div>
      <FormIcons color="#8a97e2" />
      <span>NaN</span>
      <span>{data.exercises}</span>
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
