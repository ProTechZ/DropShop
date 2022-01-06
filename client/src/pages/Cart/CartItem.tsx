import React from 'react';
import { CartItemType } from '../../state/store';


const CartItem: React.FC<CartItemType> = (props) => {
  const {  title, category, description, price, image} = props;

  return <>
    <h2>{title}</h2>
    <h2>{category}</h2>
    <h2>{description}</h2>
    <h2>{price}</h2>
    <h2>{image}</h2>
  
  </>;
};

export default CartItem;
