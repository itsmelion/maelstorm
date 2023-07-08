import { Text } from 'tamagui';

import type { Meta } from '@storybook/react-native';

const Story: Meta<typeof Text> = {
  component: Text,
  title: 'Typography',
};

export default Story;

export const H1 = {
  args: {
    children: 'Hello Worlds',
    variant: 'h1',
  },
};

export const H2 = {
  args: {
    children: 'Hello Worlds',
    variant: 'h2',
  },
};

export const Body = {
  args: {
    children: 'Hello Worlds',
    variant: 'body',
  },
};
