import { Container } from "./FormCard.styled"
import type { Post } from "@/types"

import Link from "next/link"

import Tags from "@/components/Tags"

export default function FormCard({
  title,
  subject,
  slug,
  tags,
}: Post) {
  const lowercaseSubject = subject.toLowerCase()

  return (
    <Container>
      <Link href={`/fiches/${lowercaseSubject}/${slug}`} prefetch={false}>
        <h2>{title}</h2>
        <Tags tags={tags} />
      </Link>
    </Container>
  )
}
