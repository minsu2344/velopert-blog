import styled from "styled-components";
import palette from "../../lib/styles/palette";

const StyleButton = styled.button`
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: ${palette.gray[8]};
  &:hover {
    background: ${palette.gray[6]};
  }
`

export default function Button(props) {
  return <StyleButton {...props} />
}