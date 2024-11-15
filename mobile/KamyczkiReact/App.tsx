import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './navigation/MainNavigation';
import { AuthNavigation } from './navigation/AuthNavigation';
import { AuthProvider, useAuth } from './context/AuthContext';
import { BackHandler } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient();

const App = () => 
{
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
    return () => backHandler.remove();
  }, []);

  return (
    <AuthProvider>
      <Layout />
    </AuthProvider>
  );
};

export const Layout = () =>
{
  const { authState } = useAuth();
  return(
    <NavigationContainer>
      {authState?.isAuthenticated ? 
        <QueryClientProvider client={queryClient}>
          <MainNavigation/>
        </QueryClientProvider>  : 
        <AuthNavigation/>}
      {/* <MainNavigation /> */}
    </NavigationContainer>
    )
};
export default App;
