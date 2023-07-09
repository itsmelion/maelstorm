import '@testing-library/jest-native/extend-expect';
import 'react-native-gesture-handler/jestSetup';

process.env.TAMAGUI_TARGET = 'native';

jest.mock('react-native-reanimated', () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => undefined;

  return Reanimated;
});
