import { QueryFunction, useQuery } from '@tanstack/react-query';

import type { ForecastDTO } from './forecast.types';

import { network } from '../network';

const queryKey = 'forecast';

type Args = { lat: number, lon: number };
type FnType = QueryFunction<ForecastDTO, [typeof queryKey, Args]>;

const queryFn: FnType = ({ signal, queryKey: qrkey }) => {
  const reqConfig = {
    signal, // signal for request cancellation
    params: {
      exclude: 'hourly,minutely,alerts',
      units: 'metric', // metric for god-sake!! lol
      lat: qrkey[1].lat,
      lon: qrkey[1].lon,
    }
  };

  return network
    .get<ForecastDTO>('/data/3.0/onecall', reqConfig)
    .then(({ data }) => data)
};

/**
 * Gets info about the weather.
 * why look at the sky, or do a small talk, if you can use this incredible app!?
 */
export function useForecast({ lat, lon }: Args) {
  return useQuery({
    queryKey: [queryKey, { lat, lon }],
    queryFn,
  });
}
