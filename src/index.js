import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import Routes from './routes';

import './config/reactotronConfig';

function App() {
  return (
    <NavigationContainer>
      <Routes />
      <StatusBar barStyle="light-content" backgroundColor="#141419" />
    </NavigationContainer>
  );
}

export default App;
