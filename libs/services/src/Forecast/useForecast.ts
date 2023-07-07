import { QueryFunction, useQuery } from '@tanstack/react-query';

import type { ForecastDTO } from './forecast.types';

import { network } from '../network';

const queryKey = 'forecast';

const queryFn: QueryFunction<ForecastDTO[]> = ({ signal }) => {
  const reqConfig = {
    signal, // signal for request cancellation
    params: {
      unit: 'metric', // metric for god-sake!! lol
    }
  };

  return network
    .get<ForecastDTO[]>('/data/3.0/onecall', reqConfig)
    .then(({ data }) => data)
};

/**
 * Gets info about the weather.
 * why look at the sky, or do a small talk, if you can use this incredible app!?
 */
export function useForecast({ lat, lon }: { lat: number, lon: number }) {
  return useQuery({
    queryKey: [queryKey, { lat, lon }],
    queryFn,
  });
}
