import { CardContainer, Container, Hero, Paragraph, Title } from "./Form.styled"

import type { FormPropsType, Subject } from "@/types"

import FormsFilters from "@/functions/formsFilters"

import {
  MathsIllustration,
  I2dIllustration,
  PhysiqueIllustration,
} from "@/components/Illustration"

import FormSearch from "@/components/FormSearch"

const IllustrationComponents: Record<Subject, JSX.Element> = {
  maths: <MathsIllustration />,
  i2d: <I2dIllustration />,
  "physique-chimie": <PhysiqueIllustration />,
}

export default function Form({ subject, posts }: FormPropsType) {
  return (
    <Container>
      <Hero>
        <div>
          <Title>{subject}</Title>
          <Paragraph>
            Des fiches sur tous les cours{" "}
            {subject === "i2d" ? `d'${subject}` : `de ${subject}`}, chaque fiche
            possède des exercices corrigés et détaillés pour vous permettre de
            progresser
          </Paragraph>
        </div>
        {IllustrationComponents[subject as keyof typeof IllustrationComponents]}
      </Hero>
      <FormSearch />
      <CardContainer>
        <FormsFilters posts={posts} subject={subject} />
      </CardContainer>
    </Container>
  )
}
