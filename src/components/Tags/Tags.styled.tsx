import { styled } from "@kuma-ui/core"

export const Container = styled.div`
  display: inline-flex;
  gap: 5px;
  margin: 7px 0;
`

export const Tag = styled.span`
  position: relative;
  z-index: 2;
  text-transform: capitalize;
  font-size: 0.8em;
  font-weight: 600;
  padding: 3px;
  border-radius: 5px;
  cursor: default;

  &[data-tag="maths"] {
    color: #116e5c;
    background: #1abc9c4f;
  }

  &[data-tag="physique"] {
    color: #866137;
    background: #ffbe764f;
  }
`
