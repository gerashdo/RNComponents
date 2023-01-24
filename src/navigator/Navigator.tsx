import { createStackNavigator } from '@react-navigation/stack';
import { AlertScreen } from '../screens/AlertScreen';
import { Animation101Screen } from '../screens/Animation101Screen';
import { Animation102Screen } from '../screens/Animation102Screen';
import { HomeScreen } from '../screens/HomeScreen';
import { SwitchScreen } from '../screens/SwitchScreen';

export type RootStackParamList = {
  HomeScreen: undefined;
  Animation101Screen: undefined;
  Animation102Screen: undefined;
  SwitchScreen: undefined;
  AlertScreen: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();

export const Navigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
    >
      <Stack.Screen name="HomeScreen" component={ HomeScreen } />
      <Stack.Screen name="Animation101Screen" component={ Animation101Screen } />
      <Stack.Screen name="Animation102Screen" component={ Animation102Screen } />
      <Stack.Screen name="SwitchScreen" component={ SwitchScreen } />
      <Stack.Screen name="AlertScreen" component={ AlertScreen } />
    </Stack.Navigator>
  );
}