import styled from '@emotion/styled';
import React, { PropsWithChildren } from 'react';

type BeamProps = {
  dividerHeight: string;
  scaleY: string;
  polygon: string;
  color: string;
};

const Beam = styled.div`
  position: absolute;
  height: ${(props: BeamProps) => props.dividerHeight};
  width: 100%;
  background-color: ${(props: BeamProps) => props.color};
  clip-path: ${(props: BeamProps) => props.polygon};
  transform-origin: 0 0;
  transform: scaleY(${(props: BeamProps) => props.scaleY});
`;

const Beams = styled.div`
  position: absolute;
  width: 100%;
  top: 100%;
`;

type BeamSectionProps = {
  dividerHeight: string;
};

const BeamSection = styled.section`
  position: relative;

  & + * {
    padding-top: ${(props: BeamSectionProps) => props.dividerHeight};
  }
`;

type BeamDividedSectionProps = PropsWithChildren<{
  className?: string;
  flip?: boolean;
  dividerHeight: string;
  beams: string[];
}>;

export function BeamDividedSection({ children, className, flip, dividerHeight, beams }: BeamDividedSectionProps) {
  const polygon = `polygon(0 0, ${flip ? '100% 0' : '0 100%'}, 100% ${flip ? '100%' : '0'})`;

  return (
    <BeamSection className={className} dividerHeight={dividerHeight}>
      {children}
      <Beams>
        {beams.map((beam, index) => {
          const scaleY = (100 / beams.length) * (beams.length - index);
          return <Beam key={index} color={beam} dividerHeight={dividerHeight} scaleY={`${scaleY}%`} polygon={polygon} />;
        })}
      </Beams>
    </BeamSection>
  );
}
