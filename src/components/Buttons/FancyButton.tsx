import { styled } from "@kuma-ui/core"

import Link from "next/link"

export default function FancyButton({
  name,
  path,
}: {
  name: string
  path: string
}) {
  return (
    <Container>
      <Link href={path}>
        <Shadow />
        <Edge />
        <span>{name}</span>
      </Link>
    </Container>
  )
}

const Container = styled.div`
  & a {
    text-align: center;
    position: relative;
    cursor: pointer;
    transition: filter 250ms;

    &:focus:not(:focus-visible) {
      outline: none;
    }

    &:hover {
      filter: brightness(110%);

      & span:last-child {
        transform: translateY(-6px);
        transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
      }

      /* Shadow */
      & span:first-child {
        transform: translateY(4px);
        transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
      }
    }

    &:active {
      & span:last-of-type {
        transform: translateY(-2px);
        transition: transform 34ms;
      }

      /* Shadow */
      & span:first-child {
        transform: translateY(1px);
        transition: transform 34ms;
      }
    }

    & span:last-of-type {
      display: block;
      position: relative;
      padding: 12px 42px;
      border-radius: 12px;
      font-size: 1em;
      color: white;
      background: hsl(345deg 100% 47%);
      transform: translateY(-4px);
      transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
    }
  }
`

const Shadow = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: hsl(0deg 0% 0% / 0.25);
  transform: translateY(2px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
`

const Edge = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: linear-gradient(
    to left,
    hsl(340deg 100% 16%) 0%,
    hsl(340deg 100% 32%) 8%,
    hsl(340deg 100% 32%) 92%,
    hsl(340deg 100% 16%) 100%
  );
`
