import React from 'react';
import { Fragment } from 'react';
import styled from '@emotion/styled';
import { defaultColors } from './Colors';

type SectionProps = {
  color?: string;
};

export const UpperSection = styled.section`
  height: 100px;
  background-color: ${(props: SectionProps) => props.color || defaultColors.upperColor};
`;

export const LowerSection = styled.section`
  height: 100px;
  background-color: ${(props: SectionProps) => props.color || defaultColors.lowerColor};
`;

type IntersectionProps = {
  divider: JSX.Element;
  upperSection?: JSX.Element;
  lowerSection?: JSX.Element;
};

export function Intersection({ divider, upperSection = <UpperSection />, lowerSection = <LowerSection /> }: IntersectionProps) {
  return (
    <Fragment>
      {upperSection}
      {divider}
      {lowerSection}
    </Fragment>
  );
}
