import { useWeatherElements } from '@elements/services';
import _ from 'lodash';
import { Suspense, useMemo } from 'react';
import { SafeAreaView } from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';
import { Stack, Text, YStack, H1, ScrollView, Image, View } from 'tamagui';

import type { RootStackScreenProps } from '../navigation.types';

export function ForecastView(props: RootStackScreenProps<'Forecast'>) {
  const { data } = useWeatherElements();
  const { cityId } = props.route.params;
  const forecast = useMemo(() => data[cityId], [data, cityId]);


  return (
    <Suspense fallback={<Text>Data is on the way</Text>}>
      <ErrorBoundary FallbackComponent={() => <Text>Something went wrong</Text>}>
        <SafeAreaView style={{ flex: 1 }}>
          <Stack flex={1} space={20}>
            <Image
              height="100%"
              position='absolute'
              source={{ uri: forecast[0].city.picture, width: 200, height: 500 }}
              width="100%"
            />
            <View
              backgroundColor={'#000'}
              height="100%"
              opacity={0.6}
              position='absolute'
              width="100%"
            />
            <H1
              color={'$colorAlt'}
              fontSize={36}
              fontWeight={'200'}
              lineHeight={36 * 1.2}
              textAlign='center'
              textShadowColor={'#000'}
              textShadowRadius={18}>
              {cityId}
            </H1>

            <ScrollView
              contentContainerStyle={{
                alignItems: 'flex-start',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                minWidth: '100%',
              }}
              horizontal>
              {_.sortBy(forecast, d => d.date)
                .map(d => (
                  <YStack
                    key={d.date}
                    margin={4}>
                    <H1
                      color={'$colorAlt'}
                      flex={1}
                      fontWeight={'900'}
                      key={d.date}>
                      {`${d.temp}°`}
                    </H1>
                  </YStack>
                ))}
            </ScrollView>
          </Stack>
        </SafeAreaView>
      </ErrorBoundary>
    </Suspense>
  );
}

export default {
  name: 'Forecast',
  component: ForecastView,
};
