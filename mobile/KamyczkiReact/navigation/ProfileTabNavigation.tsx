import React from "react";
import { View, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { Routes } from "./Routes";
import ProfileTabTitle from "../components/ProfileTabTitle";

const ProfileTabs = createMaterialTopTabNavigator();

const Tab1 = () => {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Tab1 skibidi</Text>
        </View>
    );
};
const Tab2 = () => {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Tab2 skibidi</Text>
        </View>
    );
};
const Tab3 = () => {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Tab3 skibidi</Text>
        </View>
    );
};

export const ProfileTabsNavigation = () =>
    {
        return (
            <ProfileTabs.Navigator tabBarPosition="top" screenOptions={{
                tabBarIndicatorStyle:
                {
                    backgroundColor:'green',

                },
                tabBarStyle:
                {
                    zIndex:1,
                    elevation:1,
                },
            }}>
                <ProfileTabs.Screen name={'Tab1'} options={{
                    tabBarLabel:({focused}) => <ProfileTabTitle isFocused={focused} title={"Moje Kamyki"}/>
                }} component={Tab1}/>
                <ProfileTabs.Screen name={'Tab2'} options={{
                    tabBarLabel:({focused}) => <ProfileTabTitle isFocused={focused}  title={"Znalezione"}/>
                }} component={Tab2}/>
                <ProfileTabs.Screen name={'Tab3'} options={{
                    tabBarLabel:({focused}) => <ProfileTabTitle isFocused={focused} title={"Ulubione"}/>
                }} component={Tab3}/>
            </ProfileTabs.Navigator>
        );
    };