export const dynamicParams = false;

import style from "@/styles/FormPage.module.css";

import { MDXRemote } from "next-mdx-remote/rsc";
import { serialize } from "next-mdx-remote/serialize";
import { Metadata } from "next";

import { getPost, getAllPosts } from "@/utils/mdxUtils";
import { FrontMatter } from "@/types/frontMatter";

import FormHeader from "@/components/FormHeader";

type Params = {
 params: { slug: string };
};


export async function generateMetadata({
 params: { slug },
}: Params): Promise<Metadata> {
 return {
  title: slug.charAt(0).toUpperCase() + slug.slice(1),
 };
}

export default async function FormPage({ params: { slug } }: Params) {
 const { source, frontMatter } = await getPostData(slug);

 return (
  <article className={style.container}>
   <FormHeader frontMatter={frontMatter} />
   <MDXRemote source={source} />
  </article>
 );
}

async function getPostData(slug: string) {
 const { content, data } = getPost(slug);
 const mdxSource = await serialize(content, {
  scope: data,
 });

 return {
  source: mdxSource,
  frontMatter: data as FrontMatter,
 };
}

export async function generateStaticParams() {
 const posts = getAllPosts(["slug", "subject"]);

 const paths = posts.map((post) => ({
  subject: post.subject.toLowerCase(),
  slug: post.slug,
 }));

 return paths;
}
