import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {
  isMountedRef,
  navigationRef,
} from '../../services/navigation/navigationService';
import Menu from '../../common/screens/menu/Menu';
import Home from '../../common/screens/home/Home';

export type RootStackParamsList = {
  Home: undefined;
  Menu: undefined;
};

const Stack = createStackNavigator<RootStackParamsList>();

function Navigator() {
  /**
   * Hide the splash screen on mount
   * Keep track of nav container mounts for usage of {@link NavigationService}
   */
  useEffect(() => {
    isMountedRef.current = true;
    SplashScreen.hide();
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
