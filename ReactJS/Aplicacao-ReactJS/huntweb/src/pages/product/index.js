import React, { Component } from 'react';
import api from '../../services/api';

export default class Product extends Component {
  componentDidMount() {
    this.loadProduct();
  }
  
  loadProduct = async () => {
    const response = await api.get('/products/:id');
    console.log(response);
  }
  
  render() {
    return (
      <h1> Product </h1>      
    );
  }
}
