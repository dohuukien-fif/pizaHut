import * as React from 'react';
import { formatPrice } from '../../../utils';
import './styles.scss';
export interface DeliveryFeaturesProps {}

export default function DeliveryFeatures(props: DeliveryFeaturesProps) {
  const data = [
    {
      id: 1,
      name: 'huu  kien',
      email: 'huukien009@gmail.com',
      quatity: 1,
      price: 544544,
      status: 'Shipping',
    },
    {
      id: 1,
      name: 'huu  kien',
      email: 'huukien009@gmail.com',
      quatity: 1,
      price: 544544,
      status: 'Succers',
    },
    {
      id: 1,
      name: 'huu  kien',
      email: 'huukien009@gmail.com',
      quatity: 1,
      price: 544544,
      status: 'Succers',
    },
    {
      id: 1,
      name: 'huu  kien',
      email: 'huukien009@gmail.com',
      quatity: 1,
      price: 544544,
      status: 'Succers',
    },
  ];
  return (
    <div className="delivery">
      <div className="delivery__swapper">
        <div className="delivery__title">
          <span>Delivery</span>
        </div>
        <div className="delivery__table">
          <div className="delivery__top">
            <span>STT</span>
            <span>User</span>
            <span>Email</span>
            <span>Quatity</span>
            <span>Price</span>
            <span>Status</span>
          </div>
          <div className="delivery__body">
            {data
              .filter((isStatus) => isStatus.status === 'Succers')
              .map((item, idex) => (
                <div className="delivery__item">
                  <div className="delivery__stt">
                    <span>{idex}</span>
                  </div>
                  <div className="delivery__user">
                    <span>{item.name}</span>
                  </div>
                  <div className="delivery__email">
                    <span>{item.email}</span>
                  </div>
                  <div className="delivery__quatity">
                    <span>{item.quatity}</span>
                  </div>
                  <div className="delivery__price">
                    <span>{formatPrice(item.price)}</span>
                  </div>
                  <div className="delivery__status">
                    <span>{item.status}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
