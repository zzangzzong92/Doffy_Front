import { FC } from "react";
import { styled } from "styled-components";

const Header: FC = () => {
  return (
    <HeaderContainer>
      <InnerHeader>
        <Logo></Logo>
        <NavBox>
          <div>
            <NavLink>문서모음</NavLink>
            <NavLink>커뮤니티</NavLink>
          </div>

          <NavBox></NavBox>
        </NavBox>
      </InnerHeader>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.section`
  position: relative;
  min-height: 100vh;
  border-bottom: 1px solid #d9d9d9;
`;

const InnerHeader = styled.header`
  width: 80%;
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  margin: 0 auto;
`;

const Logo = styled.a`
  text-decoration: none;
  padding: 10px;
`;

const NavBox = styled.div`
  display: flex;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
  padding: 15px 10px;
`;
