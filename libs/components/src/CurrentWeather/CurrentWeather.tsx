
import _ from  'lodash';
import { H1, H2 } from 'tamagui';

import { Wrapper } from './CurrentWeather.styled';

interface CurrentWeatherProps {
  locality: string;
  temperature: number;
}

export const CurrentWeather = ({ locality, temperature, ...props }: CurrentWeatherProps) => (
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
  </Wrapper>
)
