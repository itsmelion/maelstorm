import { ListItem } from '@elements/components';
import { useWeatherElements } from '@elements/services';
import { Suspense } from 'react';
import { FlatList } from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';
import { Text } from 'tamagui';

import type { RootStackScreenProps } from '../navigation/navigation.types';

export function ListView(props: RootStackScreenProps<'List'>) {
  const { navigation } = props;
  const { data, refetch, isRefetching } = useWeatherElements();

  return (
    <Suspense fallback={<Text>Data is on the way</Text>}>
      <ErrorBoundary FallbackComponent={() => <Text>Something went wrong</Text>}>
        <FlatList
          data={Object.keys(data).sort()}
          onRefresh={refetch}
          refreshing={isRefetching}
          renderItem={(d) => (
            <ListItem
              key={d.index}
              onPress={() => navigation.push('Forecast', { cityId: d.item })}
              title={d.item}
            />
          )}
        />
      </ErrorBoundary>
    </Suspense>
  );
}

export default {
  name: 'List',
  component: ListView,
};
