export type Subject = "maths" | "i2d" | "physique-chimie"

export type Tags =
  | "spécialité"
  | "i2d"
  | "chimie"
  | "physique"
  | "maths"
  | "générique"

export interface FrontMatter {
  title: string
  subject: Subject
  description: string
  tags: Tags[]
}

export interface Post extends FrontMatter {
  slug: string
  date: Date
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
