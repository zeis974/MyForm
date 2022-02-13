import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

import Line from "../svg/Line";

export default function CustomLink(props) {
 const [hover, setHover] = useState(false);
 //  const router = useRouter();
 //  var isPage = false;

 //  if (router.asPath.includes("fiches")) {
 //   let pagePath = router.asPath.replace("/fiches/", "");

 //   if (pagePath == props.text.toLowerCase()) {
 //   }
 //  }

 return (
  <Link href={"/" + props.path}>
   <a onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
    {props.text}
    <Line hover={hover} />
   </a>
  </Link>
 );
}
