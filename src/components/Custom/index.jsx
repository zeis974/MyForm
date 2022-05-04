import style from "@/styles/Custom.module.css";

export default function Custom(props) {
 if (props.links) {
  return <h2 className={style.h2}>{props.children}</h2>;
 }
}
