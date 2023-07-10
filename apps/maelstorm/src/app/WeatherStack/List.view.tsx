import { ListItem, Field, Center, ErrorComponent, Activity, Container } from '@elements/components';
import { useSearchLocation } from '@elements/services';
import { Suspense, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';
import { H2, Text, View } from 'tamagui';
import { useDebounce } from 'use-debounce';

import type { RootStackScreenProps } from '../navigation.types';

export function ListView(props: RootStackScreenProps<'List'>) {
  const { navigation } = props;
  const { data, mutate, isLoading } = useSearchLocation();
  const [query, setQuery] = useState('');
  const [searchTerm] = useDebounce(query, 1500);

  useEffect(() => {
    if (searchTerm) mutate({ searchTerm });
  }, [searchTerm, mutate]);

  return (
    <Suspense fallback={<Activity title="Listing some locations"/>}>
      <ErrorBoundary FallbackComponent={ErrorComponent}>
        <Container>
          <View padding={'$3'}>
            <H2 fontWeight={'300'} marginBottom={'$2'}>
              Search a location
            </H2>

            <Field
              autoFocus
              onChangeText={setQuery}
              placeholder='Search a location'
              textContentType='location'
              type="search"
              value={query}
            />
          </View>

          <FlatList
            ListEmptyComponent={(
              <Center>
                {isLoading ? <ActivityIndicator /> : <Text>Search something lad!</Text>}
              </Center>
            )}
            data={data}
            onRefresh={() => mutate({searchTerm})}
            refreshing={isLoading}
            renderItem={({ item, index }) => (
              <ListItem
                key={index}
                onPress={() => navigation.push('Weather', {
                  lat: item.lat,
                  lon: item.lon,
                  locality: item.name
                })}
                title={`${item.name}, ${item.country}`}
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
