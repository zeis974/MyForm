export const dynamicParams = false

import { Metadata } from "next"
import { Subject } from "@/types"

import { getAllPosts } from "@/utils/mdxUtils"

import Form from "@/components/Form"

interface Props {
  params: { subject: Subject }
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  return {
    title: params.subject.charAt(0).toUpperCase() + params.subject.slice(1),
  }
}

export default async function FormHandler({ params }: Props) {
  const posts = await getPosts()

  return <Form subject={params.subject} posts={posts} />
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
  ])

  return posts
}

export async function generateStaticParams() {
  return [
    { subject: "maths" },
    { subject: "physique-chimie" },
    { subject: "i2d" },
  ]
}
