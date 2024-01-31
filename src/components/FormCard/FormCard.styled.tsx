import { styled } from "@kuma-ui/core"

export const Container = styled.div`
  border: 1px solid rgb(160, 160, 160);
  background: white;
  border-radius: 8px;
  transition: border 150ms;
  height: fit-content;

  &:hover {
    border: 1px solid rgb(115, 185, 255);
    box-shadow: 0 0 7px 3px #74b9ff2e;
  }

  & a {
    width: 100%;
    padding: 5px;
    display: inline-block;
  }
`
