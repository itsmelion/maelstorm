import 'react-native-reanimated';
import 'react-native-gesture-handler';
import { ThemeProvider } from '@elements/components';
import { ServicesProvider, errorHandler } from '@elements/services';
import { Suspense } from 'react';

import {
  StatusBar,
} from 'react-native';
import { setJSExceptionHandler, setNativeExceptionHandler } from 'react-native-exception-handler';

import { RootStack } from './navigation/RootStack';

export const App = () => {
  setJSExceptionHandler(errorHandler);
  setNativeExceptionHandler((_nativeError) => {
    // You can do something like call an api to report to dev team here
  });

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <ThemeProvider>
        <ServicesProvider>
          <Suspense>
            <RootStack />
          </Suspense>
        </ServicesProvider>
      </ThemeProvider>
    </>
  )};
