import { styled } from "@kuma-ui/core"

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: 60px;
  margin: 0 10px;
  background: white;
  border-radius: 8px;
  border: 1px solid t("colors.blue");
  overflow: hidden;
`

export const Line = styled.hr`
  width: 2px;
  height: 80%;
  background: gray;
  border: none;
`

export const Input = styled.input`
  width: 100%;
  height: 100%;
  position: relative;
  background: white;
  padding: 5px;
  border: none;
  outline: none;
`

export const Checkbox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  user-select: none;
  gap: 5px;
  margin: 10px;
  z-index: 1;

  & label {
    position: relative;
  }

  & label::after {
    content: "";
    position: absolute;
    width: 100px;
    height: 100px;
    background: transparent;
    z-index: -1;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
