import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SimpleDivider } from '../src';

export default {
  title: 'Divider/SimpleDivider',
  component: SimpleDivider,
} as ComponentMeta<typeof SimpleDivider>;

const Template: ComponentStory<typeof SimpleDivider> = () => <SimpleDivider />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'SimpleDivider',
};
