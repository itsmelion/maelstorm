import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainerProps } from '@react-navigation/native';
import { useState, useEffect } from 'react'
import { Linking, Platform } from 'react-native';

const PERSISTENCE_KEY = 'NAVIGATION_STATE_V1';

type Return = Pick<NavigationContainerProps, 'initialState' | 'onStateChange'>
& { isReady: boolean }

/**
 * Helps restore last route
 * @url https://reactnavigation.org/docs/state-persistence
 */
export const useRouteRestauration = (): Return => {
  const [isReady, setIsReady] = useState(false);
  const [initialState, setInitialState] = useState();

  useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();

        if (Platform.OS !== 'web' && initialUrl == null) {
          // Only restore state if there's no deep link and we're not on web
          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
          const state = savedStateString ? JSON.parse(savedStateString) : undefined;

          if (state !== undefined) {
            setInitialState(state);
          }
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  return {
    isReady,
    initialState,
    onStateChange(state) {
      AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
    }
  };
}
