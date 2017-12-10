import React from 'react'
import ProductList from './ProductList'
import * as productApi from '../api/productApi'
export default class Categorypage extends React.Component {
  state = {
    products: []
  }
  componentWillMount() {
    productApi.getProductByCateogry(this.props.match.params.id)
    .then(products => this.setState({products}))
    .catch(this.setState({products: []}))
  }
  componentWillReceiveProps(nProps) {
    productApi.getProductByCateogry(nProps.match.params.id)
    .then(products => this.setState({products}))
    .catch(this.setState({products: []}))
  }
  render() {
    return <ProductList products={this.state.products} />
  }
}