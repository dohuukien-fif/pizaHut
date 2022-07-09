import * as React from 'react';
import { useParams } from 'react-router-dom';
import { OrderProps } from '../../../../model';
import { formatPrice } from '../../../../utils';
import useViewOrder from './hooks/useViewOrder';
import './styles.scss';
export interface ViewOrderFeatuesProps {}

export default function ViewOrderFeatues(props: ViewOrderFeatuesProps) {
  const { orderId } = useParams();

  const { data, LoadingSearch } = useViewOrder(orderId);

  console.log('data', data);

  const dataCount = data?.products?.reduce(
    (total: number, item: OrderProps) => total + item.quantity,
    0
  );

  console.log('data', data);
  return (
    <div className="view">
      {data.order === 'Đặt giao hàng' && (
        <div className="view__top">
          <div className="view__top--group  ">
            <span>Tình trạng:*</span>
            <span className="view__top--order">{data.order}</span>
          </div>
          <div className="view__top--group">
            <span>Họ và tên :*</span>
            <span>{data.address.fullName}</span>
          </div>
          <div className="view__top--group">
            <span>Số điện thoại :*</span>
            <span>{data.address.phone}</span>
          </div>
          <div className="view__top--group">
            <span>Địa chỉ :*</span>
            <span>{`${data.address.streets}-${data.address.coutry}-${data.address.city}`}</span>
          </div>
        </div>
      )}
      {data.order === 'Đặt lấy hàng' && (
        <div className="view__top">
          <div className="view__top--group">
            <span>Tình trạng:*</span>
            <span className="view__top--order">{data.order}</span>
          </div>
          <div className="view__top--group">
            <span>Họ và tên :*</span>
            <span>{data.address.fullName}</span>
          </div>
          <div className="view__top--group">
            <span>Cửa hàng :*</span>
            <span>{data.store.store}</span>
          </div>
          <div className="view__top--group">
            <span>Địa chỉ :*</span>
            <span>{`${data.store.address}`}</span>
          </div>
        </div>
      )}

      <div className="view__swapper">
        <div className="view__title--top">
          <span>View Order</span>
        </div>
        <div className="view__table">
          <div className="view__title">
            <div className="view__title--left">
              <span>Stt</span>
              <span>Product</span>
            </div>
            <div className="view__title--right">
              <span>Quantity</span>
              <span>Price</span>
              <span>Thanh toán</span>
            </div>
          </div>
          <div className="view__list">
            {data?.products?.map((item: OrderProps, idx: number) => (
              <div className="view__item" key={idx}>
                <div className="view__item--left">
                  <div className="view__stt">
                    <span>{idx}</span>
                  </div>
                  <div className="view__product">
                    <div className="view__figust">
                      <img src={item.product.image} alt="" />
                    </div>
                    <div className="view__name">
                      <span>{item.product.name}</span>
                    </div>
                  </div>
                </div>
                <div className="view__item--right">
                  <div className="view__quantity">
                    <span>{item.quantity}</span>
                  </div>
                  <div className="view__price">
                    <span>{formatPrice(item.product.price)}</span>
                  </div>
                  <div className="view__amount">
                    <span>{formatPrice(item.product.price * item.quantity)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="view__total">
        <div className="view__group">
          <span>Số lượng</span>
          <span>{`${dataCount} Sản phẩm`}</span>
        </div>
        <div className="view__group">
          <span>Tạm tính</span>
          <span>{formatPrice(data?.amount)}</span>
        </div>
        <div className="view__group">
          <span>Thanh toán</span>
          <span className="view__amountTotal">{formatPrice(data?.amount)}</span>
        </div>
      </div>
    </div>
  );
}
