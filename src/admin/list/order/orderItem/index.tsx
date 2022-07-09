import * as React from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from '../../../../utils';
import './styles.scss';
export interface Order {
  code: number;
  product: string;
  image: string;
  day: string;
  amount: number;
  payment: string;
  status: string;
  order: string;
  products: any;
  _id: string;
}

export interface OrderProps {
  item: Order;

  onSubmitSales: (value: string) => void;
}

export default function OrderItem({ item, onSubmitSales }: OrderProps) {
  const navigete = useNavigate();

  const handleClickSales = (value: any) => {
    if (onSubmitSales) onSubmitSales(value);
    console.log(value);
  };
  const handleIdOrder = (id: string) => {
    navigete(`/admin/order/${id}`);
  };
  return (
    <div className="orders__item">
      <div className="orders__left">
        <div className="orders__tracking">
          <span>{item.code}</span>
        </div>
        <div className="orders__product">
          {/* <span>{`${item.product.charAt(0).toLocaleUpperCase()}${item.product.slice(1)}`}</span> */}
          {item?.products?.map((items: any, idx: number) => (
            <div className="orders__product--group" key={idx}>
              <img src={items?.product?.image} alt="" />
              <span>{items?.product?.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="orders__right">
        <div className="orders__date">
          <span>{item.day}</span>
        </div>
        <div className="orders__amount">
          <span>{formatPrice(item.amount)}</span>
        </div>

        {item.order === 'Đặt giao hàng' && (
          <div className="orders__payment">
            <span>{item.order}</span>
          </div>
        )}
        {item.order === 'Đặt lấy hàng' && (
          <div className="orders__payment  ">
            <span className="pickup">{item.order}</span>
          </div>
        )}

        {item.status === 'pending' && (
          <div className="orders__status">
            <span>{item.status}</span>
          </div>
        )}
        {item.status === 'Refund' && (
          <div className="orders__status ">
            <span className="refund">{item.status}</span>
          </div>
        )}
        {item.status === 'Shipping' && (
          <div className="orders__status  ">
            <span className="shipping">{item.status}</span>
          </div>
        )}
        {item.status === 'Success' && (
          <div className="orders__status  ">
            <span className="succerss">{item.status}</span>
          </div>
        )}
        <div className="orders__action">
          <div className="orders__view">
            <button onClick={() => handleIdOrder(item._id)}>
              <span>View</span>
            </button>
          </div>
          <div className="orders__delete" onClick={() => handleClickSales(item)}>
            <RiDeleteBin5Line />
          </div>
        </div>
      </div>
    </div>
  );
}
