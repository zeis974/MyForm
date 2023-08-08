"use client";

import style from "@/styles/NotFound.module.css";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Metadata } from "next";

import FancyButton from "@/components/FancyButton";

export const metadata: Metadata = {
 title: "404 - Page Introuvable | MyForm",
};

export async function generateMetadata(props: any) {
 return {
  title: `Animal id ${props.params.slug} not found`,
  description: `There is no animal with id "${props.params.slug}"`,
 };
}

export default function NotFound() {
 const pathname = usePathname();
 const [form, setForm] = useState("");

 useEffect(() => {
  let formArr = ["maths", "physique-chimie", "i2d"];

  if (pathname.includes("/fiches")) {
   formArr.forEach((form) => {
    if (pathname.includes(form)) {
     setForm(form);
    }
   });
  }
 }, [pathname]);

 return (
  <div className={style.container}>
   <div className={style.container__text}>
    <span>TU ES PERDU ?</span>
    <p>
     On dirait que tu t&apos;es égaré. Tu sais ce qui peut aider quand on est
     perdu ? Une bobine de laine. Tiens, assieds-toi, on travaille dur ici pour
     apprendre. Ah, tu as besoin d&apos;un peu de lecture ? Ceci
     t&apos;intéresseras peut-être :
    </p>
    <div className={style.container__btn}>
     <FancyButton name="Page d'accueil" path="/" />
     {form && (
      <FancyButton name={`Fiche de ${form}`} path={`/fiches/${form}`} />
     )}
    </div>
   </div>
   <div className={style.container__illustration}></div>
  </div>
 );
}
