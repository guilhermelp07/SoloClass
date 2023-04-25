import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/pages/Home';
import ListagemSolos from './src/pages/ListagemSolos';
import Login from './src/pages/Login';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {

  return (
    <NavigationContainer
      style={{backgroundColor: '#DAFFF9'}}
    >
      <Stack.Navigator style={{backgroundColor: '#DAFFF9'}}>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchArea: {
    flex: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40
  },
  input: {
    height: 40,
    borderColor: '#000',
    borderWidth: 2,
    marginTop: 20,
    marginBottom: 20,
    width: 280
  }
});