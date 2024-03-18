import { create } from "zustand"

interface FormState {
  search: string
  setSearch: (data: string) => void
  isSpeciality: boolean
  setIsSpeciality: (data: boolean) => void
}

export const useFormStore = create<FormState>()((set) => ({
  search: "",
  setSearch: (data) => set(() => ({ search: data })),
  isSpeciality: false,
  setIsSpeciality: (bool) => set(() => ({ isSpeciality: bool })),
}))
