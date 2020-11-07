import React from 'react';
import { Fragment } from 'react';
import styled from '@emotion/styled';
import { UpperLowerColors } from './Colors';

type SectionProps = {
  color: string;
};

const UpperSection = styled.section`
  height: 100px;
  background-color: ${(props: SectionProps) => props.color};
`;

const LowerSection = styled.section`
  height: 100px;
  background-color: ${(props: SectionProps) => props.color};
`;

type IntersectionProps = UpperLowerColors & {
  divider: JSX.Element;
};

export function Intersection({ divider, upperColor, lowerColor }: IntersectionProps) {
  return (
    <Fragment>
      <UpperSection color={upperColor} />
      {divider}
      <LowerSection color={lowerColor} />
    </Fragment>
  );
}
