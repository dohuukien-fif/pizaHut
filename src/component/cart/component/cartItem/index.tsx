import * as React from 'react';
import { cartFeaturesProps } from '../../page/interface';
import './styles.scss';
export interface CartItemProps {
  items: cartFeaturesProps;
}

export default function CartItem({ items }: CartItemProps) {
  return (
    <div>
      <h1>kien</h1>
    </div>
  );
}
