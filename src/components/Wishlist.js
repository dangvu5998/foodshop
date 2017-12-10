import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
export class Wishlist extends React.Component {
  render() {
    let {wishlist} = this.props
    if(wishlist.length === 0)
    return <div className="mt-5"><h4>Chưa có sản phẩm nào!</h4></div>
    let list = wishlist.map(product => {
      let costElement
      if(product.promotion)
        costElement = <p><s className="text-muted">{product.cost}vnd</s>&nbsp; &nbsp; {product.promotion}vnd</p>
      else
        costElement = <p>{product.cost}vnd</p>
      return (
        <tr key={product.id}>
          <td><img src={product.image} alt={product.name}/></td>
          <td><Link to={`/product/${product.id}`}>{product.name}</Link></td>
          <td>{costElement}</td>
          <td onClick={() => this.props.deleteWishProduct(product)} title="Xóa khỏi wishlist"><i className="fa fa-trash-alt"></i></td>
        </tr>
      )
    })
    return (
      <div className="mt-4">
        <h4>Danh sách mong muốn</h4>
        <table className="table table-bordered table-responsive" style={{width:"100%"}}>
          <thead>
            <tr>
              <th scope="col" style={{width:"40%"}}>Item</th>
              <th scope="col" style={{width:"40%"}}>Tên</th>
              <th scope="col" style={{width:"15%"}}>Đơn giá</th>
              <th scope="col" style={{width:"5%"}}></th>
            </tr>
          </thead>
          <tbody>
            {list}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    wishlist: state.wishlist
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteWishProduct: product => {
      dispatch({
        type: 'DELETE_WISH_PRODUCT',
        product
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist)