import 'react-native-reanimated';
import 'react-native-gesture-handler';
import { Container, TestProvider } from '@elements/components';
import { ServicesProvider, errorHandler } from '@elements/services';
import { Suspense } from 'react';
import {
  StatusBar, Text,
} from 'react-native';
import { setJSExceptionHandler } from 'react-native-exception-handler';

// Routes - Stacks
import { WeatherStack } from './WeatherStack';


/**
 * App, but without things that dont work on Jest
 */
export const AppMocked = () => {
  setJSExceptionHandler(errorHandler);

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <TestProvider>
        <ServicesProvider>
          <Suspense>
            <Container>
              <Text testID={'heading'}>My test is so cool!</Text>
              <WeatherStack />
              {/* <ElementsStack /> */}
            </Container>
          </Suspense>
        </ServicesProvider>
      </TestProvider>
    </>
  )};
