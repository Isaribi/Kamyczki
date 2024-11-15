import React from 'react';
import {Text, View, StyleSheet } from 'react-native';

interface ProfileTabTitleProp
{
    title:string
    isFocused:boolean
}

export default function ProfileTabTitle(props:ProfileTabTitleProp) {
  return (
    <View>
      <Text style={[style.title, !props.isFocused && style.titleNotFocused]}>{props.title}</Text>
    </View>
  );
}

const style = StyleSheet.create({
    title:{
        color:'black',
        // fontFamily:getFontFamily('Inter_24pt','500'),
        fontSize:15,
        padding:8,
    },
    titleNotFocused:{
        color:'gray',
        // fontFamily:getFontFamily('Inter_24pt','normal'),
    },
});