import style from "@/styles/Form.module.css";

import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import Illustration from "@/components/svg/Illustrations";
import FormSearch from "@/components/FormSearch";
import FormPinned from "@/components/FormPinned";
import FormCard from "@/components/FormCard";

export default function Form(props) {
 const forms = props.posts;
 const router = useRouter();
 const { subject } = router.query;
 const [search, setSearch] = useState({
  field: "",
  tags: "",
 });

 const handleSearchField = (data) => {
  setSearch({
   field: data,
   tags: search.tags,
  });
 };

 const handleSearchTags = (data) => {
  setSearch({
   field: search.field,
   tags: data,
  });
 };

 let capitalizeSubject = subject.charAt(0).toUpperCase() + subject.slice(1);

 return (
  <>
   <Head>
    <title>{capitalizeSubject} | MyForm</title>
   </Head>
   <div className={style.container}>
    <div className={style.container__hero}>
     <div>
      <span className={style.container__title}>{props.subject}</span>
      <p className={style.container__p}>
       Des fiches sur tous les cours de {subject}, chaque fiche possède des
       exercices corrigés et détaillés pour vous permettre de progresser
      </p>
     </div>
     <div className={style.container__illustration}>
      <Illustration subject={subject} />
     </div>
    </div>
    <div className={style.container__navbar}>
     <FormSearch
      placeholder="Rechercher"
      handleSearchField={handleSearchField}
      handleSearchTags={handleSearchTags}
     />
    </div>
    <section className={style.container__card}>
     <FormPinned forms={forms} />
     {forms
      .filter((form) => {
       if (search.tags) {
        if (
         form.subject.toLowerCase() === subject &&
         form.title.toLowerCase().includes(search.field.toLowerCase()) &&
         form.tags.includes("spécialité")
        ) {
         return form;
        }
       } else if (
        form.subject.toLowerCase() === subject &&
        form.title.toLowerCase().includes(search.field.toLowerCase())
       ) {
        return form;
       }
      })
      .map((form) => (
       <FormCard key={form.slug} {...form} />
      ))}
    </section>
   </div>
  </>
 );
}
