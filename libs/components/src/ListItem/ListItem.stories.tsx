import { YStack } from 'tamagui';

import type { Meta } from '@storybook/react-native';

import { ListItem } from './ListItem';

import { ThemeProvider } from '../theme/config';

function themeWrapper(StoryFn) {
  return (
    <ThemeProvider>
      <YStack>{new Array(4).fill(null).map((_,i) => <StoryFn key={i} />)}</YStack>
    </ThemeProvider>
  );
}

const Story: Meta<typeof ListItem> = {
  component: ListItem,
  title: 'ListItem',
};

export default Story;

export const Primary = {
  decorators: [themeWrapper],
  args: {
    title: 'ListItem'
  },
};
