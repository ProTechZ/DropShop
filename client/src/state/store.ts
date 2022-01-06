import create from 'zustand';
import { ProductType } from '../pages/AllProducts';
import addItemToCart from './addItemToCart';
import removeItemFromCart from './removeItemFromCart';
import updateItemQuantity from './updateItemQuantity';

export type CartItemType = {
  _id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
};

export type CartItemsType = CartItemType[];

type Cart = {
  items: CartItemsType;
  addItemToCart: (product: ProductType) => void;
  removeItemFromCart: (productId: number) => void;
  updateItemQuantity: (productId: number, newQuantity: number) => void;
};

const store = create<Cart>((set) => ({
  items: [],
  addItemToCart(product: ProductType) {
    set((state) => ({
      ...state,
      items: addItemToCart(state.items, product),
    }));
  },
  removeItemFromCart(productId: number) {
    set((state) => ({
      ...state,
      items: removeItemFromCart(state.items, productId),
    }));
  },
  updateItemQuantity(productId: number, newQuantity: number) {
    set((state) => ({
      ...state,
      items: updateItemQuantity(state.items, productId, newQuantity),
    }));
  },
}));

export default store;

// {
//   _id: 1,
//   title: 'string',
//   category: 'string',
//   description: 'string',
//   price: 1,
//   image: 'string',
//   quantity: 1,
// },
