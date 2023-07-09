
import _ from  'lodash';
import { H1, H2, Image, Text, YStack } from 'tamagui';

import type { Current } from '@elements/services';

import { Wrapper } from './CurrentWeather.styled';

interface CurrentWeatherProps {
  locality: string;
  temperature: number;
  data: Current;
}

export const CurrentWeather = ({ locality, temperature, data, ...props }: CurrentWeatherProps) => {
  const weather = _.head(data.weather);
  return (
    <Wrapper
      animate={{ opacity: 1, translateY: 0 }}
      from={{ opacity: 0, translateY: -30 }}
      transition={{
        type: 'timing',
        duration: 1250,
        delay: 250,
      }}
      {...props}>
      <H1
        color={'$color'}
        fontSize={32}
        fontWeight={'200'}
        lineHeight={32 * 1.2}>
        {locality}
      </H1>

      <H2
        color={'$color'}
        fontSize={64}
        fontWeight={'900'}
        lineHeight={64 * 1.2}>
        {`${_.round(temperature)}°`}
      </H2>

      {weather ? (
        <YStack alignItems='center'>
          <Image
            aspectRatio={1}
            source={{
              uri: `https://openweathermap.org/img/wn/${weather.icon}@2x.png`,
              width: 50,
              height: 50,
            }}
          />

          <Text fontWeight={'600'} textTransform='capitalize'>
            {weather.description}
          </Text>
        </YStack>
      ) : null}
    </Wrapper>
  )
};
