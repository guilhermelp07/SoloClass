import 'react-native-gesture-handler';
import { Avatar } from '@rneui/themed';
import React from 'react';
import { DrawerContentScrollView, DrawerItem, createDrawerNavigator } from "@react-navigation/drawer";
import { Text, View } from 'react-native';

import Home from '../pages/Home';

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
    return (
        <Drawer.Navigator
            screenOptions={{headerTitleAlign: 'center'}}
            drawerContent={(props) => <CustomDrawerComp {...props} />}
        >
            <Drawer.Screen name='SoloClass' component={Home} options={{headerShown: true}} />
        </Drawer.Navigator>
    );
}

export const CustomDrawerComp = (props) => {
    const {navigation} = props;

    return (
        <DrawerContentScrollView {...props}>
            <View style={{flexGrow: 2}}>
                <View>
                <Avatar
    size={64}
    rounded
    source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
  />
                </View>

  <Text>Josefino dos Santos</Text>

                <DrawerItem
                    label="Configurações"
                    onPress={() => navigation.navigate('Configurações')}
                />
                <DrawerItem
                    label="Sair"
                    onPress={() => navigation.navigate('Login')}
                />
            </View>
        </DrawerContentScrollView>
    );
}