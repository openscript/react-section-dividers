import React from 'react';
import { AslantDivider } from '../src/AslantDivider';
import { UpperLowerColors } from '../src/Colors';
import { Intersection, UpperSection } from '../src/Intersection';
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css, jsx } from '@emotion/core';

export default {
  title: 'Dividers/Aslant',
  component: AslantDivider,
  parameters: {
    componentSubtitle: 'Simple aslant divider'
  }
};

export function BasicUsage() {
  const colors: UpperLowerColors = {
    upperColor: '#b4c4e1',
    lowerColor: '#6e94db'
  };

  const divider = <AslantDivider {...colors} />;

  return <Intersection divider={divider} />;
}

export function TransparentUsage() {
  const colors: UpperLowerColors = {
    upperColor: 'transparent',
    lowerColor: '#6e94db'
  };

  const divider = <AslantDivider {...colors} />;

  const upperSection = (
    <UpperSection
      css={css`
        background: url('demonstration.jpg');
      `}
    />
  );

  return <Intersection divider={divider} upperSection={upperSection} />;
}
