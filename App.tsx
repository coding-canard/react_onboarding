/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Easing, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Onboarding } from './src/components/Onboarding';
import {
  Register,
  Login,
  ForgotPassword,
} from './src/components/Authentication';
import { Home } from './src/components/AppScreens';
// import Template from './src/utils/TestFile';

const SCREEN_TRANSITION_DURATION = 200;
const SCREEN_SLIDE_DURATION = 500;
const { height } = Dimensions.get('window');

const transitionConfig = {
  animation: 'timing',
  config: {
    duration: SCREEN_TRANSITION_DURATION,
    easing: Easing.linear,
  },
};

const slideConfig = {
  animation: 'timing',
  config: {
    duration: SCREEN_SLIDE_DURATION,
    easing: Easing.linear,
  },
};

interface forFadeProps {
  current: any;
}

const forFade = ({ current }: forFadeProps) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

interface zoomUpProps {
  current: any;
}

const zoomUp = ({ current }: zoomUpProps) => ({
  cardStyle: {
    transform: [
      {
        translateY: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [height, 0],
        }),
      },
    ],
  },
});

const token = 1;

const AppStack = createStackNavigator();
const AppNavigator = () => {
  return (
    <AppStack.Navigator
      headerMode={'none'}
      screenOptions={{
        gestureEnabled: false,
      }}
      initialRouteName={token === 1 ? 'Onboarding' : 'Login'}>
      <AppStack.Screen name="Onboarding" component={Onboarding} />
      <AppStack.Screen
        name="Login"
        component={Login}
        options={{
          transitionSpec: {
            open: transitionConfig,
            close: transitionConfig,
          },
          cardStyleInterpolator: forFade,
        }}
      />
      <AppStack.Screen
        name="Register"
        component={Register}
        options={{
          transitionSpec: {
            open: slideConfig,
            close: slideConfig,
          },
          cardStyleInterpolator: forFade,
        }}
      />
      <AppStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          transitionSpec: {
            open: slideConfig,
            close: slideConfig,
          },
          cardStyleInterpolator: forFade,
        }}
      />
      <AppStack.Screen
        name="Home"
        component={Home}
        options={{
          transitionSpec: {
            open: slideConfig,
            close: slideConfig,
          },
          cardStyleInterpolator: forFade,
        }}
      />
      {/* <AppStack.Screen name="Testing" component={Template} /> */}
    </AppStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
