import { Activity, Container, ErrorComponent, ListItem } from '@elements/components';
import { useWeatherElements } from '@elements/services';
import { Suspense } from 'react';
import { ActivityIndicator, FlatList, StatusBar } from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';
import { useTheme } from 'tamagui';

import type { RootStackScreenProps } from '../navigation.types';

export function ListView(props: RootStackScreenProps<'List'>) {
  const { navigation } = props;
  const { data, refetch, isRefetching } = useWeatherElements();
  const tokens = useTheme();

  // Unfortunately offline-mode kinda ruins suspense mode
  if (!data) return <ActivityIndicator />

  return (
    <Suspense fallback={<Activity title='Data is on the way' />}>
      <ErrorBoundary FallbackComponent={ErrorComponent}>
        <StatusBar backgroundColor={tokens.bgLight.val} barStyle="dark-content" />

        <Container>
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
        </Container>
      </ErrorBoundary>
    </Suspense>
  );
}

export default {
  name: 'List',
  component: ListView,
};
