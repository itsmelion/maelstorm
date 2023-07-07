import {
  QueryClient,
  QueryClientProvider,
  QueryClientProviderProps,
} from '@tanstack/react-query';

import { useOnlineManager } from './onlineManager';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: true,
      suspense: true,
      staleTime: 1000 * 60 * 5,
    },
  },
});

export const ServicesProvider = ({ client, ...props }: Partial<QueryClientProviderProps>) => {
  useOnlineManager();

  return (
    <QueryClientProvider
      client={client || queryClient}
      {...props}
    />
  );
};
