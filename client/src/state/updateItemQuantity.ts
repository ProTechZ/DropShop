import { ProductType } from '../pages/AllProducts';
import { CartItemsType } from './store';

const updateItemQuantity = (
  cartItems: CartItemsType,
  productId: number,
  newQuantity: number
): CartItemsType => {
  return cartItems.map((cartItem) => ({
    ...cartItem,
    quantity: cartItem._id === productId ? newQuantity : cartItem.quantity,
  }));
};

export default updateItemQuantity;
