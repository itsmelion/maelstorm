import NetInfo from '@react-native-community/netinfo'
import {
  onlineManager,
} from '@tanstack/react-query'
import { useEffect } from 'react';

/**
 * Observes whenever the app goes offline and tells react-query
 * making possible to handle network drops and retries. */
export const useOnlineManager = () => {
  useEffect(() => {
    onlineManager.setEventListener(setOnline => NetInfo.addEventListener(state => {
      setOnline(Boolean(state.isConnected))
    }));
  }, []);
}
