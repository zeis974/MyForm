import style from "@/styles/Tags.module.css";

import Link from "next/link";
import { useRouter } from "next/router";

export default function Tags(props) {
 const router = useRouter();
 const { subject } = router.query;

 return (
  <div className={style.container} data-page={props.dataPage}>
   {props.tags.map((tag) => {
    let isSpé = tag.includes("spécialité");
    let isPinned = tag.includes("générique");

    if (tag.includes(subject)) {
     return (
      <Link
       href={isSpé ? "" : `/fiches/${tag}`}
       data-page={"slug" ? router.query.slug != undefined : null}
       key={tag}
      >
       <a className={style.tag} data-tag={tag}>
        {tag}
       </a>
      </Link>
     );
    } else if (isPinned || isSpé) {
     return (
      <span
       className={style.tag}
       data-tag={tag}
       data-page={"slug" ? router.query.slug != undefined : null}
       key={tag}
      >
       {tag}
      </span>
     );
    }
   })}
  </div>
 );
}
