import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DashboardDrawer from './routes/DashboardDrawer';
import NewEmail from './pages/NewEmail';
import ReadEmail from './pages/ReadEmail';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        name="Dashboard"
        component={DashboardDrawer}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="New"
        component={NewEmail}
        options={() => ({
          title: 'Compose',
          headerStyle: { elevation: 0 },
          headerTitleStyle: { fontSize: 20, fontFamily: 'Roboto' },

          headerRightContainerStyle: { marginRight: 20 },
        })}
      />
      <Stack.Screen
        name="ReadEmail"
        component={ReadEmail}
        options={() => ({
          headerStyle: { elevation: 0 },
          headerTitleStyle: { display: 'none' },
          headerRightContainerStyle: { marginRight: 20 },
        })}
      />
    </Stack.Navigator>
  );
}
