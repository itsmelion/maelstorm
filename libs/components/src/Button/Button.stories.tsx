import type { Meta } from '@storybook/react-native';

import { Button } from './Button';

import { ThemeProvider } from '../theme/config';

function themeWrapper(StoryFn) {
  return (
    <ThemeProvider>
      <StoryFn />
    </ThemeProvider>
  );
}

const Story: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
};

export default Story;

export const Primary = {
  decorators: [themeWrapper],
  args: {
    title: 'I am a button'
  },
};
