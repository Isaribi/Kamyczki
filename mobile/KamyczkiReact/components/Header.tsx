import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet  } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Title from './Title';
import { Routes } from '../navigation/Routes';
import AntDesign from '@expo/vector-icons/AntDesign';

const Header = ({navigation}:any) => {
  return (
    <View style={styles.headerView}>
        <Title title={'Daj kamienia'}/>
        <TouchableOpacity style={styles.messageIcon} onPress={() => {navigation.openDrawer();}}>
          {/* <FontAwesomeIcon icon={faEnvelope} color={'black'} size={20}/> */}
          <AntDesign name="user" size={26} color="black" />
          {/* <View style={styles.messageNumberContainer}>
            <Text style={styles.messageNumber}>2</Text>
          </View> */}
        </TouchableOpacity>
      </View>
  );
};
const styles = StyleSheet.create({
    headerView:
    {
        marginLeft:27,
        marginRight:18,
        marginTop:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    messageIcon:
    {
        padding:14,
    },
    messageNumberContainer:
    {
        backgroundColor:'#F35BAC',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:20,
        height:20,
        borderRadius:20,
        position:'absolute',
        right:0,
    },
    messageNumber:
    {
        color:'white',
        fontSize:12,
    },
});

export default Header;

