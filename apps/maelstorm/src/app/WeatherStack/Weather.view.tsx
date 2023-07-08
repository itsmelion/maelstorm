import { CurrentWeather } from '@elements/components';
import { useForecast, useSort } from '@elements/services';
import _ from 'lodash';
import { Suspense } from 'react';
import { ScrollView, Pressable } from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';
import { Stack, Text } from 'tamagui';

import type { RootStackScreenProps } from '../navigation.types';

export function WeatherView(props: RootStackScreenProps<'Weather'>) {
  const { route } = props;
  const { lat, lon, locality } = route.params;
  const { data } = useForecast({ lat, lon });
  const sort = useSort();

  return (
    <Suspense fallback={<Text>Data is on the way</Text>}>
      <ErrorBoundary FallbackComponent={() => <Text>Something went wrong</Text>}>
        <Stack flex={1} space={20}>
          <CurrentWeather
            locality={locality}
            temperature={data.current.temp}
          />


          <Text fontWeight={'700'}>
            Forecast
          </Text>

          <Pressable onPress={sort.toggle}>
            <Text fontWeight={'800'}>
              {sort.value === 'asc' ? 'ascending' : 'descending'}
            </Text>
          </Pressable>

          <ScrollView
            contentContainerStyle={{
              alignItems: 'flex-start',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              minWidth: '100%',
            }}
            horizontal>
            {_(data.daily)
              .sortBy(data.daily, d => d.dt)
              .splice(0,5)
              .tap(v => {
                if (sort.value === 'desc') return v.reverse()
                return v;
              })
              .map((d) => (
                <Text
                  color={'$color'}
                  fontWeight={'400'}
                  key={d.dt}>
                  {`${_.round(d.temp.max)}°/${_.round(d.temp.min)}°`}
                </Text>
              ))
              .value()}
          </ScrollView>
        </Stack>
      </ErrorBoundary>
    </Suspense>
  );
}

export default {
  name: 'Weather',
  component: WeatherView,
};
