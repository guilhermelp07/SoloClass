import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Login from '../pages/Login';
import Home from '../pages/Home';
import ListagemSolos from '../pages/ListagemSolos';
import Config from '../pages/Config';
import DrawerNav from './DrawerNav';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const myTheme = {
    ...DefaultTheme,
    colors: {
        card: '#459C9C',
    }
  };

export default function MainStack(){
    return (
        <NavigationContainer theme={myTheme}>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
                <Stack.Screen name="Home" component={DrawerNav} options={{headerShown: false}} />
                <Stack.Screen name="Histórico de Solos" component={ListagemSolos} />
                <Stack.Screen name="Configurações" component={Config} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}