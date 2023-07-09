import 'react-native-reanimated';
import 'react-native-gesture-handler';
import { Container, ThemeProvider } from '@elements/components';
import { ServicesProvider, errorHandler } from '@elements/services';
import { Suspense, useEffect } from 'react';
import {
  StatusBar,
} from 'react-native';
import { setJSExceptionHandler, setNativeExceptionHandler } from 'react-native-exception-handler';
import SplashScreen from "react-native-splash-screen";

// Routes - Stacks
import { ElementsStack } from './ElementsStack';
import { WeatherStack } from './WeatherStack';

export const App = () => {
  setJSExceptionHandler(errorHandler);
  setNativeExceptionHandler((_nativeError) => {
    // You can do something like call an api to report to dev team here
  });

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <StatusBar backgroundColor={'transparent'} barStyle="dark-content"  />

      <ThemeProvider>
        <ServicesProvider>
          <Suspense>
            <WeatherStack />
            {/* <ElementsStack /> */}
          </Suspense>
        </ServicesProvider>
      </ThemeProvider>
    </>
  )};
