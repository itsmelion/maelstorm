import { ListItem } from '@elements/components';
import { useWeatherElements } from '@elements/services';
import { Suspense } from 'react';
import { FlatList } from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';
import { Text } from 'tamagui';

import type { RootStackScreenProps } from '../navigation/navigation.types';

export function ForecastView(_props: RootStackScreenProps<'Forecast'>) {
  const { data } = useWeatherElements();

  return (
    <Suspense fallback={<Text>Data is on the way</Text>}>
      <ErrorBoundary FallbackComponent={() => <Text>Something went wrong</Text>}>
        <FlatList
          data={data.Amsterdam}
          renderItem={(d) => (
            <ListItem
              key={d.index}
              title={d.item.temp.toString()}
            />
          )}
        />
      </ErrorBoundary>
    </Suspense>
  );
}

export default {
  name: 'Forecast',
  component: ForecastView,
};
