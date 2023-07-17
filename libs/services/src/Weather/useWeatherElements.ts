import { QueryFunction, useQuery } from '@tanstack/react-query';
import _ from 'lodash';
import Config from 'react-native-config';

import type { WeatherDTO } from './weather.types';

import { convertToCelsius } from './helpers/convertTemperature';
import { network } from '../network';

const queryKey = 'weather';

const queryFn: QueryFunction<Data> = ({ signal }): Promise<Data> => network
  .get<WeatherDTO[]>(`${Config.ELEMENTS_API_URL}/weather`, { signal })
  .then(({ data }) => data)
  .then(data => data.map(item => ({ ...item, temp: convertToCelsius(item.temp, item.tempType) })))
  .then((data) => _.groupBy(data, 'city.name'));


/**
 * Gets forecasts for a number of cities (Elements API) */
export function useWeatherElements() {
  return useQuery({
    queryKey: [queryKey],
    queryFn,
  });
}


type Data = Record<string, WeatherDTO[]>;
