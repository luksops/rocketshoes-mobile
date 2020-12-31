import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { Container, Logo } from './styles';

function Header() {
  const navigation = useNavigation();
  return (
    <Container>
      <Pressable
        onPress={() => {
          navigation.navigate('Home');
        }}
      >
        <Logo />
      </Pressable>

      <Pressable onPress={() => navigation.navigate('Cart')}>
        <Icon name="basket" color="#fff" size={40} />
      </Pressable>
    </Container>
  );
}

export default Header;
