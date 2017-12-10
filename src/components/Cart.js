import React from 'react'
import {connect} from 'react-redux'
export class Cart extends React.Component {

  handleChange(e, item) {
    try {
      let quantity = parseInt(e.target.value, 10)
      this.props.updateProduct(item.product, quantity)
    }
    catch(err){
      return
    }
  }
  render() {
    if(this.props.cart.length === 0)
    return <div className="mt-4"><h4>Giỏ hàng của bạn chưa có gì!</h4></div>
    let total = 0
    let totalDiscount = 0
    
    let itemList = this.props.cart.map(item => {
      let totalItem = (item.product.promotion || item.product.cost)*item.quantity
      total += totalItem
      let discountItem = (item.product.promotion - item.product.cost)*item.quantity
      totalDiscount += (discountItem || 0)
      return (
        <tr key={item.product.id} style={{width:"100%"}}>
          <td style={{width:"20%"}}><img alt={item.product.name} src={item.product.image} /></td>
          <td style={{width:"30%"}}>{item.product.name}</td>
          <td style={{width:"15%"}}>
            <input type="number" defaultValue={item.quantity} onChange={e => this.handleChange(e, item)} step="1" min="0" style={{width:"60%"}}/>
            &nbsp;&nbsp;&nbsp;
            <button className="btn btn-light" onClick={() => this.props.updateProduct(item.product, 0)}><i className="fa fa-trash-alt" title="Xóa khỏi giỏ hàng"></i></button>
          </td>
          <td style={{width:"10%"}}>{item.product.promotion || item.product.cost}vnd</td>
          <td style={{width:"15%"}}>{!!discountItem && `${discountItem}vnd`}</td>
          <td style={{width:"10%"}}>{totalItem}vnd</td>
        </tr>
      )
    })
    return(
      <div className="mt-4">
        <h4>Giỏ hàng của bạn</h4>
        <table className="table table-bordered table-responsive" style={{width:"100%"}}>
          <thead>
            <tr>
              <th scope="col" style={{width:"20%"}}>Item</th>
              <th scope="col" style={{width:"30%"}}>Tên</th>
              <th scope="col" style={{width:"15%"}}>Số lượng</th>
              <th scope="col" style={{width:"10%"}}>Đơn giá</th>
              <th scope="col" style={{width:"15%"}}>Khuyến mại</th>
              <th scope="col" style={{width:"10%"}}>Tổng</th>
            </tr>
          </thead>
          <tbody>
            {itemList}
            <tr>
              <th colSpan="4">Tổng</th>
              <td>{!!totalDiscount && `${totalDiscount}vnd`}</td>
              <td>{total}vnd</td>
            </tr>
          </tbody>
        </table>
        <button className="btn btn-primary" onClick={() =>{
          this.props.emptyCart()
          alert('Cám ơn bạn đã đặt hàng')
        }}>Đặt hàng</button>
      </div>
    )
  }
}
const mapStateToProps = (state, props) => {
  return { cart: state.cart }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    updateProduct: (product, quantity) => dispatch({
      type: 'UPDATE_PRODUCT',
      product,
      quantity
    }),
    emptyCart: () => dispatch({type: 'EMPTY_CART'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
