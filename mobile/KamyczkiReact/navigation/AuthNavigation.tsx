import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './Routes';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import PasswordRecoveryScreen from '../screens/PasswordRecoveryScreen';
//import { globalStyle } from "../assets/styles/globalStyles";

const Stack = createNativeStackNavigator();

export const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
      <Stack.Screen
        options={{ animation: 'ios_from_left' }}
        name={Routes.Login}
        component={LoginScreen}
      />
      <Stack.Screen
        options={{ animation: 'ios_from_right' }}
        name={Routes.Register}
        component={RegisterScreen}
      />
      <Stack.Screen
        options={{ animation: 'ios_from_right' }}
        name={Routes.PasswordRecovery}
        component={PasswordRecoveryScreen}
      />
    </Stack.Navigator>
  );
};
