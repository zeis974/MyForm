import Link from "next/link";
import { useState } from "react";

import Line from "../svg/Line";

export default function CustomLink(props) {
 const [hover, setHover] = useState(false);
 return (
  <Link href={`/${props.path}`}>
   <a onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
    {props.text}
    <Line hover={hover} />
   </a>
  </Link>
 );
}
