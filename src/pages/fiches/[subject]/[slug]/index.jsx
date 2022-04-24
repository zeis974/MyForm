import style from "@/styles/FormPage.module.css";

import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import { getPost, getAllPosts } from "@/utils/mdxUtils";

import FormHeader from "@/components/FormHeader";

const components = {
 FormHeader,
};

export default function FormPage({ source, frontMatter }) {
 return (
  <article className={style.container}>
   <div className={style.container__header}>
    <h1>{frontMatter.title}</h1>
    <p>{frontMatter.description}</p>
   </div>
   <MDXRemote components={components} {...source} />
  </article>
 );
}

export const getStaticProps = async (context) => {
 const { slug } = context.params;
 const { content, data } = getPost(slug);
 const mdxSource = await serialize(content, { scope: data });
 return {
  props: {
   source: mdxSource,
   frontMatter: data,
  },
 };
};

export const getStaticPaths = () => {
 const posts = getAllPosts(["slug", "subject"]);

 const paths = posts.map((post) => ({
  params: {
   subject: post.subject.toLowerCase(),
   slug: post.slug,
  },
 }));

 return {
  paths,
  fallback: false,
 };
};
