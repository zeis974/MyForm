"use client"

import { Checkbox, Container, Input, Line } from "./FormSearch.styled"

import type { ChangeEvent } from "react"
import { useFormStore } from "@/stores/FormStores"

export default function FormSearch() {
  const setSearch = useFormStore((s) => s.setSearch)
  const { setIsSpeciality, isSpeciality } = useFormStore()

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <Container>
      <Checkbox>
        <label htmlFor="spé">Spécialité</label>
        <input type="checkbox" id="spé" name="spé" onClick={() => setIsSpeciality(!isSpeciality)
        } />
      </Checkbox>
      <Line />
      <Input
        placeholder="Rechercher"
        type="text"
        onChange={handleInputChange}
      />
    </Container>
  )
}
