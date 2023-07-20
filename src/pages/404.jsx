import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import style from "@/styles/404.module.css";

import _404Illustration from "@/components/svg/404Illustration";

export default function Custom404() {
 const router = useRouter();
 const [form, setForm] = useState("");

 useEffect(() => {
  let path = router.asPath;
  let formArr = ["maths", "physique", "i2d"];

  if (router.asPath.includes("/fiches")) {
   for (let i = 0; i < formArr.length; i++) {
    let el = path.includes(formArr[i]);

    if (el) {
     setForm(formArr[i]);
    }
   }
  }
 }, [router]);

 return (
  <>
   <Head>
    <title>Page introuvable | My Form</title>
   </Head>
   <div className={style.container}>
    <div className={style.container__text}>
     <span>TU ES PERDU ?</span>
     <p>
      On dirait que tu t&apos;es égaré. Tu sais ce qui peut aider quand on est
      perdu ? Une bobine de laine. Tiens, assieds-toi, on travaille dur ici pour
      apprendre. Ah, tu as besoin d&apos;un peu de lecture ? Ceci
      t&apos;intéresseras peut-être :
     </p>
     <div>
      <Link href="/">Page d&apos;accueil</Link>
      {form && <Link href={`/fiches/${form}`}>Fiches de {form}</Link>}
     </div>
    </div>
    <div className={style.container__illustration}>
     <_404Illustration />
    </div>
   </div>
  </>
 );
}
