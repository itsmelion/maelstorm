import { Text } from 'tamagui';

import type { FallbackComponentProps } from 'react-native-error-boundary';

import { Center } from '../layout/Center';

export const ErrorComponent = ({ resetError }: FallbackComponentProps) => (
  <Center onPress={resetError}>
    <Text>Something went terribly wrong. :S</Text>
  </Center>
);
