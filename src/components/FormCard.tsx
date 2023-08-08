import style from "@/styles/FormCard.module.css";

import Link from "next/link";

import Tags from "@/components/Tags";

interface Props {
 subject: string;
 slug: string;
 title: string;
 tags: string[];
}

export default function FormCard({ subject, slug, title, tags }: Props) {
 let _subject = subject.toLowerCase();
 return (
  <div
   className={style.container}
   data-pinned={tags.includes("générique") && ""}
  >
   <Link href={`/fiches/${_subject}/${slug}`} prefetch={false}>
    <h2>{title}</h2>
   </Link>
   <Tags tags={tags} subject={_subject}/>
  </div>
 );
}
