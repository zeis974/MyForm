import style from "../../../styles/FormHandler.module.css";

import { useRouter } from "next/router";
import { getAllPosts } from "utils/mdxUtils";

import Form from "@/components/Form";

export default function FormHandler({ posts }) {
 const availableForm = ["maths", "i2d", "physique"];
 const router = useRouter();

 const { subject } = router.query;

 if (availableForm.indexOf(subject) > -1) {
  return <Form subject={subject} posts={posts} />;
 } else {
  return <p>404</p>;
 }
}

export const getStaticProps = async () => {
 const posts = getAllPosts(
  ["title", "subject", "slug", "date", "description", "thumbnail"],
  `_forms`
 );

 return { props: { posts } };
};

export async function getStaticPaths(subject) {
 return {
  paths: [{ params: { subject: subject.toString() } }],
  fallback: true,
 };
}
