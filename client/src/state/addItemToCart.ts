import { ProductType } from '../pages/AllProducts';
import { CartItemsType } from './store';

const addItemToCart = (
  cartItems: CartItemsType,
  newProduct: ProductType
): CartItemsType => [...cartItems, { ...newProduct, quantity: 1 }];

export default addItemToCart;
