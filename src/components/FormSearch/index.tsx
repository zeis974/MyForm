"use client"

import { Checkbox, Container, Input, Line } from "./FormSearch.styled"

import type { ChangeEvent } from "react"
import { useFormStore } from "@/stores/FormStores"

export default function FormSearch() {
  const setSearch = useFormStore((state) => state.setSearch)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <Container>
      <Checkbox>
        <label htmlFor="spé">Spécialité</label>
        <input type="checkbox" id="spé" name="spé" />
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
