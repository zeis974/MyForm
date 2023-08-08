import style from "@/styles/FormHeader.module.css";

import { FrontMatter } from "@/types/frontMatter";

import Tags from "@/components/Tags";

type FrontMatterProps = {
 frontMatter: FrontMatter;
};

export default function FormHeader({ frontMatter }: FrontMatterProps) {
 return (
  <div className={style.container__header}>
   <h1>{frontMatter.title}</h1>
   <Tags subject={frontMatter.subject} tags={frontMatter.tags} />
   <p>{frontMatter.description}</p>
  </div>
 );
}
