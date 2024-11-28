import React,{ useRef, useState } from 'react';
import {Text, View,ScrollView, Pressable, StyleSheet, Alert, Image, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../components/AuthForm/Input';
import Title from '../components/Title';
import Button from '../components/Button';
import { useAuth } from '../context/AuthContext';
import { globalStyle } from '../assets/styles/globalStyles';

export default function RegisterScreen ({navigation}:any) {

    const [userName,setUserName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const {onRegister} = useAuth();

    const scrollViewRef = useRef<ScrollView>(null);

    const handleScrollToInput = (y: number) => {
        if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({
            y,
            animated: true,
        });
        }
    };

    const register = async () =>
    {
        // const result = await onRegister!(email,password,userName);
        // if(result)
        // {
        //     if(result.status === 200)
        //     {
        //         Alert.alert("SPOKO","POMYSLNIE ZAREJESTROWANO")
        //         navigation.goBack();
        //     }
        // }
    };

    return (
        <SafeAreaView style={[globalStyle.registerBackgroundScreen, globalStyle.flex]}>
        <ScrollView keyboardShouldPersistTaps='handled' ref={scrollViewRef} showsVerticalScrollIndicator={false}>
          <View style={style.pageName}>
            <Title title={'Zarejestruj się'} style={globalStyle.textColor}/>
          </View>
          <View style={style.pageContent}>
            <View style={style.inputContainer}>
              <View style={{width:'90%'}}>
                <View style={{marginBottom:3}}>
                    <Input onFocusScroll={handleScrollToInput} inputBackgroundColor={globalStyle.inputBackground.backgroundColor} isPassword={false} keyboardType={'default'} onChangeText={(value) => setUserName(value)} placeHolder={'Wpisz nazwę użytkownika...'} label={'Nazwa użytkownika'}/>
                </View>
                <View style={{marginBottom:3}}>
                    <Input onFocusScroll={handleScrollToInput} inputBackgroundColor={globalStyle.inputBackground.backgroundColor} isPassword={false} keyboardType={'email-address'} onChangeText={(value) => setEmail(value)} placeHolder={'Wpisz e-mail...'} label={'Email'}/>
                </View>
                <View style={{marginBottom:3}}>
                    <Input onFocusScroll={handleScrollToInput} inputBackgroundColor={globalStyle.inputBackground.backgroundColor} isPassword={true} onChangeText={(value) => setPassword(value)} placeHolder={'Wpisz hasło...'} label={'Hasło'}/>
                </View>
                <View style={{marginBottom:3}}>
                    <Input onFocusScroll={handleScrollToInput} inputBackgroundColor={globalStyle.inputBackground.backgroundColor} isPassword={true} onChangeText={(value) => setPassword(value)} placeHolder={'Wpisz hasło ponownie...'} label={'Powtórz hasło'}/>
                </View>
                </View>
            </View>
            <Pressable style={{marginBottom:6,marginLeft:3}}>
                <Text style={{color:'#5a8ed1', fontSize:13, lineHeight:13}}>BLA BLA AKCEPTUJESZ REGULAMIN APLIKACJI BLA BLA</Text>
            </Pressable>
          </View>
          <View style={style.buttonContainer}>
                <Button onPress={register} text='Utwórz konto' style={[globalStyle.buttonBackground,{width:'90%'}]}/>
                <Button onPress={() => navigation.goBack()} text="Powrót do logowania" style={[globalStyle.secondButtonBackground,{width:'90%'}]}
            />
          </View>
        </ScrollView>
    </SafeAreaView>
    );
};
const style = StyleSheet.create({
    logoContainer:
    {
      flexDirection:'column',
      alignItems:'center',
    },
    logoImage:
    {
      width:200,
      height:200
    },
    pageContent:
    {
        marginVertical:24,
    },
    pageName:
    {
      marginBottom:8,
      marginHorizontal:12,
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