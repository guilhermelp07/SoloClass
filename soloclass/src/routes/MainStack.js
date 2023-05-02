import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Login from '../pages/Login';
import ListagemSolos from '../pages/ListagemSolos';
import Config from '../pages/Config';
import DrawerNav from './DrawerNav';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import NovoSolo from '../pages/NovoSolo';
import CadastrarUsuario from '../pages/CadastrarUsuario';
import RecuperarSenha from '../pages/RecuperarSenha';
import DetalhesSolo from '../pages/DetalhesSolo';
import CameraScreen from '../pages/Camera';

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
            <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
                <Stack.Screen name="Home" component={DrawerNav} options={{headerShown: false}} />
                <Stack.Screen name="Histórico de Solos" component={ListagemSolos} />
                <Stack.Screen name="Configurações" component={Config} />
                <Stack.Screen name="Novo Solo" component={NovoSolo} />
                <Stack.Screen name="Cadastrar Usuário" component={CadastrarUsuario} />
                <Stack.Screen name="Recuperar Senha" component={RecuperarSenha} />
                <Stack.Screen name="Detalhes do Solo" component={DetalhesSolo} />
                <Stack.Screen name="Camera" component={CameraScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}