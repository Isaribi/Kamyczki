import React, { useRef, useState } from 'react';
import { Text, View, ScrollView, Pressable, Alert, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyle } from '../assets/styles/globalStyles';
import Input from '../components/AuthForm/Input';
import Title from '../components/Title';
import { Routes } from '../navigation/Routes';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { onLogin } = useAuth();

  const scrollViewRef = useRef<ScrollView>(null);

  const handleScrollToInput = (y: number) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        y,
        animated: true,
      });
    }
  };

  const login = async () => {
    // const result = await onLogin!(email,password);
    // console.log(result);
  };

  return (
    <SafeAreaView style={[globalStyle.backgroundScreen, globalStyle.flex]}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}>
        <View style={style.pageName}>
          <Title title={'Zaloguj się'} style={globalStyle.textColor} />
        </View>
        <View style={style.logoContainer}>
          <Image source={require('.././assets/images/logo.png')} style={style.logoImage} />
          {/* <Text style={{fontSize:24}}>Kamyczki</Text> */}
        </View>
        <View style={style.pageContent}>
          <View style={style.inputContainer}>
            <View style={{ width: '90%' }}>
              <View style={{ marginBottom: 1 }}>
                <Input
                  onFocusScroll={handleScrollToInput}
                  inputBackgroundColor={globalStyle.inputBackground.backgroundColor}
                  isPassword={false}
                  keyboardType={'email-address'}
                  onChangeText={value => setEmail(value)}
                  placeHolder="Wpisz e-mail..."
                  label={'Email'}
                />
              </View>
              <View style={{ marginBottom: 2 }}>
                <Input
                  onFocusScroll={handleScrollToInput}
                  inputBackgroundColor={globalStyle.inputBackground.backgroundColor}
                  isPassword={true}
                  onChangeText={value => setPassword(value)}
                  placeHolder={'Wpisz hasło...'}
                  label={'Hasło'}
                />
              </View>
              <Pressable
                style={{ marginBottom: 6, marginLeft: 3 }}
                onPress={() => navigation.push(Routes.PasswordRecovery)}>
                <Text style={{ color: '#5a8ed1', fontSize: 16, lineHeight: 16 }}>
                  Nie pamiętasz hasła?
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={style.buttonContainer}>
          <Button
            onPress={login}
            text="Zaloguj się"
            style={[globalStyle.buttonBackground, { width: '90%' }]}
          />
          <Button
            onPress={() => navigation.push(Routes.Register)}
            text="Zarejestruj się"
            style={[globalStyle.secondButtonBackground, { width: '90%' }]}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export const style = StyleSheet.create({
  logoContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  logoImage: {
    width: 200,
    height: 200,
  },
  pageContent: {},
  pageName: {
    marginBottom: 8,
    marginHorizontal: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
