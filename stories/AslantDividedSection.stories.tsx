import React, { Fragment } from 'react';
import { AslantDividedSection } from '../src/AslantDividedSection';
import { OtherSection } from './OtherSection';
import { css } from '@emotion/core';
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
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi delectus vitae natus maiores. Assumenda vitae, cum, qui quos ea
      distinctio obcaecati reiciendis quia accusantium alias, voluptas autem pariatur cumque! Itaque!
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
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, earum quidem similique dolorem voluptate quaerat minus!
      Quibusdam error magni odit doloribus, explicabo, ab assumenda quae debitis ad quos similique sapiente.
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
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, quia? Dolores accusamus commodi, doloremque quibusdam tenetur
      architecto? Quam dicta est, quos mollitia dolorem placeat vel minus doloremque, cum, dolores fugiat.
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
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, deleniti fuga. Architecto amet eligendi in eaque, quam minima saepe
      qui eum, odio aliquam exercitationem tempora, ullam excepturi voluptates iusto aspernatur?
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
