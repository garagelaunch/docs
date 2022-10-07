import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import 'react-native-gesture-handler';
import { Poppins_700Bold } from '@expo-google-fonts/poppins';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NativeBaseProvider, View } from 'native-base';
import React, { useCallback, useEffect, useState } from 'react';
import { AppState, AppStateStatus, Platform } from 'react-native';
import { QueryClientProvider, focusManager } from 'react-query';

import { AuthProvider } from '@src/providers/AuthProvider';
import { Routes } from '@src/routes';
import { queryClient } from '@src/services/queryClient';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  function onAppStateChange(status: AppStateStatus) {
    if (Platform.OS !== 'web') {
      focusManager.setFocused(status === 'active');
    }
  }

  useEffect(() => {
    const subscription = AppState.addEventListener('change', onAppStateChange);

    return () => subscription.remove();
  }, []);

  useEffect(() => {
    async function prepareApp() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Poppins_700Bold,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepareApp();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <NativeBaseProvider>
      <QueryClientProvider client={queryClient}>
        <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
          <NavigationContainer>
            <AuthProvider>
              <Routes />
            </AuthProvider>
          </NavigationContainer>
        </View>
      </QueryClientProvider>
    </NativeBaseProvider>
  );
}
