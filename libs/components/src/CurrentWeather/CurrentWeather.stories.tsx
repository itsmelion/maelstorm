import type { Meta } from '@storybook/react-native';

import { CurrentWeather } from './CurrentWeather';

const Story: Meta<typeof CurrentWeather> = {
  component: CurrentWeather,
  title: 'CurrentWeather',
};

export default Story;

export const Primary = {
  args: {
    locality: 'Stockholm',
    temperature: 12.2,
  },
};
