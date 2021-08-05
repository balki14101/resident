import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './drawerContents'

import { CulinaryStackScreen} from './drawerStacks'



const Drawer = createDrawerNavigator();

export default function CulinaryStack() {
    return (
        <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props} />}
        >
            <Drawer.Screen
                name="home"
                component={CulinaryStackScreen} />
           

        </Drawer.Navigator>
    );
}


