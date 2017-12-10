import React from 'react'
import ProductList from './ProductList'
import * as productApi from '../api/productApi'
export default class Homepage extends React.Component {
  state = {
    products: []
  }
  componentDidMount() {
    this.getMoreProduct()
  }
  getMoreProduct() {
    let {products} = this.state
    productApi.getProduct() 
    .then(items => this.setState({products: products.concat(items)}))
  }
  render() {
    return(      
      <ProductList products={this.state.products} />
    )
  }
}