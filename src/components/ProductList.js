import React from 'react'
import Product from './Product'

export default class ProductList extends React.Component {

  render() {
    return(
      <div className="row my-4">
        {this.props.products.map(product => 
        (
          <div key={product.id} className="col-lg-4 col-md-6 mb-4">
            <Product product={product}/>
          </div>
        ))}
      </div>
    )
  }
}