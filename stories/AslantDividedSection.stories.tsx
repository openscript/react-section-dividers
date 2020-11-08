import React, { Fragment } from 'react';
import { AslantDividedSection } from '../src/AslantDividedSection';
import { OtherSection } from './OtherSection';
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css, jsx } from '@emotion/core';
import { defaultStyles } from './Defaults';

export default {
  title: 'Dividers/Aslant',
  component: AslantDividedSection,
  parameters: {
    componentSubtitle: 'Aslant divided sections'
  }
};

export function BasicUsage() {
  const upperSection = <OtherSection />;
  const lowerSection = (
    <AslantDividedSection
      divider={{
        top: {
          height: '30px'
        }
      }}
      css={defaultStyles.demonstrationSection}
    >
      Some content
    </AslantDividedSection>
  );

  return (
    <Fragment>
      {upperSection}
      {lowerSection}
    </Fragment>
  );
}

export function BothSides() {
  const upperSection = <OtherSection />;
  const middleSection = (
    <AslantDividedSection
      divider={{
        top: {
          height: '30px'
        },
        bottom: {
          height: '30px'
        }
      }}
      css={defaultStyles.demonstrationSection}
    >
      Some content
    </AslantDividedSection>
  );
  const lowerSection = <OtherSection />;

  return (
    <Fragment>
      {upperSection}
      {middleSection}
      {lowerSection}
    </Fragment>
  );
}

export function FlipOneSide() {
  const upperSection = <OtherSection />;
  const middleSection = (
    <AslantDividedSection
      divider={{
        top: {
          height: '30px',
          flip: true
        },
        bottom: {
          height: '30px'
        }
      }}
      css={defaultStyles.demonstrationSection}
    >
      Some content
    </AslantDividedSection>
  );
  const lowerSection = <OtherSection />;

  return (
    <Fragment>
      {upperSection}
      {middleSection}
      {lowerSection}
    </Fragment>
  );
}

export function WithBackgroundImage() {
  const upperSection = <OtherSection />;
  const middleSection = (
    <AslantDividedSection
      divider={{
        top: {
          height: '30px'
        },
        bottom: {
          height: '30px',
          flip: true
        }
      }}
      css={css`
        background-image: url(demonstration.jpg);
        ${defaultStyles.demonstrationSection}
      `}
    >
      Some content
    </AslantDividedSection>
  );
  const lowerSection = <OtherSection />;

  return (
    <Fragment>
      {upperSection}
      {middleSection}
      {lowerSection}
    </Fragment>
  );
}
