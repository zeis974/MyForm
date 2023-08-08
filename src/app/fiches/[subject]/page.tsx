export const dynamicParams = false;

import { Metadata, ResolvingMetadata } from "next";

import { getAllPosts } from "@/utils/mdxUtils";

import Form from "@/components/Form";

interface Props {
 params: { subject: string };
}

export async function generateMetadata(
 { params }: Props,
 parent: ResolvingMetadata
): Promise<Metadata> {
 return {
  title: params.subject.charAt(0).toUpperCase() + params.subject.slice(1),
 };
}

export default async function FormHandler({ params: { subject } }: Props) {
 const posts = await getPosts();

 return <Form subject={subject} posts={posts} />;
}

async function getPosts() {
 const posts = getAllPosts([
  "title",
  "subject",
  "slug",
  "date",
  "description",
  "thumbnail",
  "tags",
 ]);

 return posts;
}

export async function generateStaticParams() {
 return [
  { subject: "maths" },
  { subject: "physique-chimie" },
  { subject: "i2d" },
 ];
}
