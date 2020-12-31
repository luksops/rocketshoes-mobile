import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/Header';

/* const defaultNavigationOptions = {
  headerBackTitleVisible: false,
  headerTitleAlign: 'center',
  headerTintColor: '#FFF',
  headerStyle: {
    backgroundColor: '#141419',
  },
}; */

const defaultNavigationOptions = {
  headerTitle: () => <Header />,
  headerLeft: () => null,
  headerStyle: {
    backgroundColor: '#141419',
    height: 100,
  },
  headerBackTitleVisible: false,
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
