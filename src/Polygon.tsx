import styled from '@emotion/styled';
import React from 'react';
import { DividerProps } from './Divider';

type DividerSettings = {
  polygon?: string;
};
type Props = DividerProps<unknown, DividerSettings>;

const Section = styled.section``;

export function Polygon({ divider, as, children }: Props) {
  return <Section>{children}</Section>;
}
