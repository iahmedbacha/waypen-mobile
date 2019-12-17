import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppNavigator from './src/navigation/AppNavigator';
import MainNavigation from './src/navigation/MainNavigation';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#8bc34a',
    accent: '#f1c40f',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <AppNavigator />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
