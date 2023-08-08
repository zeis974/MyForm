import style from "@/styles/Tags.module.css";

import Link from "next/link";

interface Props {
 tags: string[];
 subject: string;
}

export default function Tags({ tags, subject }: Props) {
 return (
  <div className={style.tag__container}>
   {tags.map((tag) => {
    const isPhysical = tag.includes("chimie") || tag.includes("physique");
    const isSpé = tag.includes("spécialité");
    const isPinned = tag.includes("générique");

    if (tag.includes(subject) || isPhysical) {
     return (
      <Link
       href={isSpé ? "" : `/fiches/${subject}`}
       key={tag}
       className={style.tag}
       data-tag={tag}
      >
       {tag}
      </Link>
     );
    } else if (isPinned || isSpé) {
     return (
      <span className={style.tag} data-tag={tag} key={tag}>
       {tag}
      </span>
     );
    }

    return null;
   })}
  </div>
 );
}
