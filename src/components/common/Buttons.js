import styled, {css} from "styled-components";
import { useNavigate } from "react-router-dom";
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

  ${props => props.fullWidth &&
  css`
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    width: 100%;
    font-size: 1.125rem;
  `}

  ${props => props.cyan &&
  css`
    background: ${palette.cyan[5]};
    &:hover {
      background: ${palette.cyan[4]}
    }
  `}
`

export default function Button({to, history, ...rest}) {
  const navigate = useNavigate();
  function onClick(e) {
    // to가 있다면 다른 페이지 이동
    if(to) {
      navigate(to);
    }
    if(rest.onClick) {
      rest.onClick(e);
    }
  }
  return <StyleButton {...rest} onClick={onClick} />
}