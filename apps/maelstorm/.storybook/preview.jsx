import { ThemeProvider } from '@elements/components';
import {withBackgrounds} from '@storybook/addon-ondevice-backgrounds';
import {Suspense} from 'react';

function themeWrapper(StoryFn) {
  return (
    <ThemeProvider>
      <Suspense>
        <StoryFn />
      </Suspense>
    </ThemeProvider>
  );
}

export const decorators = [
  withBackgrounds,
  themeWrapper
];


export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: [
    {name: 'plain', value: '#FAFAFA', default: true},
    {name: 'warm', value: 'hotpink'},
    {name: 'cool', value: 'deepskyblue', default: true},
  ],
};

export default {
  parameters,
  decorators: [
    ...decorators,
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
};
