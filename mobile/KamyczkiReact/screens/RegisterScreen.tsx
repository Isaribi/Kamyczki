import React,{ useState } from 'react';
import {Button, Text, View,ScrollView, Pressable, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../components/AuthForm/Input';
import Title from '../components/Title';
import { useAuth } from '../context/AuthContext';
import { globalStyle } from '../assets/styles/globalStyles';

export default function RegisterScreen ({navigation}:any) {

    const [userName,setUserName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const {onRegister} = useAuth();

    const register = async () =>
    {
        const result = await onRegister!(email,password,userName);
        if(result)
        {
            if(result.status === 200)
            {
                Alert.alert("SPOKO","POMYSLNIE ZAREJESTROWANO")
                navigation.goBack();
            }
        }
    };

    return (
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={style.container}>
            <View style={{marginBottom:24}}>
                <Title title={'Registeranko'}/>
            </View>
            <View style={{marginBottom:24}}>
                <Input isPassword={false} keyboardType={'default'} onChangeText={(value) => setUserName(value)} placeHolder={'Wpisz nazwe uzytkownika...'} label={'Username'}/>
            </View>
            <View style={{marginBottom:24}}>
                <Input isPassword={false} keyboardType={'email-address'} onChangeText={(value) => setEmail(value)} placeHolder={'Wpisz e-mail...'} label={'Email'}/>
            </View>
            <View style={{marginBottom:24}}>
                <Input isPassword={true} onChangeText={(value) => setPassword(value)} placeHolder={'Wpisz hasło...'} label={'Hasło'}/>
            </View>
            <View>
                <Button onPress={register} title='Zatwierdź'/>
            </View>
            <Pressable onPress={() => navigation.goBack()}>
                <Text style={{marginTop:40, textAlign:'center', fontSize:18}}>Masz konto?
                    <Text style={{color:'lightblue'}}>Zaloguj się</Text>
                </Text>
            </Pressable>
            </ScrollView>
        </SafeAreaView>
    );
};
const style = StyleSheet.create({
    container:
    {
        marginHorizontal:24,
        flex:1,
        justifyContent:'center',
    },
    registerPressable:
    {
        alignItems:'center',
    }
});