import { styled } from "@kuma-ui/core"

export const Container = styled("nav")`
  width: 100%;
  height: t("sizes.navHeight");
  max-width: t("sizes.maxWidth");
  margin: 0 auto;
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (width < t("breakpoints.md")) {
    position: sticky;
    top: 0;
    background: linear-gradient(
      90deg,
      rgb(131 143 255) 0%,
      rgb(153 163 255) 100%
    );
    box-shadow: 0 10px #8f9aff1f;
  }
`

export const Logo = styled.span`
  font-size: 2em;
  color: white;
  font-family: var(--rowdies);
`

export const NavLinks = styled.ul`
  display: flex;

  & a {
    color: white;
    font-weight: 500;
    margin: 0 15px;
    transition: color 150ms;

    &:hover {
      color: #6170f9;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (width < t("breakpoints.md")) {
    display: none;

    &[data-open="true"] {
      display: flex;
      flex-direction: column;
      justify-content: center;
      animation: fadeIn 300ms;
      position: absolute;
      width: 80%;
      height: 100vh;
      background: white;
      top: 0;
      right: 0;

      & > li {
        background-color: #3498db;
        margin: 5px;
        padding: 10px;
        border-radius: 5px;
      }

      & a {
        display: block;
      }
    }
  }
`

export const Burger = styled.button`
display: none;
visibility: hidden;

@media screen and (width < t("breakpoints.md")) {
  display: block;
  visibility: visible;
  pointer-events: all;

  border: none;
  background: none;
}
`

export const FeatureBtn = styled.span`
  font-weight: 500;
  background: white;
  padding: 5px 10px;
  border-radius: 8px;

  & > a {
  display: flex;
  align-items: center;
  gap: 10px;
}

@media screen and (width < t("breakpoints.md")) {
  display: none;
  visibility: hidden;
}
`
