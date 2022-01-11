import * as React from 'react';
import { cartFeaturesProps } from '../../page/interface';
import CartItem from '../cartItem';
import './styles.scss';
export interface CartListProps {
  dataCart: cartFeaturesProps[];
}

export default function CartList({ dataCart }: CartListProps) {
  console.log(dataCart);
  return (
    <div className="cart_list">
      {dataCart.map((items, index) => (
        <CartItem key={items.id} items={items} />
      ))}
    </div>
  );
}
