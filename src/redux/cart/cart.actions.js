import { cartTypes } from './cart.types'

export const addPlantToCart = (nextCartItem) => ({
    type: cartTypes.ADD_TO_CART,
    payload: nextCartItem
})

export const removeCartItem = (cartItem) => ({
    type: cartTypes.REMOVE_CART_ITEM,
    payload: cartItem
  })
  
  export const reduceCartItem = (cartItem) => ({
    type: cartTypes.REDUCE_CART_ITEM,
    payload: cartItem
  })