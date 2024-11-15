import React, { useEffect ,useState} from 'react';
import {Button, Text, View, ScrollView, Pressable, Alert, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyle } from '../assets/styles/globalStyles';
import Input from '../components/AuthForm/Input';
import Title from '../components/Title';
import { Routes } from '../navigation/Routes';
import { useAuth } from '../context/AuthContext';

export default function LoginScreen({navigation}:any) {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const {onLogin} = useAuth();

  const login = async () =>
  {
    const result = await onLogin!(email,password);
    
    console.log(result);
  };

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={style.container}>
          <View style={{marginBottom:24}}>
            <Title title={'Logowanko'}/>
          </View>
          <View style={{marginBottom:24}}>
            <Input isPassword={false} keyboardType={'email-address'} onChangeText={(value) => setEmail(value)} placeHolder={'Wpisz e-mail...'} label={'Email'}/>
          </View>
          <View style={{marginBottom:24}}>
            <Input isPassword={true} onChangeText={(value) => setPassword(value)} placeHolder={'Wpisz hasło...'} label={'Hasło'}/>
          </View>
          <View>
            <Button onPress={login} title='Zatwierdź'/>
          </View>
          <Pressable style={style.registerPressable} onPress={() => navigation.navigate(Routes.Register)}>
            <Text style={{marginTop:40, textAlign:'center', fontSize:18}}>Nie masz konta? 
                <Text style={{color:'lightblue'}}>Zarejestruj się!</Text>
            </Text>
          </Pressable>
        </ScrollView>
    </SafeAreaView>
  );
};

export const style = StyleSheet.create({
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