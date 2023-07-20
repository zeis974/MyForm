import Link from "next/link";
import { useState } from "react";

import Line from "@/components/svg/Line";

export default function CustomLink(props) {
 const [hover, setHover] = useState(false);
 return (
  <Link
   href={`/${props.path}`}
   onMouseEnter={() => setHover(true)}
   onMouseLeave={() => setHover(false)}
  >
   {props.text}
   <Line hover={hover} />
  </Link>
 );
}
