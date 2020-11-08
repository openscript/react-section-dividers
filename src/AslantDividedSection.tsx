import styled from '@emotion/styled';
import React, { PropsWithChildren } from 'react';
import { DividerPosition } from './Divider';

type AslantSectionProps = {
  topHeight: string;
  bottomHeight: string;
  polygon: string;
};

const AslantSection = styled.section`
  margin-top: ${(props: AslantSectionProps) => `-${props.topHeight}`};
  padding-top: ${(props: AslantSectionProps) => props.topHeight};
  margin-bottom: ${(props: AslantSectionProps) => `-${props.bottomHeight}`};
  padding-bottom: ${(props: AslantSectionProps) => props.bottomHeight};
  clip-path: ${(props: AslantSectionProps) => props.polygon};
`;

type AslantDividerSettings = {
  flip?: boolean;
  height: string;
};

type AslantDividedSectionProps = PropsWithChildren<{
  className?: string;
  divider: { [position in DividerPosition]?: AslantDividerSettings };
}>;

export function AslantDividedSection({ children, className, divider }: AslantDividedSectionProps) {
  let topLeft = divider.top?.height || '0';
  let topRight = '0';
  if (divider.top?.flip) {
    topRight = topLeft;
    topLeft = '0';
  }

  let bottomRight = divider.bottom?.height ? `calc(100% - ${divider.bottom.height})` : '100%';
  let bottomLeft = '100%';
  if (divider.bottom?.flip) {
    bottomLeft = bottomRight;
    bottomRight = '100%';
  }

  const polygon = `polygon(0 ${topLeft}, 100% ${topRight}, 100% ${bottomRight}, 0% ${bottomLeft});`;
  const topHeight = divider.top?.height || '0';
  const bottomHeight = divider.bottom?.height || '0';
  return (
    <AslantSection className={className} polygon={polygon} topHeight={topHeight} bottomHeight={bottomHeight}>
      {children}
    </AslantSection>
  );
}
