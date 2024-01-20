"use client"

import type { FormPropsType } from "@/types"

import { useFormStore } from "@/stores/FormStores"
import FormCard from "@/components/FormCard"

export default function FormsFilters({ posts, subject }: FormPropsType) {
  const search = useFormStore((state) => state.search)

  const filteredForms = posts.filter((form) => {
    const isMatchingField = form.title
      .toLowerCase()
      .includes(search.toLowerCase())

    const isMatchingSubject = form.subject.toLowerCase() === subject
    return isMatchingField && isMatchingSubject
  })

  return filteredForms.map((form) => <FormCard key={form.slug} {...form} />)
}
