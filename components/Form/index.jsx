import { AppContext } from "context/AppContext";
import Link from "next/link";
import style from "../../styles/Form.module.css";

import MathsIllustration from "../svg/MathsIlllustration";

export default function Form(props) {
 const { subject } = AppContext();
 const data = props.posts;

 return (
  <div className={style.container}>
   <div className={style.container__hero}>
    <div>
     <span className={style.container__title}>{props.subject}</span>
     <p className={style.container__p}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, ducimus.
      Qui saepe delectus a inventore assumenda. Porro sunt, animi sit
      necessitatibus suscipit numquam dolorum, commodi illum dolores facilis
      tempore dolore!
     </p>
    </div>
    <div>
     <MathsIllustration />
    </div>
   </div>
   <div className={style.container__navbar}></div>

   <section className={style.container__card}>
    {data
     .filter((data) => {
      if (data.subject.toLowerCase() === subject) {
       return data;
      }
     })
     .map((post) => (
      <Link href={`/fiches/${props.subject}/${post.slug}`} key={post.slug}>
       <a>
        <div key={post.slug}>
         <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
         <p>{post.description}</p>
         {post.date}
        </div>
       </a>
      </Link>
     ))}
   </section>
  </div>
 );
}
