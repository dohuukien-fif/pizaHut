import * as React from 'react';
import { cartFeaturesProps } from '../../page/interface';
import './styles.scss';
export interface CartItemProps {
  items: cartFeaturesProps;
}

export default function CartItem({ items }: CartItemProps) {
  const { product, infor, quantity } = items;
  console.log(product, infor, quantity);

  return (
    <div className="cart_item">
      <div className="cart_wrapper">
        <div className="cart_left">
          <div className="cart_aside">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="cart_name">
            <span>{product.name}</span>
          </div>
          <div className="cart_add">
            <div className="cart_sizeName">
              <span>{`Kích thước - ${infor.sizeName}`}</span>
            </div>
            <div className="cart_soles">
              <span>{`Đế - ${infor.soles}`}</span>
            </div>
          </div>
        </div>
        <div className="cart_right">
          <div className="cart_quantity">
            <input type="text" />
          </div>
          <div className="cart_price">
            <span>{product.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
