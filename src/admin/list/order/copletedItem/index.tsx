import * as React from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { formatPrice } from '../../../../utils';
import './styles.scss';
export interface Order {
  code: number;
  product: string;
  image: string;
  date: string;
  amount: number;
  payment: string;
  status: string;
  order: string;
  day: string;
  products: any;
  _id: string;
  value: string;
}

export interface CompletedProps {
  item: Order;
  onSubmits: (value: any) => void;
}

export default function Completed({ item, onSubmits }: CompletedProps) {
  const handleChangeOrder = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    const updateCompleted = {
      _id: item._id,
      status: value,
    };

    console.log(updateCompleted);
    if (onSubmits) {
      onSubmits(updateCompleted);
    }
  };
  return (
    <div className="orders__item">
      <div className="orders__left">
        <div className="orders__tracking">
          <span>{item.code}</span>
        </div>
        <div className="orders__product">
          {/* <span>{`${item.product.charAt(0).toLocaleUpperCase()}${item.product.slice(1)}`}</span> */}
          {new Array(item?.products[0]).map((items: any, idx: number) => (
            <React.Fragment key={idx}>
              <img src={items.product.image} alt="" />
              <span>{items?.product?.name}</span>
            </React.Fragment>
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
          <select onChange={handleChangeOrder}>
            <option>chọn Completed</option>
            <option value="Pending">Pending</option>
            <option value="Refund">Refund</option>
            <option value="Shipping">Shipping</option>
            <option value="Success">Success</option>
          </select>
        </div>
      </div>
    </div>
  );
}
