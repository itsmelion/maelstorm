import { CurrentWeather } from '@elements/components';
import { useForecast } from '@elements/services';
import _ from 'lodash';
import { Suspense } from 'react';
import { ScrollView } from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';
import { Stack, Text, XStack } from 'tamagui';

import type { RootStackScreenProps } from '../navigation.types';

export function WeatherView(props: RootStackScreenProps<'Weather'>) {
  const { route } = props;
  const { lat, lon, locality } = route.params;
  const { data } = useForecast({ lat, lon });

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

          <XStack space={12}>
            <Text fontWeight={'800'}>
              asc
            </Text>

            <Text fontWeight={'800'}>
              desc
            </Text>
          </XStack>

          <ScrollView
            contentContainerStyle={{
              alignItems: 'flex-start',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              minWidth: '100%',
            }}
            horizontal>
            {_.sortBy(data.daily, d => d.dt)
              .splice(0,5)
              .map((d) => (
                <Text
                  color={'$color'}
                  fontWeight={'400'}
                  key={d.dt}>
                  {`${_.round(d.temp.max)}°/${_.round(d.temp.min)}°`}
                </Text>
              ))}
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
