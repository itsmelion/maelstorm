import { AsyncStorage } from '@react-native-async-storage/async-storage';

export default {
  Storage: AsyncStorage,
  stories: [
    '../../../libs/components/src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-ondevice-actions',
    '@storybook/addon-ondevice-backgrounds',
    '@storybook/addon-ondevice-controls',
    '@storybook/addon-ondevice-notes',
  ],
  framework: {
    name: '@storybook/react-native',
    options: {},
  },
};

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/packages/storybook/documents/custom-builder-configs
