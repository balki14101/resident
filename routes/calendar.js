import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './drawerContents'

import { CalendarStackScreen, CulinaryStackScreen} from './drawerStacks'



const Drawer = createDrawerNavigator();

export default function CalendarStack() {
    return (
        <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props} />}
        >
            <Drawer.Screen
                name="home"
                component={CalendarStackScreen} />
           

        </Drawer.Navigator>
    );
}


