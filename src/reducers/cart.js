
const cart = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TO_CART':{
    let i = state.findIndex(item => item.product.id === action.product.id)
    if(i === -1) return state.concat({product: action.product, quantity: 1})
    return state.map((item, index) => index === i? {product: item.product, quantity: item.quantity + 1} : item)
    }
    case 'UPDATE_PRODUCT':{
    let i = state.findIndex(item => item.product.id === action.product.id)
    if(action.quantity <= 0)
    if(i < 0) return state
    else
    return state.slice(0, i).concat(state.slice(i+1, state.length))
    else 
    if(i < 0) 
    return state.concat({product: action.product, quantity: action.quantity})
    else return state.map((item, index) => index === i? {product: action.product, quantity: action.quantity}: item)
    }

    case 'EMPTY_CART': 
    return []
    
    default: return state
  }
}
export default cart