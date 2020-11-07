import styled from '@emotion/styled';
import React from 'react';
import { UpperLowerColors } from './Colors';

type ColorProps = {
  color: string;
};

const DividerWrapper = styled.div`
  height: 30px;
  background-color: ${(props: ColorProps) => props.color};
`;

const AslantElement = styled.div`
  height: 100%;
  background-color: ${(props: ColorProps) => props.color};
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
`;

type AslantDividerProps = UpperLowerColors & {
  angle?: number;
};

export function AslantDivider(props: AslantDividerProps) {
  return (
    <DividerWrapper color={props.upperColor}>
      <AslantElement color={props.lowerColor} />
    </DividerWrapper>
  );
}
