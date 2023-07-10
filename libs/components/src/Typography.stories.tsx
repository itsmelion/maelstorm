import { Text, H1, YStack } from 'tamagui';

import type { Meta } from '@storybook/react-native';

const Story: Meta<typeof Text> = {
  component: () => (
    <YStack space={"$2"}>
      <H1 fontSize={56} fontWeight={'900'} lineHeight={58}>Display</H1>
      <Text fontSize={48} fontWeight={'200'}>Header 1</Text>
      <Text fontSize={32} fontWeight={'700'}>Header 2</Text>
      <Text fontSize={24} fontWeight={'600'}>Header 3</Text>
      <Text fontWeight={'400'}>Body text</Text>
      <Text fontWeight={'300'}>Thin</Text>
      <Text fontWeight={'800'}>Small Bold</Text>
    </YStack>
  ),
  title: 'Typography',
};

export default Story;

export const Fonts = {
  args: {},
};
