"use client";

import style from "@/styles/Form.module.css";

import { useState, useMemo } from "react";

import { Post } from "@/utils/mdxUtils";

import FormSearch from "@/components/FormSearch";
import FormPinned from "@/components/FormPinned";
import FormCard from "@/components/FormCard";

interface Props {
 posts: Post[];
 subject: string;
}

export default function Form({ posts, subject }: Props) {
 const [searchField, setSearchField] = useState("");
 const [filterSpé, setFilterSpé] = useState(false);

 const filteredForms = useMemo(() => {
  return posts.filter((form) => {
   const isMatchingSubject = form.subject.toLowerCase() === subject;
   const isMatchingField = form.title
    .toLowerCase()
    .includes(searchField.toLowerCase());
   const isMatchingTags = filterSpé ? form.tags.includes("spécialité") : true;
   return isMatchingSubject && isMatchingField && isMatchingTags;
  });
 }, [posts, subject, searchField, filterSpé]);

 const handleSearchField = (data: string) => {
  setSearchField(data);
 };

 const handleSpeCheck = (data: boolean) => {
  setFilterSpé(data);
 };

 return (
  <div className={style.container}>
   <div className={style.container__hero}>
    <div>
     <span className={style.container__title}>{subject}</span>
     <p className={style.container__p}>
      Des fiches sur tous les cours{" "}
      {subject === "i2d" ? `d'${subject}` : `de ${subject}`}, chaque fiche
      possède des exercices corrigés et détaillés pour vous permettre de
      progresser
     </p>
    </div>
    <div className={style.container__illustration} data-illustration={subject}></div>
   </div>
   <div className={style.container__navbar}>
    <FormSearch
     placeholder="Rechercher"
     handleSearchField={handleSearchField}
     handleSpeCheck={handleSpeCheck}
    />
   </div>
   <section className={style.container__card}>
    <FormPinned forms={posts} />
    {filteredForms.map((form) => (
     <FormCard key={form.slug} {...form} />
    ))}
   </section>
  </div>
 );
}
