import { ActionType, CartActions } from '../actions/cartActions';

type CartProductType = {
  title: string;
  category: string;
  description: string;
  createdAt: Date;
  quantity: 1;
};

type CartProductsType = CartProductType[];

const initialCartState: CartProductsType = [];

const cartReducer = (
  state = initialCartState,
  action: ActionType
): CartProductsType => {
  switch (action.type) {
    case CartActions.PLACE_PRODUCT:
      return state;

    case CartActions.REMOVE_PRODUCT:
      return state;

    case CartActions.INCREASE_PRODUCT_QUANTITY:
      return state;

    case CartActions.DECREASE_PRODUCT_QUANTITY:
      return state;
    default:
      return state;
  }
};

export default cartReducer;
