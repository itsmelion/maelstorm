import AsyncStorage from '@react-native-async-storage/async-storage'
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import {
  QueryClient,
  QueryClientProviderProps,
} from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { Provider } from 'react-redux';

import { useOnlineManager } from './onlineManager';
import { store as reduxStore } from '../redux/store';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: true,
      suspense: true, // Unfortunately offline-mode kinda ruins suspense mode
      staleTime: 1000 * 60 * 5,
      cacheTime: Infinity,
      retry: 2,
      networkMode: 'offlineFirst',
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
    <Provider store={reduxStore}>
      <PersistQueryClientProvider
        client={client || queryClient}
        onSuccess={() => queryClient.resumePausedMutations()}
        persistOptions={{
          persister: asyncPersist,
        }}
        {...props}
      />
    </Provider>
  );
};
