import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import List from './List.view';
import Weather from './Weather.view';

const Stack = createNativeStackNavigator();

export function WeatherStack() {
  return (
    <NavigationContainer theme={{ colors: { background: 'transparent' }}}>
      <Stack.Navigator
        initialRouteName={List.name}
        screenOptions={{ headerShown: false }}>
        <Stack.Screen
          component={List.component}
          name={List.name}
        />

        <Stack.Screen
          component={Weather.component}
          name={Weather.name}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
