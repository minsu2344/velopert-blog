import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "./Buttons";
import Responsive from "./Responsive";

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

// Responsive 컴포넌트 속성에 스타일을 추가해서 새로운 컴포넌트 생성

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between; // 자식 엘리먼트 사이의 여백을 최대로 설정

  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right {
    display: flex;
    align-items: center;
  }
`;

// 헤더가 fixed로 되어있어 페이지의 콘텐츠가 4rem 아래로 나타나도록 해주는 컴포넌트

const Spacer = styled.div`
  height: 4rem;
`;

const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
`

export default function Header({user}) {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link to="/" className="logo">
            REACTERS
          </Link>
          {user ? (
            <div className="right">
              <UserInfo>{user.username}</UserInfo>
              <Button>로그아웃</Button>
            </div>
          ) : (
            <div className="right">
              <Button to='/login'>로그인</Button>
            </div>
          )}
          <div className="right">
            <Button to="/login">로그인</Button>
          </div>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  )
}