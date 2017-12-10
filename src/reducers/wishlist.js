
const wishlist = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TO_WISHLIST':
    if(state.findIndex(item => action.product.id === item.id) === -1)
    return [...state, action.product]
    else return state
    case 'DELETE_WISH_PRODUCT':
    return state.filter(product => product.id !== action.product.id)
    default: return state
  }
}
export default wishlist