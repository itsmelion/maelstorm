import { QueryFunction, useQuery } from '@tanstack/react-query';

import type { WeatherDTO } from './weather.types';

import { mock } from './weather.mock';
import { network } from '../network';

const queryKey = 'weather';

const queryFn: QueryFunction<WeatherDTO[]> = ({ signal }) => network
  .get<WeatherDTO[]>('/weather', { signal })
  .then(({ data }) => data);

export function useWeatherElements() {
  return useQuery({
    queryKey: [queryKey],
    queryFn,
    initialData: mock,
  });
}
