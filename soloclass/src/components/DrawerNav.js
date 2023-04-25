import { createDrawerNavigator } from "@react-navigation/drawer";

import Config from '../../src/pages/Config';

export default function DrawerNav() {

    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Configurações" component={Config} />
        </Drawer.Navigator>
    );
}