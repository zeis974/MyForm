import {
  Container,
  Content,
  HeroButton,
  HeroIllustration,
  Stats,
} from "./Hero.styled"

import Link from "next/link"

import { SearchIllustration } from "@/components/Illustration"

import data from "../../../dataFile.json"

export default function Hero() {
  return (
    <Container data-bg>
      <Content>
        <h1>Des fiches en ligne modulaire sur toutes les matières</h1>
        <p>
          Des fiches, exercices, sujets sur différentes matières, le tout
          expliqué avec simplicité. C&apos;est actuellement le rôle de MyForm, à
          vos fiches !
        </p>
        <HeroButton>
          <SearchIllustration />
          <Link href="/faq">MyForm c&apos;est quoi ?</Link>
        </HeroButton>
        <Stats>
          <div>
            <span>{data.materials}</span>
            <span>Matières</span>
          </div>
          <div>
            <span>{data.forms}</span>
            <span>Fiches</span>
          </div>
          <div>
            <span>{data.exercises}</span>
            <span>Exercices</span>
          </div>
        </Stats>
      </Content>
      <HeroIllustration />
    </Container>
  )
}
