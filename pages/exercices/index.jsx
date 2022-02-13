import { HeroBackground } from "../../components";

import style from "../../styles/Exercises.module.css";

export default function Exercises() {
 return (
  <>
   <HeroBackground />
   <div className={style.container}>
    <span>Exercices</span>
   </div>
  </>
 );
}
