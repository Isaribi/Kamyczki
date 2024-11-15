import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet  } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Title from './Title';
import { Routes } from '../navigation/Routes';

const Header = ({navigation}:any) => {
  return (
    <View style={styles.headerView}>
        <Title title={'Daj kamienia'}/>
        <TouchableOpacity style={styles.messageIcon} onPress={() => {navigation.navigate(Routes.Profile);}}>
          {/* <FontAwesomeIcon icon={faEnvelope} color={'black'} size={20}/> */}
          <Ionicons name='mail' size={20} color={'black'} />
          <View style={styles.messageNumberContainer}>
            <Text style={styles.messageNumber}>2</Text>
          </View>
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
        backgroundColor:'lightgray',
        borderRadius:100,
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

