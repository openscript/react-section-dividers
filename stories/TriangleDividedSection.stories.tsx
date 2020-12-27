import React, { Fragment } from 'react';
import { TriangleDividedSection } from '../src/TriangleDividedSection';
import { OtherSection } from './OtherSection';
import { defaultStyles } from './Defaults';

export default {
  title: 'Dividers/Triangle',
  component: TriangleDividedSection,
  parameters: {
    componentSubtitle: 'Triangle divided sections'
  }
};

export function BasicUsage() {
  const upperSection = (
    <OtherSection>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quidem, facilis assumenda necessitatibus, deserunt excepturi
      blanditiis sequi, tempore recusandae distinctio aspernatur vitae tenetur. Veritatis porro vel natus? Perferendis, optio? Iusto?
    </OtherSection>
  );
  const lowerSection = (
    <TriangleDividedSection css={defaultStyles.demonstrationSection}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti illo similique praesentium, qui nulla molestiae assumenda in
      accusantium tenetur veritatis ad minima possimus. Aliquam, omnis non molestias eum vitae vel? Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Repudiandae eveniet optio recusandae dolor cumque deserunt laudantium odit perspiciatis commodi modi sit ullam
      consequuntur, dolorem nulla vel labore! Consequuntur, officia iure. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
      pariatur nemo accusamus non repudiandae vero aliquam distinctio, dignissimos culpa! Sit, nisi reiciendis at aut minima architecto
      praesentium dolor ipsa ex?
    </TriangleDividedSection>
  );

  return (
    <Fragment>
      {lowerSection}
      {upperSection}
    </Fragment>
  );
}
