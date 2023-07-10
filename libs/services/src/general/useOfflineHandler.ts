import NetInfo from "@react-native-community/netinfo";
import { useEffect } from 'react';

interface OfflineHandlerProps {
  onOffline: () => unknown;
  condition: boolean;
}

/** Do something when detect offline and cant fetch data. */
export const useOfflineHandler = ({ onOffline, condition }: OfflineHandlerProps) => {
  useEffect(() => {
    // Subscribe
    const unsubscribe = NetInfo.addEventListener(state => {
      if (state.isConnected === false && condition) {
        onOffline();
      }
    });

    // Unsubscribe
    return () => unsubscribe();
  }, [condition, onOffline]);
};
