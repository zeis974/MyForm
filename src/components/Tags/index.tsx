import { Container, Tag } from "./Tags.styled"

import type { Tags as TagsTypes } from "@/types"

export default function Tags({ tags }: { tags: TagsTypes[] }) {
  return (
    <Container>
      {tags.map((tag: TagsTypes) => (
        <Tag key={tag} data-tag={tag}>
          {tag}
        </Tag>
      ))}
    </Container>
  )
}
