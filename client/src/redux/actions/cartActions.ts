export enum CartActions { 
  PLACE_PRODUCT,
  REMOVE_PRODUCT,
  INCREASE_PRODUCT_QUANTITY,
  DECREASE_PRODUCT_QUANTITY,
}

export type ActionType = {
  type: CartActions;
  payload?: any;
};

export const placeProduct = (productId: number): ActionType => ({
  type: CartActions.PLACE_PRODUCT,
  payload: productId,
});

export const removeProduct = (productId: number): ActionType => ({
  type: CartActions.REMOVE_PRODUCT,
  payload: productId,
});

export const increaseProductQuantity = (productId: number): ActionType => ({
  type: CartActions.INCREASE_PRODUCT_QUANTITY,
  payload: productId,
});

export const decreaseProductQuantity = (productId: number): ActionType => ({
  type: CartActions.DECREASE_PRODUCT_QUANTITY,
  payload: productId,
});
