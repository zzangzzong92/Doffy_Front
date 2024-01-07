import { FC } from "react";
import { styled } from "styled-components";

type DocsProps = {
  docs: {
    id: number;
    title: string;
  };
};

export const DocCard: FC<DocsProps> = ({ docs }) => {
  return <DocContainer></DocContainer>;
};

const DocContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 4px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  flex-direction: column;
`;
