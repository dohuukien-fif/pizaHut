import * as React from 'react';
import { formatPrice } from '../../../utils';
import './styles.scss';
export interface CustomersProps {}

export default function CustomerFeatures(props: CustomersProps) {
  const data = [
    {
      id: 1,
      name: 'huu  kien',
      email: 'huukien009@gmail.com',
      order: 2,
      spend: 456789,
    },
    {
      id: 1,
      name: 'huu  kien',
      email: 'huukien009@gmail.com',
      order: 7,
      spend: 456789,
    },
    {
      id: 1,
      name: 'huu  kien',
      email: 'huukien009@gmail.com',
      order: 6,
      spend: 456789,
    },
    {
      id: 1,
      name: 'huu  kien',
      email: 'huukien009@gmail.com',
      order: 5,
      spend: 456789,
    },
  ];

  const sortTotalOrder = data.sort((a, b) => b.order - a.order);
  return (
    <div className="customers">
      <div className="customers__swapper">
        <div className="customers__title">
          <span>CUSTOMERS</span>
        </div>
        <div className="customers__list">
          <div className="customers__table--top">
            <span>STT</span>
            <span>User</span>
            <span>Email</span>
            <span>Total Orders</span>
            <span>Total Spend</span>
          </div>
          <div className="customers__table--body">
            {data
              .sort((a, b) => b.order - a.order)
              .map((items, index) => (
                <div className="customers__table--item">
                  <div className="customers__table--stt">
                    <span>{index}</span>
                  </div>
                  <div className="customers__table--user">
                    <span>{items.name}</span>
                  </div>
                  <div className="customers__table--email">
                    <span>{items.email}</span>
                  </div>
                  <div className="customers__table--totalOder">
                    <span>{items.order}</span>
                  </div>
                  <div className="customers__table--totalSpend">
                    <span>{formatPrice(items.spend)}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
