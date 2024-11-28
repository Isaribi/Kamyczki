import React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { Alert } from 'react-native';
import { ErrorHandler } from '../utils/error-handler';

interface AuthProps {
  authState?: { token: string | null; isAuthenticated: boolean | null };
  onRegister?: (email: string, password: string, userName: string) => Promise<any>;
  onLogin?: (email: string, password: string) => Promise<any>;
  onLogout?: () => Promise<any>;
}

const AuthContext = createContext<AuthProps>({});
export const API_URL = 'http://192.168.18.2:8080';
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: any) => {
  const [authState, setAuthState] = useState<{
    token: string | null;
    isAuthenticated: boolean | null;
  }>({
    token: null,
    isAuthenticated: false,
  });

  useEffect(() => {
    const loadToken = async () => {
      const token = await SecureStore.getItemAsync('access_token');
      //const token = await AsyncStorage.getItem('access_token');
      if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setAuthState({
          token: token,
          isAuthenticated: false,
        });
      } else {
        setAuthState({
          token: null,
          isAuthenticated: false,
        });
      }
    };

    loadToken();
  }, []);

  const register = async (username: string, password: string, email: string) => {
    try {
      return await axios.post(`${API_URL}/auth/api/user/register`, { username, password, email });
    } catch (e) {
      console.log(e);
    }
  };
  const login = async (email: string, password: string) => {
    try {
      const result = await axios
        .post(`${API_URL}/auth/api/auth/sign-in`, {
          username: email,
          password: password,
        })
        .then(res => {
          setAuthState({
            token: res.data.token,
            isAuthenticated: true,
          });

          axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
          SecureStore.setItem('access_token', res.data.token);
        })
        .catch(err => {
          ErrorHandler(err.response.data);
        });
      return result;
    } catch (e) {
      return Alert.alert('Coś poszło nie tak', 'Spróbuj ponownie');
    }
  };
  const logout = async () => {
    await SecureStore.deleteItemAsync('access_token');
    axios.defaults.headers.common['Authorization'] = '';
    setAuthState({
      token: null,
      isAuthenticated: false,
    });
  };

  const value = {
    onRegister: register,
    onLogin: login,
    onLogout: logout,
    authState,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
