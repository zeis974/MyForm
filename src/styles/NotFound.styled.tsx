import { styled } from "@kuma-ui/core"

export const Container = styled.div`
  max-width: t("sizes.maxWidth");
  height: calc(100dvh - t("sizes.navHeight"));
  margin: 0 auto;
  padding: 0 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    height: clamp(300px, 50vw, 500px);
  }

  @media screen and (width < t("breakpoints.md")) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
  }
`
export const Content = styled.div`
  flex-direction: column;

  & > h2 {
    font-family: var(--rowdies), serif;
    color: white;
    font-size: clamp(2.5em, 5vw, 2.75em);
  }

  & p {
    font-size: 1em;
    max-width: 600px;
    margin: 20px 0;
    line-height: 25px;
  }

  & > div {
    display: flex;
    gap: 10px;
  }

  @media screen and (width < t("breakpoints.md")) {
    & > div {
      flex-direction: column;
    }
  }
`
