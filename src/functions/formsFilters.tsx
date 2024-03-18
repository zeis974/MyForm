"use client"

import type { FormPropsType } from "@/types"

import { useFormStore } from "@/stores/FormStores"
import FormCard from "@/components/FormCard"

export default function FormsFilters({ posts, subject }: FormPropsType) {
  const search = useFormStore((s) => s.search)
  const isSpeciality = useFormStore((s) => s.isSpeciality)

  const filteredForms = posts.filter((form) => {
    const isMatchingField = form.title
      .toLowerCase()
      .includes(search.toLowerCase())

    const isMatchingSpeciality = isSpeciality ? form.tags.includes("spécialité") : true
    const isMatchingSubject = form.subject.toLowerCase() === subject

    return isMatchingField && isMatchingSubject && isMatchingSpeciality
  })

  return filteredForms.map((form) => <FormCard key={form.slug} {...form} />)
}
