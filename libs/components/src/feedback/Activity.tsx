import { ActivityIndicator } from 'react-native';
import { Text } from 'tamagui';

import { Center } from '../layout/Center';
import { Container } from '../layout/Container';

export const Activity = ({ title }: { title: string }) => (
  <Container>
    <Center>
      <ActivityIndicator />
      <Text>{title}</Text>
    </Center>
  </Container>
);
