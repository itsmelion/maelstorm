import { Button, Center, Container } from '@elements/components';
import { Text } from 'tamagui';

import type { RootStackScreenProps } from '../navigation.types';

export function OfflineView(props: RootStackScreenProps<'Offline'>) {
  const { navigation } = props;

  return (
    <Container>
      <Center>
        <Text>You are offline</Text>
        <Button onPress={navigation.goBack} title='Back' />
      </Center>
    </Container>
  );
}

export default {
  name: 'Offline',
  component: OfflineView,
};
