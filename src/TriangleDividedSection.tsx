import styled from '@emotion/styled';
import React, { PropsWithChildren } from 'react';

const TriangleSection = styled.section``;

type TriangleDividedSectionProps = PropsWithChildren<{
  className?: string;
}>;

export function TriangleDividedSection({ children, className }: TriangleDividedSectionProps) {
  return <TriangleSection className={className}>{children}</TriangleSection>;
}
