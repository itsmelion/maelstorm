import { Text } from 'tamagui';

import type { FallbackComponentProps } from 'react-native-error-boundary';

import { Button } from '../Button/Button';
import { Center } from '../layout/Center';
import { Container } from '../layout/Container';

export const ErrorComponent = ({ resetError, error }: FallbackComponentProps) => (
  <Container>
    <Center flex={1}>
      <Text fontWeight={'600'} mb="$2">
        Something went terribly wrong. :S
      </Text>

      <Text m="$2">{error.name}: {error.message}</Text>

      <Button
        m="$2"
        onPress={resetError}
        title='Dismiss'
      />
    </Center>
  </Container>
);
