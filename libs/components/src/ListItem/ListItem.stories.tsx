import { YStack } from 'tamagui';

import type { Meta } from '@storybook/react-native';

import { ListItem } from './ListItem';

function Spammer(StoryFn) {
  return (
    <YStack>
      {/* eslint-disable-next-line react/no-array-index-key */}
      {new Array(4).fill(null).map((_,i) => <StoryFn key={i} />)}
    </YStack>
  );
}

const Story: Meta<typeof ListItem> = {
  component: ListItem,
  title: 'ListItem',
};

export default Story;

export const Primary = {
  decorators: [Spammer],
  args: {
    title: 'ListItem'
  },
};
