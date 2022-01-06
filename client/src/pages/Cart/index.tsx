import React from 'react';
import CartItem from './CartItem';
import useStore from '../../state/store';

const Cart: React.FC = () => {
  const {items, addItemToCart } = useStore();

  return (
    <>
      {items.map((item, index) => (
        <CartItem {...item} key={index} />
      ))}
      <button
        onClick={() =>
          addItemToCart({
            _id: 1,
            title: 'string',
            category: 'string',
            description: 'string',
            image: 'string',
            price: 1,
          })
        }
      >
        make it rain carts
      </button>
    </>
  );
};

export default Cart;
