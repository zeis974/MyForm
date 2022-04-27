import style from "@/styles/Form.module.css";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

import Illustration from "@/components/svg/Illustrations";
import Tags from "@/components/Tags";
import FormSearch from "@/components/FormSearch";

export default function Form(props) {
 const data = props.posts;
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

 return (
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
    {data
     .filter((data) => {
      if (search.tags) {
       if (
        data.subject.toLowerCase() === subject &&
        data.title.toLowerCase().includes(search.field.toLowerCase()) &&
        data.tags.includes("spécialité") == true
       ) {
        return data;
       }
      } else if (
       data.subject.toLowerCase() === subject &&
       data.title.toLowerCase().includes(search.field.toLowerCase())
      ) {
       return data;
      }
     })
     .map((post) => (
      <div key={post.slug} className={style.card}>
       <Link href={`/fiches/${props.subject}/${post.slug}`} prefetch={false}>
        <a>
         <h2>{post.title}</h2>
        </a>
       </Link>
       <Tags tags={post.tags} />
      </div>
     ))}
   </section>
  </div>
 );
}
