import React from 'react';
import { AslantDivider } from './AslantDivider';
import { UpperLowerColors } from './Colors';
import { Intersection } from './Intersection';

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
  return <Intersection divider={<AslantDivider {...colors} />} {...colors} />;
}
