import { MutationFunction, useMutation } from '@tanstack/react-query';

import type { LocationDTO } from './location.types';
import type { AxiosRequestConfig } from 'axios';


import { network } from '../network';

const queryKey = 'location';

const mutationFn: MutationFunction<LocationDTO[], { searchTerm: string }> = ({ searchTerm }) => {
  const reqConfig: AxiosRequestConfig = {
    params: {
      q: searchTerm,
      limit: 5, // 5 is max
    }
  };

  return network
    .get<LocationDTO[]>('/geo/1.0/direct', reqConfig)
    .then(({ data }) => data)
}

/**
 * Search locations by {city name},{state code},{country code} and contains its lat|lon coordinates
 */
export function useSearchLocation() {
  return useMutation({
    mutationKey: [queryKey],
    mutationFn,
  });
}
