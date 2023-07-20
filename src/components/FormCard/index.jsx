import style from "@/styles/FormCard.module.css";

import Link from "next/link";

import Tags from "@/components/Tags";

export default function FormCard(props) {
 return (
  <div
   className={style.container}
   pinned={props.tags.includes("générique") ? "" : null}
  >
   <Link
    href={`/fiches/${props.subject.toLowerCase()}/${props.slug}`}
    prefetch={false}
   >
     <h2>{props.title}</h2>
   </Link>
   <Tags tags={props.tags} />
  </div>
 );
}
