import { CartItemsType } from './store';

const removeItemFromCart = (
  cartItems: CartItemsType,
  productId: number
): CartItemsType => cartItems.filter((cartItem) => cartItem._id !== productId);

export default removeItemFromCart;
