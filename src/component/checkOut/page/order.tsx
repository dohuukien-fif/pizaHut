import * as React from 'react';
import { AiFillClockCircle, AiFillCheckCircle } from 'react-icons/ai';
import './order.scss';
import { cartOrder, cartAddress } from './../../cart/cartSelected';
import { useSelector, useDispatch } from 'react-redux';
import { setOrder, setAddress } from './../../../app/cartRedux';

export interface IOrderFeatuesProps {}

export default function OrderFeatues(props: IOrderFeatuesProps) {
  const CartOrders = useSelector(cartOrder);
  const dispatch = useDispatch();
  const handleClickOrder = (newValue: string) => {
    if (newValue === 'Đặt giao hàng') {
      dispatch(setOrder('Đặt giao hàng'));
    }
    if (newValue === 'Đặt lấy hàng') {
      dispatch(setOrder('Đặt lấy hàng'));
    }
  };
  return (
    <div className="order">
      <div className="order_wrapper">
        <div className="order_top">
          <div className="order_title">
            <p>Hình thức đặt hàng </p>
          </div>
          <div className="order_choose">
            <p>Quý khách vui lòng lựa chọn phương thức đặt hàng phù hợp. </p>
            <p>
              Quý khách có thể chọn Đặt giao hàng tận nơi hoặc Đặt đến lấy trực tiếp tại chi nhánh
              nhà hàng gần nhất.
            </p>
          </div>
        </div>

        <div className="order_bottom">
          <div
            className={
              CartOrders === 'Đặt giao hàng' ? 'order_delivery   active' : 'order_delivery'
            }
            onClick={() => handleClickOrder('Đặt giao hàng')}
          >
            <div
              className={CartOrders === 'Đặt giao hàng' ? 'tick_check activeCheck' : 'tick_check'}
            >
              <AiFillCheckCircle />
            </div>

            <div className="order_delivery-block">
              <div className="order_delivery-icon">
                <img
                  src="https://image.shutterstock.com/image-vector/delivery-man-riding-red-scooter-600w-1448504840.jpg"
                  alt=""
                />
              </div>
              <div className="order_delivery-content">
                <div className="order_delivery-content-top">
                  <p>Đặt giao hàng</p>
                </div>
                <div className="order_delivery-content-bottom">
                  <p>
                    Giao hàng tận nơi với đơn hàng <span>thực thanh toán</span> từ{' '}
                    <span>100.000đ</span>. Phụ thu phí giao hàng từ <span>25.000đ</span> cho mỗi đơn
                    đặt hàng qua Hotline 19006066 hoặc Website, bao gồm hoá đơn có các sản phẩm
                    thuộc chương trình khuyến mại.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={CartOrders === 'Đặt lấy hàng' ? 'order_take  active' : 'order_take'}
            onClick={() => handleClickOrder('Đặt lấy hàng')}
          >
            <div className="order_take-block">
              <div className="order_take-icon">
                <img
                  src="https://image.shutterstock.com/image-vector/fast-delivery-store-home-vector-600w-1681807645.jpg"
                  alt=""
                />
              </div>
              <div className="order_take-content">
                <div className="order_take-content-top">
                  <p>Đặt đến lấy</p>
                </div>
                <div className="order_take-content-bottom">
                  <p>
                    Nhận đơn hàng của bạn tại <br />
                    <strong>Nhà hàng The Pizza Company</strong>
                  </p>
                </div>
              </div>
            </div>
            <div
              className={CartOrders === 'Đặt lấy hàng' ? 'tick_check activeCheck' : 'tick_check'}
            >
              <AiFillCheckCircle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
