import 'react-native-gesture-handler';
import React from 'react';
import Navigator from './src/routes/MainStack';
import { DefaultTheme } from '@react-navigation/native';

const myTheme = {
  ...DefaultTheme,
  colors: {
      ...DefaultTheme.colors,
      primary: '#DAFFF9',
      background: '#DAFFF9',
  }
}

export default function App() {
  return (
    <Navigator/>
  );
}