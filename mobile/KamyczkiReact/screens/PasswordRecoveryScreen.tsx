import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Title from '../components/Title';
import { globalStyle } from '../assets/styles/globalStyles';
import Input from '../components/AuthForm/Input';
import Button from '../components/Button';
import { Routes } from '../navigation/Routes';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PasswordRecoveryScreen({navigation}:any) {
    const [email,setEmail] = useState('');

    return (
        <SafeAreaView style={[globalStyle.backgroundScreen, globalStyle.flex]}>
            <View style={style.container}>
              <View style={style.pageName}>
                <Title title={'Przywracanie hasła'} style={globalStyle.textColor}/>
              </View>
              <View style={style.pageContent}>
                <View style={style.inputContainer}>
                  <View style={{width:'90%'}}>
                    <View>
                        <Text style={style.textStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                    </View>
                    <View style={{marginBottom:16}}>
                      <Input inputBackgroundColor={globalStyle.inputBackground.backgroundColor} isPassword={false} keyboardType={'email-address'} onChangeText={(value) => setEmail(value)} placeHolder='Wpisz e-mail...' label={'Email'}/>
                    </View>
                  </View>
                </View>
              </View>
              <View style={style.buttonContainer}>
                    <Button onPress={() => navigation.goBack()} text="Potwierdź" style={[globalStyle.buttonBackground,{width:'90%'}]}/>
                    <Button onPress={() => navigation.goBack()} text="Powrót" style={[globalStyle.secondButtonBackground,{width:'90%'}]}/>
              </View>
            </View>
        </SafeAreaView>
      );
    };
    
    export const style = StyleSheet.create({
        container:
        {
            flex:1,
        },
        pageName:
        {
          marginBottom:8,
          marginHorizontal:12,
        },
        pageContent:
        {
        },
        textStyle:
        {
            fontSize:16,
            lineHeight:18,
            marginVertical:12,
            color:'gray',

        },
        inputContainer:
        {
          flexDirection:'row',
          justifyContent:'center',
        },
        buttonContainer:
        {
          flex:1,
          alignItems:'center',
          justifyContent:'flex-start',
        },
    });