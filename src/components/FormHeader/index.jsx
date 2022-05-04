import style from "@/styles/FormHeader.module.css";

import Tags from "@/components/Tags";
import Head from "next/head";

export default function FormHeader({ frontMatter }) {
 return (
  <>
   <Head>
    <title>{frontMatter.title} | MyForm</title>
   </Head>
   <div className={style.container__header}>
    <h1>{frontMatter.title}</h1>
    <Tags tags={frontMatter.tags} dataPage="slug" />
    <p>{frontMatter.description}</p>
   </div>
  </>
 );
}
