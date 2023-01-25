import { createStackNavigator } from '@react-navigation/stack';
import { AlertScreen } from '../screens/AlertScreen';
import { Animation101Screen } from '../screens/Animation101Screen';
import { Animation102Screen } from '../screens/Animation102Screen';
import { CustomSectionListScreen } from '../screens/CustomSectionListScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { InfiniteScreen } from '../screens/InfiniteScreen';
import { ModalScreen } from '../screens/ModalScreen';
import { PullToRefreshScreen } from '../screens/PullToRefreshScreen';
import { SwitchScreen } from '../screens/SwitchScreen';
import { TextInputScreen } from '../screens/TextInputScreen';

export type RootStackParamList = {
  HomeScreen: undefined;
  Animation101Screen: undefined;
  Animation102Screen: undefined;
  SwitchScreen: undefined;
  AlertScreen: undefined;
  TextInputScreen: undefined;
  PullToRefreshScreen: undefined;
  CustomSectionListScreen: undefined;
  ModalScreen: undefined;
  InfiniteScreen: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();

export const Navigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {
              backgroundColor: 'white'
            }
        }}
        initialRouteName="HomeScreen"
        
    >
      <Stack.Screen name="HomeScreen" component={ HomeScreen } />
      <Stack.Screen name="Animation101Screen" component={ Animation101Screen } />
      <Stack.Screen name="Animation102Screen" component={ Animation102Screen } />
      <Stack.Screen name="SwitchScreen" component={ SwitchScreen } />
      <Stack.Screen name="AlertScreen" component={ AlertScreen } />
      <Stack.Screen name="TextInputScreen" component={ TextInputScreen } />
      <Stack.Screen name="PullToRefreshScreen" component={ PullToRefreshScreen } />
      <Stack.Screen name="CustomSectionListScreen" component={ CustomSectionListScreen } />
      <Stack.Screen name="ModalScreen" component={ ModalScreen } />
      <Stack.Screen name="InfiniteScreen" component={ InfiniteScreen } />
    </Stack.Navigator>
  );
}