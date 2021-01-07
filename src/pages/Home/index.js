import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

import { FlatList } from 'react-native';

import {
  AddButton,
  AddButtonText,
  Container,
  Product,
  ProductImage,
  ProductPrice,
  ProductTitle,
  ProductAmount,
  ProductAmountText,
} from './styles';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    const response = await api.get('products');
    this.setState({ products: response.data });
  }

  renderItemsOnScreen = ({ item }) => {
    return (
      <Product key={item.id}>
        <ProductImage source={{ uri: item.image }} />
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice>{item.price} </ProductPrice>
        <AddButton>
          <ProductAmount>
            <Icon name="add-shopping-cart" color="#FFF" size={20} />
            <ProductAmountText>2</ProductAmountText>
          </ProductAmount>
          <AddButtonText>ADD TO CART</AddButtonText>
        </AddButton>
      </Product>
    );
  };

  render() {
    const { products } = this.state;
    return (
      <Container>
        <FlatList
          horizontal
          data={products}
          renderItem={this.renderItemsOnScreen}
          keyExtractor={(item) => item.id.toString()}
        />
      </Container>
    );
  }
}

export default Home;
