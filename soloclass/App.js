import 'react-native-gesture-handler';
import React from 'react';
import Navigator from './src/routes/MainStack';
import { useFonts } from 'expo-font';

export default function App() {

  const [fontsLoaded] = useFonts({
    'FFF_Tusj': require('./assets/fonts/FFF_Tusj.ttf'),
    'QuickSand': require('./assets/fonts/quicksand/Quicksand-Regular.otf'),
    'QuickSand-Bold': require('./assets/fonts/quicksand/Quicksand-Bold.otf')
  });

  if (!fontsLoaded){
    return null;
  }

  return (
    <Navigator/>
  );
}