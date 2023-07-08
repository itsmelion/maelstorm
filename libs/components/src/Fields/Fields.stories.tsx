import type { Meta } from '@storybook/react-native';

import { Field } from './Input';

const Story: Meta<typeof Field> = {
  component: Field,
  title: 'Input Fields',
};

export default Story;

export const SearchField = {
  args: {},
};
