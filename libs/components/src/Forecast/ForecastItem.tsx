import dayjs from 'dayjs';
import _ from 'lodash'
import { Text, Image, XStack } from 'tamagui';

import { Center } from '../layout/Center';

// https://openweathermap.org/img/wn/10d@2x.png

interface ForecastItemProps {
  dt: number;
  temp: {
    day:   number;
    min:   number;
    max:   number;
    night: number;
    eve:   number;
    morn:  number;
  };
  weather: Array<{
    id:          number;
    main:        string;
    description: string;
    icon:        string;
  }>
};

export const ForecastItem = ({ temp, dt, weather }: ForecastItemProps) => {
  const forecast = _.head(weather);

  return (
    <Center>
      <Text fontSize={12} fontWeight={'600'} mb={'$1'}>
        {dayjs(dt * 1000).format('dddd')}
      </Text>

      {forecast ? (
        <XStack alignItems='center' space={4}>
          <Image
            aspectRatio={1}
            marginLeft={-10}
            source={{
              uri: `https://openweathermap.org/img/wn/${forecast.icon}.png`,
              width: 25,
              height: 25,
            }}
          />
          <Text fontSize={8}>{forecast.main}</Text>
        </XStack>
      ) : null}

      <Text
        fontWeight={'400'}
        key={dt}>
        {`${_.round(temp.max)}°/${_.round(temp.min)}°`}
      </Text>
    </Center>
  )
};
