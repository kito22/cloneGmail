import React from 'react';

import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './Routes';

const App = () => {
  return (
    <NavigationContainer>
      <>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <Routes />
      </>
    </NavigationContainer>
  );
};

export default App;
