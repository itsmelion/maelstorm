import { useRouteRestauration } from '@elements/services';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ActivityIndicator } from 'react-native';

import List from './List.view';
import Weather from './Weather.view';

const Stack = createNativeStackNavigator();

export function WeatherStack() {
  const { isReady, ...routeState } = useRouteRestauration();

  if (!isReady) return <ActivityIndicator />

  return (
    <NavigationContainer {...routeState} theme={{ colors: { background: 'transparent' }}}>
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
