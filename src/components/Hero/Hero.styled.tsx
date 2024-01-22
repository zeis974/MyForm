import { styled } from "@kuma-ui/core"

export const Container = styled.div`
  width: 100%;
  max-width: t("sizes.maxWidth");
  display: flex;
  justify-content: space-evenly;
  padding: 100px 10px;
  margin: 0 auto;

  @media screen and (width < t("breakpoints.md")) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`

export const Content = styled.div`
  max-width: 650px;

  & h1 {
    color: white;
    line-height: 1.1;
    font-size: clamp(1.6em, 5vw, 2.5em);
  }

  & p {
    color: white;
    max-width: 600px;
    padding: 20px 5px;
  }
`

export const HeroButton = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;

  & > a {
    color: white;
    text-decoration: underline;
  }
`

export const Stats = styled.div`
  margin-top: 3.75em;
  display: flex;

  & div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background: white;
    border: 1px solid t("colors.blue");
    border-radius: 10px;
    margin: 5px;
    width: calc(100% / 3);
    height: 100px;

    & > span:first-child {
      font: 500 1.5em var(--rowdies);
    }
  }

  @media screen and (width < t("breakpoints.md")) {
    padding-top: 0;
  }
`

export const HeroIllustration = styled.div`
  background: url("/assets/HeroIllustration.svg") center no-repeat;
  background-size: contain;
  width: 400px;
  height: 300px;

  @media screen and (width < t("breakpoints.md")) {
    margin: 0 auto;
    width: 300px;
  }
`
