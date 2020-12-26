import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import Cart from './pages/Cart';

const defaultNavigationOptions = {
  headerBackTitleVisible: false,
  headerTitleAlign: 'center',
  headerTintColor: '#FFF',
  headerStyle: {
    backgroundColor: '#7159c1',
  },
};

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator screenOptions={defaultNavigationOptions}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}
