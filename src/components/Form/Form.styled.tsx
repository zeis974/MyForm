import { styled } from "@kuma-ui/core"

export const Container = styled.div`
  max-width: t("sizes.maxWidth");
  margin: 0 auto;
`

export const Hero = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  margin-bottom: 20px;

  @media screen and (width < t("breakpoints.md")) {
    flex-direction: column;
    margin: 30px 10px 20px;
  }
`

export const Title = styled.span`
  font-family: var(--rowdies), serif;
  font-size: clamp(2.5rem, 5vw, 2.5rem);
  text-transform: uppercase;
  color: white;
`

export const Paragraph = styled.p`
  max-width: 500px;
  padding: 20px 0;
  margin-left: 5px;
`

export const CardContainer = styled.section`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  padding: 10px;

  grid-template-areas:
    "pinned pinned pinned pinned"
    ". . . .";

  @media screen and (width < t("breakpoints.md")) {
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-template-areas:
      "pinned"
      ".";
  }
`
