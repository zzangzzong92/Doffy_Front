import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";

type ButtonProps = {
  width?: number;
  height?: number;
  disabled?: boolean;
  children?: React.ReactNode;
  title?: string;
};

type StyledLink = {
  clr: string;
};

export const Button: FC = ({ title }: ButtonProps) => {
  const handleMouseMove = (e: any) => {
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;

    e.target.style.setProperty("--x", `${x}px`);
    e.target.style.setProperty("--y", `${y}px`);
  };

  return (
    <Container>
      <Link href="#">
        <StyledLink onMouseMove={handleMouseMove} clr="#0f0">
          <span>{title}</span>
        </StyledLink>
      </Link>
    </Container>
  );
};

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #222;

  &:disabled {
    opacity: 0.4;
    cursor: auto;
  }

  &:active:not(:disabled) {
    opacity: 0.1;
  }
`;

const StyledLink = styled.a<StyledLink>`
  position: relative;
  padding: 20px 60px;
  background: rgba(45, 45, 45, 1);
  border-radius: 50px;
  color: #9990;
  font-size: 1.5em;
  text-decoration: none;
  overflow: hidden;
  transition: 0.5s;

  &:hover {
    color: ${(props) => props.clr};
    text-shadow: 0 0 15px ${(props) => props.clr},
      0 0 40px ${(props) => props.clr};
  }

  span {
    position: relative;
    z-index: 1;
    letter-spacing: 0.2em;
  }

  &::before {
    content: "";
    position: absolute;
    top: var(--y);
    left: var(--x);
    transform: translate(-50%, -50%);
    background: radial-gradient(
      ${(props) => props.clr},
      transparent,
      transparent
    );
    width: 200px;
    height: 200px;
    opacity: 0;
    transition: 0.5s, top 0s, left 0s;
  }

  &:hover::before {
    opacity: 1;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 2px;
    background: rgba(45, 45, 45, 0.8);
    border-radius: 48px;
  }
`;
