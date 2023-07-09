import { Button, Center, Container, ForecastList, Flex, Activity, ErrorComponent } from '@elements/components';
import { useWeatherElements } from '@elements/services';
import dayjs from 'dayjs';
import _ from 'lodash';
import { Suspense, useMemo } from 'react';
import { StatusBar } from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';
import { Stack, Text, H1, Image, View } from 'tamagui';

import type { RootStackScreenProps } from '../navigation.types';

export function ForecastView(props: RootStackScreenProps<'Forecast'>) {
  const { route, navigation } = props;
  const { cityId } = route.params;
  const { data } = useWeatherElements();
  const forecast = useMemo(() => data[cityId], [data, cityId]);


  return (
    <Suspense fallback={<Activity title={`Peeking ${cityId} weather..`} />}>
      <ErrorBoundary FallbackComponent={ErrorComponent}>
        <StatusBar
          backgroundColor={'#00000000'}
          barStyle="light-content"
          translucent
        />

        <Image
          position='absolute'
          source={{ uri: forecast[0].city.picture, width: 200, height: 500 }}
          style={{ width: "100%", height: "100%" }}
        />
        <View
          backgroundColor={'$overlay'}
          height="100%"
          opacity={0.6}
          position='absolute'
          width="100%"
        />

        <Container bg={'transparent'}>
          <Stack space={20}>
            <H1
              color={'$colorAlt'}
              fontSize={36}
              fontWeight={'200'}
              lineHeight={36 * 1.2}
              mt={'20%'}
              textAlign='center'
              textShadowColor={'#000'}
              textShadowRadius={18}>
              {cityId}
            </H1>

            <ForecastList>
              {_.sortBy(forecast, d => d.date)
                .map(d => (
                  <Center
                    key={d.date}
                    margin={4}>
                    <Text color={'$colorAlt'} fontSize={10}>
                      {dayjs(d.date).format('H')}h
                    </Text>

                    <H1
                      color={'$colorAlt'}
                      fontWeight={'900'}
                      key={d.date}
                      lineHeight={36}>
                      {`${d.temp}°`}
                    </H1>
                  </Center>
                ))}
            </ForecastList>

            <Flex />

            <Center mb={'$4'}>
              <Button onPress={() => navigation.goBack()} title='Search'/>
            </Center>
          </Stack>
        </Container>
      </ErrorBoundary>
    </Suspense>
  );
}

export default {
  name: 'Forecast',
  component: ForecastView,
};
