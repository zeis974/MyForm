import { serialize } from "next-mdx-remote/serialize";
import { useEffect } from "react";
import { MDXRemote } from "next-mdx-remote";
import { AppContext } from "../../../../context/AppContext";
import { getPost, getAllPosts } from "../../../../utils/mdxUtils";

import Prerequisites from "@/components/Prerequisites";
import Stacks from "@/components/Stacks";

const components = {
 Prerequisites,
 Stacks,
};

export default function PostPage({ source, frontMatter }) {
 const { setPrerequisites, setStacks, subject } = AppContext();

 useEffect(() => {
  setPrerequisites(frontMatter.prerequisites);
  setStacks(frontMatter.stacks);
 }, [
  setPrerequisites,
  setStacks,
  frontMatter.prerequisites,
  frontMatter.stacks,
 ]);

 return (
  <div>
   <article className="prose prose-green">
    <div className="mb-4"></div>

    <h1>{frontMatter.title}</h1>

    <p>{frontMatter.description}</p>

    <MDXRemote components={components} {...source} />
   </article>
  </div>
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
 const posts = getAllPosts(["slug"]);

 const paths = posts.map((post) => ({
  params: {
   subject: "maths",
   slug: post.slug,
  },
 }));

 return {
  paths,
  fallback: false,
 };
};
