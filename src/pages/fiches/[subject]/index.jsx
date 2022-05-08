import { useRouter } from "next/router";

import { getAllPosts } from "@/utils/mdxUtils";

import Form from "@/components/Form";

export default function FormHandler({ posts }) {
 const router = useRouter();
 const { subject } = router.query;

  return <Form subject={subject} posts={posts} />;
}

export const getStaticProps = async () => {
 const posts = getAllPosts(
  ["title", "subject", "slug", "date", "description", "thumbnail", "tags"],
  `_forms`
 );

 return { props: { posts } };
};

export async function getStaticPaths() {
 return {
  paths: [
   { params: { subject: "maths" } },
   { params: { subject: "physique-chimie" } },
   { params: { subject: "i2d" } },
  ],
  fallback: false,
 };
}
