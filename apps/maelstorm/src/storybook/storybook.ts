import { configure, getStorybookUI } from '@storybook/react-native';

// eslint-disable-next-line import/no-relative-packages
import { loadStories } from '../../../../.storybook/story-loader';

configure(() => loadStories(), module);

export const StorybookUIRoot = getStorybookUI({});
