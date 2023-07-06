import {
  QueryClient,
  QueryClientProvider,
  QueryClientProviderProps,
} from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: true,
      suspense: true,
    },
  },
});

export const ServicesProvider = ({ client, ...props }: Partial<QueryClientProviderProps>) => (
  <QueryClientProvider
    client={client || queryClient}
    {...props}
  />
);
