import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
export class Product extends React.Component {

  render() {
    let {product} = this.props
    let costElement
    if(product.promotion)
      costElement = <h5><s className="text-muted">{product.cost}vnd</s>&nbsp; &nbsp; {product.promotion}vnd</h5>
    else
      costElement = <h5>{product.cost}vnd</h5>
    return(
      <div className="card h-100">
        <Link to={`product/${product.id}`}><img alt={product.name} src={product.image} className="card-img-top" /></Link>
        <div className="card-body text-center">
          <h5 className="card-title">
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </h5>
          {costElement}
          <p className="text-center">
            <button title="Thêm vào giỏ hàng" className="btn btn-light" onClick={() => this.props.addToCart(product)}><i className="fa fa-cart-plus fa-lg"></i></button>
            <button title="Thêm vào wishlist" className="btn btn-light" onClick={() => this.props.addToWishlist(product)}><i className="fa fa-heart fa-lg"></i></button>
          </p>
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch, {product}) => {
  return {
    addToCart: product => dispatch({
      type: 'ADD_TO_CART',
      product
    }),
    addToWishlist: product => dispatch({
      type: 'ADD_TO_WISHLIST',
      product
    })
  }
}

export default connect(null, mapDispatchToProps)(Product)