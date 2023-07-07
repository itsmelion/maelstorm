import { QueryFunction, useQuery } from '@tanstack/react-query';
import _ from 'lodash';

import type { WeatherDTO } from './weather.types';

import { convertToCelsius } from './helpers/convertTemperature';
import { mock } from './weather.mock';
import { network } from '../network';

const queryKey = 'weather';

const queryFn: QueryFunction<Data> = ({ signal }): Promise<Data> => network
  .get<WeatherDTO[]>('/weather', { signal })
  .then(({ data }) => data)
  .then(data => data.map(item => ({ ...item, temp: convertToCelsius(item.temp, item.tempType) })))
  .then((data) => _.groupBy(data, 'city.name'));

export function useWeatherElements() {
  return useQuery({
    queryKey: [queryKey],
    queryFn,
    // initialData: mock,
  });
}


type Data = Record<string, WeatherDTO[]>;
