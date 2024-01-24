export type Subject = "maths" | "i2d" | "physique-chimie"

export type Tags =
  | "spécialité"
  | "i2d"
  | "chimie"
  | "physique"
  | "maths"
  | "générique"

export interface Post {
  title: string
  subject: Subject
  slug: string
  date: Date
  description: string
  tags: Tags[]
}

export interface SubjectTypes {
  subject: Subject
  tags: Tags[]
}

export interface SearchType {
  search: string
}

export interface FormPropsType {
  posts: Post[]
  subject: Subject
}
