import type { Meta } from '@storybook/react-native';

import { Button } from './Button';
import { Center } from '../layout/Center';

const Story: Meta<typeof Button> = {
  decorators: [
    (StoryFn) => (
      <Center>
        <StoryFn/>
      </Center>
    ),
  ],
  component: Button,
  title: 'Button',
};

export default Story;

export const Primary = {
  args: {
    title: 'I am a button'
  },
};
