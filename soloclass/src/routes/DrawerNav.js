import 'react-native-gesture-handler';
import { Avatar } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import { DrawerContentScrollView, DrawerItem, createDrawerNavigator } from "@react-navigation/drawer";
import { Text, View } from 'react-native';
import Home from '../pages/Home';
import { sair } from '../services/authenticationService';
import { getLoggerUser } from '../data/DataRules';

const Drawer = createDrawerNavigator();

export default function DrawerNav() {

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
    const [ loggedUser, setLoggedUser ] = useState('');

    useEffect(() => {
        setLoggedUser(getLoggerUser());
    })

    return (
        <DrawerContentScrollView {...props}>
            <View style={{flexGrow: 2}}>
                <View
                    style={{margin:14, marginLeft:20, marginTop: 30}}
                >
                    <Avatar
                        size={64}
                        rounded
                        source={{ uri: "https://www.cdbradshaw.com/wp-content/uploads/2021/07/generic-avatar-240x300.jpg" }}
                    />
                    <Text style={{marginTop:8, fontSize:15}}>{loggedUser}</Text>
                </View>

                <DrawerItem
                    label="Configurações"
                    onPress={() => navigation.navigate('Configurações')}
                />
                <DrawerItem
                    label="Sair"
                    onPress={() => sair(navigation)}
                />
            </View>
        </DrawerContentScrollView>
    );
}