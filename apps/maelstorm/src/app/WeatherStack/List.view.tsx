import { ListItem, Field } from '@elements/components';
import { useSearchLocation } from '@elements/services';
import { Suspense, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';
import { SafeAreaView } from 'react-native-safe-area-context';
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
    <Suspense fallback={<Text>Data is on the way</Text>}>
      <ErrorBoundary FallbackComponent={() => <Text>Something went wrong</Text>}>
        <View padding={12}>
          <SafeAreaView>
            <H2 fontWeight={'300'} marginBottom={10}>
              Search a location
            </H2>
          </SafeAreaView>

          <Field
            autoFocus
            onChangeText={setQuery}
            textContentType='location'
            type="search"
            value={query}
          />
        </View>

        {isLoading ? <ActivityIndicator /> :
          <FlatList
            ListEmptyComponent={<Text>Search something lad!</Text>}
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
          />}
      </ErrorBoundary>
    </Suspense>
  );
}

export default {
  name: 'List',
  component: ListView,
};
