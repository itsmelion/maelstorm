import { ThemeProvider } from '@elements/components';
import { ServicesProvider } from '@elements/services';
import { Suspense } from 'react';

import {
  Text,
  StatusBar,
} from 'react-native';

export const App = () => (
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
);
