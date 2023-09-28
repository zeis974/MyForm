export const dynamicParams = false;

import style from "@/styles/FormPage.module.css";

import { MDXRemote } from "next-mdx-remote/rsc";
import { Metadata } from "next";
import { PropsWithChildren } from "react";

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

const component = {
 Custom: ({ children }: PropsWithChildren) => <h1>{children}</h1>,
};

export default async function FormPage({ params: { slug } }: Params) {
 const { source, frontMatter } = await getPostData(slug);

 return (
  <article className={style.container}>
   <FormHeader frontMatter={frontMatter} />
   <MDXRemote source={source} components={{ ...component }} />
  </article>
 );
}

async function getPostData(slug: string) {
 const { content, data } = getPost(slug);

 return {
  source: content,
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
