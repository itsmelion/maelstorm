import { Button, CurrentWeather, ForecastItem, ForecastList, Flex, Center } from '@elements/components';
import { useForecast, useSort } from '@elements/services';
import _ from 'lodash';
import { Suspense } from 'react';
import ErrorBoundary from 'react-native-error-boundary';
import { Stack, Text, XStack } from 'tamagui';

import type { RootStackScreenProps } from '../navigation.types';

export function WeatherView(props: RootStackScreenProps<'Weather'>) {
  const { route, navigation } = props;
  const { lat, lon, locality } = route.params;
  const { data } = useForecast({ lat, lon });
  const sort = useSort();

  return (
    <Suspense fallback={<Text>Data is on the way</Text>}>
      <ErrorBoundary FallbackComponent={() => <Text>Something went wrong</Text>}>
        <Stack flex={1} space={20}>
          <CurrentWeather
            data={data.current}
            locality={locality}
            temperature={data.current.temp}
          />

          <XStack alignItems='center' justifyContent="space-between" px={'$4'}>
            <Text fontWeight={'700'}>
              Forecast
            </Text>

            <Button
              onPress={sort.toggle}
              title={sort.value === 'asc' ? 'ascending' : 'descending'}
            />
          </XStack>

          <ForecastList>
            {_(data.daily)
              .sortBy(data.daily, d => d.dt)
              .splice(0,5)
              .tap(v => {
                if (sort.value === 'desc') return v.reverse()
                return v;
              })
              .map((d) => (
                <ForecastItem
                  dt={d.dt}
                  key={d.dt}
                  temp={d.temp}
                  weather={d.weather}
                />
              ))
              .value()}
          </ForecastList>

          <Flex />

          <Center mb={'$4'}>
            <Button onPress={() => navigation.goBack()} title='Search'/>
          </Center>
        </Stack>
      </ErrorBoundary>
    </Suspense>
  );
}

export default {
  name: 'Weather',
  component: WeatherView,
};
