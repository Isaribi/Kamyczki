import React, {useState} from 'react';
import {Text, TextInput, View, StyleSheet, KeyboardTypeOptions } from 'react-native';

interface InputProps
{
    placeHolder:string;
    label:string;
    onChangeText(val: string):any;
    keyboardType?:KeyboardTypeOptions | undefined,
    isPassword:boolean,
}

const Input = (props:InputProps) => {
    const [value,setValue] = useState('');

  return (
    <View>
        <Text style={style.label}>{props.label}</Text>
        <TextInput  placeholder={props.placeHolder ? props.placeHolder : ''}
                    style={style.input}
                    value={value}
                    keyboardType={props.keyboardType || 'default'}
                    secureTextEntry={props.isPassword}
                    onChangeText={(val) => {setValue(val); props.onChangeText(val)}} />
    </View>
  );
};
export default Input;
export const style = StyleSheet.create({
    label:
    {
        fontWeight:'400',
        fontSize:15,
        lineHeight:15,
        color:'gray',
    },
    input:
    {
        paddingVertical:12,
        borderBottomWidth:1,
        borderBottomColor:'lightgray',
    },
});
