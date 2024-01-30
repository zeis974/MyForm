import { Container, Content } from "@/styles/NotFound.styled"

import type { Metadata } from "next"

import { RedirectSubjectButton, FancyButton } from "@/components/Buttons"
import { NotFoundIllustration } from "@/components/Illustration"

export const metadata: Metadata = {
  title: "404 - Page Introuvable",
}

export default function NotFound() {
  return (
    <Container>
      <Content>
        <h2>TU ES PERDU ?</h2>
        <p>
          On dirait que tu t&apos;es égaré. Tu sais ce qui peut aider quand on
          est perdu ? Une bobine de laine. Tiens, assieds-toi, on travaille dur
          ici pour apprendre. Ah, tu as besoin d&apos;un peu de lecture ? Ceci
          t&apos;intéresseras peut-être :
        </p>
        <div>
          <FancyButton name="Page d'accueil" path="/" />
          <RedirectSubjectButton />
        </div>
      </Content>
      <NotFoundIllustration />
    </Container>
  )
}
