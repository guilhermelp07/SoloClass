import 'react-native-gesture-handler';
import { Avatar } from '@rneui/themed';
import React, { useState } from 'react';
import { DrawerContentScrollView, DrawerItem, createDrawerNavigator } from "@react-navigation/drawer";
import { Text, View } from 'react-native';
import Home from '../pages/Home';

import firebase from '../database/FirebaseConfig';
import { getAuth, signOut } from "firebase/auth";

const Drawer = createDrawerNavigator();

export default function DrawerNav() {

    const [ username, setUsername ] = useState('');

    return (
        <Drawer.Navigator
            screenOptions={{headerTitleAlign: 'center'}}
            drawerContent={(props) => <CustomDrawerComp {...props} /> }
        >
            <Drawer.Screen name='SoloClass' component={Home} options={{headerShown: true}} />
        </Drawer.Navigator>
    );
}

export const CustomDrawerComp = (props) => {
    const {navigation} = props;

    function sair(){
        const auth = getAuth(firebase);
        signOut(auth).then(() => {
            console.log("logout")
            // alert("Saiu")
            navigation.navigate("Login");
        }).catch((error) => {
            console.log(error)
            alert("Erro: "+error)
        })
    }

    return (
        <DrawerContentScrollView {...props}>
            <View style={{flexGrow: 2}}>
                <View
                    style={{margin:14, marginLeft:20}}
                >
                    <Avatar
                        size={64}
                        rounded
                        source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
                    />
                    <Text style={{marginTop:8, fontSize:15}}>Teste</Text>
                </View>

                <DrawerItem
                    label="Configurações"
                    onPress={() => navigation.navigate('Configurações')}
                />
                <DrawerItem
                    label="Sair"
                    onPress={sair}
                />
            </View>
        </DrawerContentScrollView>
    );
}