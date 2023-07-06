import { ThemeProvider } from '@elements/components';
import { Suspense } from 'react';

import {
  Text,
  StatusBar,
} from 'react-native';

export const App = () => (
  <>
    <StatusBar barStyle="dark-content" />

    <ThemeProvider>
      <Suspense>
        <Text testID='heading'>Hello</Text>
      </Suspense>
    </ThemeProvider>
  </>
);
