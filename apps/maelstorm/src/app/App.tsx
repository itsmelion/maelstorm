import 'react-native-reanimated';
import 'react-native-gesture-handler';
import { ThemeProvider } from '@elements/components';
import { ServicesProvider, errorHandler } from '@elements/services';
import { Suspense } from 'react';

import {
  Text,
  StatusBar,
} from 'react-native';
import { setJSExceptionHandler, setNativeExceptionHandler } from 'react-native-exception-handler';

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
            <Text testID='heading'>Hello</Text>
          </Suspense>
        </ServicesProvider>
      </ThemeProvider>
    </>
  )};
