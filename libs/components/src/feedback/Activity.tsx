import { ActivityIndicator } from 'react-native';
import { Text } from 'tamagui';

import { Center } from '../layout/Center';

export const Activity = ({ title }: { title: string }) => (
  <Center>
    <ActivityIndicator />
    <Text>{title}</Text>
  </Center>
);
