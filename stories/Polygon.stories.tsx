import { Fragment } from 'react';
import { Polygon } from '../src/Polygon';
import { OtherSection } from './OtherSection';

export default {
  title: 'Dividers/Polygon',
  component: Polygon,
  parameters: {
    componentSubtitle: 'Sections divided by a polygon'
  }
};

export function BasicUsage() {
  const upperSection = <OtherSection />;
  const lowerSection = (
    <Polygon divider={{ top: { height: '100px' } }}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi delectus vitae natus maiores. Assumenda vitae, cum, qui quos ea
      distinctio obcaecati reiciendis quia accusantium alias, voluptas autem pariatur cumque! Itaque!
    </Polygon>
  );

  return (
    <Fragment>
      {upperSection}
      {lowerSection}
    </Fragment>
  );
}
