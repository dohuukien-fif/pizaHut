import * as React from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from '../../../../utils';
import { ProductListProps } from '../interface';

export interface ProductItemProps {
  item: ProductListProps;
  getDelete: (id: any) => void;
}

export default function ProductItem({ item, getDelete }: ProductItemProps) {
  const navigete = useNavigate();

  const handleNavigeteId = (id: string) => {
    console.log(id);
    navigete(`/admin/product/${id}`);
  };
  const handleDeleteId = (id: any) => {
    if (getDelete) {
      getDelete(id);
    }
  };
  return (
    <div className="product__item">
      <div className="product__item--left">
        <div className="product__id">
          <span>{item._id}</span>
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
          <button onClick={() => handleNavigeteId(item.orderId)}>
            <span>Edit</span>
          </button>
          <div className="product__delete">
            <RiDeleteBin5Line onClick={() => handleDeleteId(item.orderId)} />
          </div>
        </div>
      </div>
    </div>
  );
}
