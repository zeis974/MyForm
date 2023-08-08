import style from "@/styles/FancyButton.module.css";

import Link from "next/link";

interface Props {
 name: string;
 path: string;
}

export default function FancyButton({ name, path }: Props) {
 return (
  <Link href={path} className={style.pushable}>
   <span className={style.shadow}></span>
   {/* <span className={style.edge}></span> */}
   <span className={style.front}>{name}</span>
  </Link>
 );
}
