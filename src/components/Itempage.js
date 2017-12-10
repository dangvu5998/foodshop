import React from 'react'
import * as productApi from '../api/productApi'
import {connect} from 'react-redux'
export class Itempage extends React.Component {
  state = { product: {}}
  componentDidMount() {
    let {id} = this.props.match.params
    productApi.getProductById(id)
    .then(product => this.setState({product: product}))
  }
  render() {
    let {product} = this.state
    let costElement
    if(product.promotion)
      costElement = <h5><s className="text-muted">{product.cost}vnd</s>&nbsp; &nbsp; {product.promotion}vnd</h5>
    else
      costElement = <h5>{product.cost}vnd</h5>
    return (
      <div className="card mt-5">
        <img  style={{"maxWidth":"400px", height:"auto"}} className="card-img-top " src={product.image} alt={product.name} />
        <div className="card-body">
          <h3 className="card-title">{product.name}</h3>
          {costElement}
          <p className="card-text">{product.description}</p>
          <button title="Add to cart" className="btn btn-primary" onClick={() => this.props.addToCart(product)}><i className="fa fa-cart-plus fa-lg"></i>Thêm vào giỏ hàng</button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button title="Add to wishlist" className="btn btn-danger" onClick={() => this.props.addToWishlist(product)}><i className="fa fa-heart fa-lg"></i>Thêm vào wishlist</button>
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

export default connect(null, mapDispatchToProps)(Itempage)