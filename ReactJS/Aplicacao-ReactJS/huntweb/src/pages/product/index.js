import React, { Component } from 'react';
import api from '../../services/api';

export default class Product extends Component {
  state = {
    product: {}
  }

  componentDidMount() {
    this.loadProduct();
  }

  loadProduct = async () => {
    const { id } = this.props.match.params;

    const response = await api.get(`/products/${id}`);

    this.setState({ product: response.data });
  }

  render() {
    const { product } = this.state;

    return (
      <div className="products-list">
        <article key={product._id}>
          <strong> {product.title} </strong>
          <p><strong>Descrição:</strong> {product.description} </p>
          <p><strong>Criado:</strong> { product.createdAt } </p>
          <a href = { product.url } target = "_blank" > Acesse o site aqui! </a>
        </article>
      </div>
    )
  }
}
