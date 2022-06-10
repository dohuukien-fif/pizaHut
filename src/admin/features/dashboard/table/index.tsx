import * as React from 'react';
import { formatPrice } from '../../../../utils';
import './styles.scss';
export interface table {
  code: number;
  product: string;
  image: string;
  date: string;
  amount: number;
  payment: string;
  status: string;
  products: any;
  day: string;
}

export interface TableProps {
  item: table;
}

export default function Table({ item }: TableProps) {
  return (
    <div className="dashboard__table--item">
      <div className="dashboard__table--left">
        <div className="dashboard__table--tracking">
          <span>{item.code}</span>
        </div>
        <div className="dashboard__table--product">
          {new Array(item?.products[0]).map((items: any, idx: number) => (
            <React.Fragment key={idx}>
              <img src={items.product.image} alt="" />
              <span>{items?.product?.name}</span>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="dashboard__table--right">
        <div className="dashboard__table--date">
          <span>{item.day}</span>
        </div>
        <div className="dashboard__table--amount">
          <span>{formatPrice(item.amount)}</span>
        </div>
        <div className="dashboard__table--payment">
          <span>dat giao hang</span>
        </div>
        {item.payment === 'dat giao hang' && (
          <div className="dashboard__table--payment">
            <span>{item.payment}</span>
          </div>
        )}
        {item.payment === 'dat lay hang' && (
          <div className="dashboard__table--payment  ">
            <span className="pickup">{item.payment}</span>
          </div>
        )}

        {item.status === 'pending' && (
          <div className="dashboard__table--status">
            <span>{item.status}</span>
          </div>
        )}
        {item.status === 'Refund' && (
          <div className="dashboard__table--status ">
            <span className="refund">{item.status}</span>
          </div>
        )}
        {item.status === 'Shipping' && (
          <div className="dashboard__table--status  ">
            <span className="shipping">{item.status}</span>
          </div>
        )}
        {item.status === 'Success' && (
          <div className="dashboard__table--status  ">
            <span className="succerss">{item.status}</span>
          </div>
        )}
      </div>
    </div>
  );
}
