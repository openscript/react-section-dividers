import styled from '@emotion/styled';
import { defaultColors, defaultSizes } from './Defaults';

type OtherSectionProps = {
  height?: string;
  backgroundColor?: string;
};

export const OtherSection = styled.section`
  height: ${(props: OtherSectionProps) => props.height || defaultSizes.height};
  background-color: ${(props: OtherSectionProps) => props.backgroundColor || defaultColors.primary};
`;
