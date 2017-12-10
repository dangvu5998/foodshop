import {combineReducers} from 'redux'
import cart from './cart'
import wishlist from './wishlist'

export default combineReducers({
  cart,
  wishlist
})