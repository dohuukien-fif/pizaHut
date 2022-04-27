import * as React from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { formatPrice } from '../../../../utils';
import { ProductListProps } from '../interface';

export interface ProductItemProps {
  item: ProductListProps;
  index: number;
}

export default function ProductItem({ item, index }: ProductItemProps) {
  return (
    <div className="product__item" key={index}>
      <div className="product__item--left">
        <div className="product__id">
          <span>{item.id}</span>
        </div>
        <div className="product__product">
          <div className="product__figust">
            <img src={item.image} alt="" />
          </div>
          <span>{item.name}</span>
        </div>
      </div>
      <div className="product__item--right">
        <div className="product__price">
          <span>{formatPrice(item.price)}</span>
        </div>
        <div className="product__action">
          <button>
            <span>Edit</span>
          </button>
          <div className="product__delete">
            <RiDeleteBin5Line />
          </div>
        </div>
      </div>
    </div>
  );
}
