import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../pages/Home';

import DrawerContent from '../components/Drawer';

const Drawer = createDrawerNavigator();

export default function DashboardDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Primary"
      drawerContent={props => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Primary"
        component={HomeScreen}
        options={{
          drawerIcon: () => <Icon name="inbox" size={28} color="#D93025" />,
        }}
      />
    </Drawer.Navigator>
  );
}
