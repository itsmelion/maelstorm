import AsyncStorage from '@react-native-async-storage/async-storage'
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import {
  QueryClient,
  QueryClientProviderProps,
} from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';

import { useOnlineManager } from './onlineManager';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: true,
      suspense: true, // Unfortunately offline-mode kinda ruins suspense mode
      staleTime: 1000 * 60 * 5,
      cacheTime: Infinity,
      retry: 0,
    },
  },
});

const asyncPersist = createAsyncStoragePersister({
  storage: AsyncStorage,
  throttleTime: 3000,
});

export const ServicesProvider = ({ client, ...props }: Partial<QueryClientProviderProps>) => {
  useOnlineManager();

  return (
    <PersistQueryClientProvider
      client={client || queryClient}
      onSuccess={() => queryClient.resumePausedMutations()}
      persistOptions={{
        persister: asyncPersist,
      }}
      {...props}
    />
  );
};
