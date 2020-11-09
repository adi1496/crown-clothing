import {CartActionsTypes} from './cart.types';

export const toggleCartHidden = () => {
  return {
    type: CartActionsTypes.TOGGLE_CART_HIDDEN
    //we don't need a payload
  }
} 