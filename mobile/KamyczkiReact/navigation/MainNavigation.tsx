import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Profile from "../screens/Profile/Profile";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { BlurView } from 'expo-blur';
import { Routes } from './Routes';
import Home from '../screens/HomeScreen';
import Profile from '../screens/ProfileScreen';
import Ionicons from '@expo/vector-icons/Ionicons';

const MainTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// const MainMenuNavigation = () =>
// {
//     return(
//         <Drawer.Navigator screenOptions={{headerShown:false, drawerType:'front', swipeEdgeWidth:70}}>
//             <Drawer.Screen name={Routes.Home} component={Home}/>
//             <Drawer.Screen name={Routes.Profile} component={Profile}/>
//         </Drawer.Navigator>
//     );
// };

// const TabBarIcon = (props:any) =>
// {
//     return(<View style={{ justifyContent: 'center', alignItems: 'center' }}>
//         <Ionicons
//             name={props.name}
//             size={24}
//             color={props.isFocused ? 'green' : 'gray'}
//         />
//         </View>)
// }

const MainNavigation = () => {
  return (
    // <MainTab.Navigator screenOptions={{headerShown:false,animation:'shift', tabBarStyle:style.tabNavigator,tabBarItemStyle:style.tabBarItemStyle, tabBarBackground: () => (
    //     <View style={{borderRadius:16, overflow:'hidden'}}>
    //         <BlurView tint="extraLight" intensity={100} style={StyleSheet.absoluteFill} />
    //     </View>
    //   ),}}>
    // <MainTab.Navigator screenOptions={{
    //     headerShown:false,
    //     tabBarStyle:
    //     {
    //         zIndex:1,
    //         elevation:1,
    //     },
    // }}>
    //     <MainTab.Screen name={Routes.Home} component={Home} options={{tabBarIcon:({focused}) => (<TabBarIcon name='home' isFocused={focused}/>),tabBarActiveTintColor:'green'}}/>
    //     <MainTab.Screen name={Routes.Profile} component={Profile} options={{tabBarIcon:({focused}) => (<TabBarIcon name='settings' isFocused={focused}/>),tabBarActiveTintColor:'green'}}/>
    //     {/* <Stack.Screen name={'Drawer'} component={MainMenuNavigation} /> */}
    // </MainTab.Navigator>
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        swipeEnabled: false,
        drawerPosition: 'right',
        drawerStatusBarAnimation: 'slide',
        drawerStyle: { width: '60%', borderRadius: 0 },
        drawerContentContainerStyle: {
          borderRadius: 0,
        },
        drawerLabelStyle: { textAlign: 'center' },
      }}>
      <Drawer.Screen name={Routes.Home} component={Home} />
      <Drawer.Screen name={Routes.Profile} component={Profile} />
    </Drawer.Navigator>
  );
};

const style = StyleSheet.create({
  tabNavigator: {
    position: 'absolute',
    marginHorizontal: '10%',
    borderRadius: 16, // Zaokrąglenie
    backgroundColor: 'rgba(255,255,255,1)', // Tło paska
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 5,
    borderTopWidth: 0,
  },
  tabBarItemStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    margin: 0,
  },
});
export default MainNavigation;
