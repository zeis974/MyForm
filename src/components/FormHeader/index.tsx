import { Container } from "./FormHeader.styled"
import type { FrontMatter } from "@/types"

import Tags from "@/components/Tags"

export default function FormHeader({ title, description, tags }: FrontMatter) {

  return (
    <Container>
      <h1>{title}</h1>
      <Tags tags={tags} />
      <p>{description}</p>
    </Container>
  )
}
