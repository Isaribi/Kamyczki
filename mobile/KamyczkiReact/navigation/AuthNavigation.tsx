import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "./Routes";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createNativeStackNavigator();

export const AuthNavigation = () =>
    {
        return(
        <Stack.Navigator screenOptions={{headerShown:false, animation:'simple_push', animationDuration:5}}>
            <Stack.Screen name={Routes.Login} component={LoginScreen}/> 
            <Stack.Screen name={Routes.Register} component={RegisterScreen}/>
        </Stack.Navigator>
        );
    }