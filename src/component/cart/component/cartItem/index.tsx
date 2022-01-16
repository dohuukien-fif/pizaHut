import * as React from 'react';
import { formatPrice } from '../../../../utils';
import { cartFeaturesProps } from '../../page/interface';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import './styles.scss';
export interface CartItemProps {
  items: cartFeaturesProps;
}

export default function CartItem({ items }: CartItemProps) {
  const { product, infor, quantity } = items;
  console.log(product, infor, quantity);

  return (
    <div className="cart_item">
      <div className="cart_blocks">
        <div className="cart_left">
          <div className="cart_aside">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="cart_add">
            <div className="cart_name">
              <span>{product.name}</span>
            </div>
            <div className="cart_sizeName">
              <span>{`Kích thước - ${infor.sizeName}`}</span>
            </div>
            <div className="cart_soles">
              <span>{`Đế - ${infor.soles}`}</span>
            </div>
          </div>
        </div>
        <div className="cart_right">
          <div className="right_block">
            <div className="cart_quantity">
              <input type="text" />
            </div>
            <div className="cart_price">
              <span>{formatPrice(product.price)}</span>
            </div>
            <div className="cart_delete">
              <RiDeleteBin6Fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
