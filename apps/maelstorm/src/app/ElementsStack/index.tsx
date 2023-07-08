import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Forecast from './Forecast.view';
import List from './List.view';

const Stack = createNativeStackNavigator();

export function ElementsStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={List.name}
        screenOptions={{ headerShown: false }}>
        <Stack.Screen
          component={List.component}
          name={List.name}
        />

        <Stack.Screen
          component={Forecast.component}
          name={Forecast.name}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
