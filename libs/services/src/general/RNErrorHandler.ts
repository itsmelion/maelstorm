import {Alert} from 'react-native';
import {JSExceptionHandler} from 'react-native-exception-handler';
import RNRestart from 'react-native-restart';

/**
* Global Error Handlers
* @example https://github.com/a7ul/react-native-exception-handler#examples
* */

export const errorHandler: JSExceptionHandler = (e, isFatal) => {
  if (isFatal) {
    Alert.alert(
      'Unexpected error occurred',
      `
        Error: ${(isFatal) ? 'Fatal:' : ''} ${e.name} ${e.message}

        We will need to restart the app.
        `,
      [{
        text: 'Restart',
        onPress: () => {
          RNRestart.Restart();
        }
      }]
    );
  } else {
    console.warn(e); // So that we can see it in the ADB logs in case of Android if needed
  }
};
