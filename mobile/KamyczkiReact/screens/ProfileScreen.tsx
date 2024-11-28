import React from 'react';
import {Button, SafeAreaView,ScrollView, Text, View, StyleSheet } from 'react-native';
import { globalStyle } from '../assets/styles/globalStyles';
import UserProfileImage from '../components/UserProfileImage';
import { ProfileTabsNavigation } from '../navigation/ProfileTabNavigation';
import { useAuth } from '../context/AuthContext';
import { Routes } from '../navigation/Routes';

const Profile = ({navigation}:any) => {

  const {onLogout} = useAuth();

  const logout = async () =>
    {
      const result = await onLogout!();
      if(result && result.error)
      {
        console.log(result);
      }
    };

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView contentContainerStyle={globalStyle.flexGrow}>
        <View style={style.profileImageContainer}>
          <UserProfileImage imageDimensions={110} profileImage={require('../assets/images/logo.jpg')} />
        </View>
        <Text style={style.profileName}>Masny Ben</Text>
        <Text style={style.karmaText}>Karma: 50</Text>
        <Button title='WYLOGUJ' onPress={() => navigation.openDrawer()}/>
        <View style={style.statContainer}>
          <View>
            <Text style={style.statAmount}>51</Text>
            <Text style={style.statType}>Kamyczki</Text>
          </View>
          <View>
            <Text style={style.statAmount}>123</Text>
            <Text style={style.statType}>Znalezione</Text>
          </View>
          <View>
            <Text style={style.statAmount}>123</Text>
            <Text style={style.statType}>Polubienia</Text>
          </View>
        </View>
        <View style={globalStyle.flex}>
          <ProfileTabsNavigation/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const style = StyleSheet.create({
    profileImageContainer:
    {
        flexDirection:'row',
        justifyContent:'center',
        marginTop:50,
    },
    profileName:
    {
        marginTop:20,
        textAlign:'center',
        // fontFamily:getFontFamily('Inter_24pt','600'),
        fontSize:24,
    },
    statAmount:
    {
        // fontFamily:getFontFamily('Inter_24pt','600'),
        fontSize:18,
        textAlign:'center',
    },
    statType:
    {
        // fontFamily:getFontFamily('Inter_24pt','400'),
        fontSize:14,
        color:'gray',
        textAlign:'center',
    },
    statContainer:
    {
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-around',
        marginVertical:20,
    },
    karmaText:
    {
        marginTop:20,
        textAlign:'center',
        // fontFamily:getFontFamily('Inter_24pt','600'),
        fontSize:14,
        color:'green',
    }
});
