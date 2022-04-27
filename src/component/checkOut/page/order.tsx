import * as React from 'react';
import {
  AiFillClockCircle,
  AiFillCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineArrowRight,
} from 'react-icons/ai';
import './order.scss';
import { cartOrder, cartAddress } from './../../cart/cartSelected';
import { useSelector, useDispatch } from 'react-redux';
import { setOrder, setAddress } from './../../../app/cartRedux';
import { MdOutlineDoNotTouch } from 'react-icons/md';

export interface IOrderFeatuesProps {
  isDialogOrder: React.SetStateAction<any>;
  handleClic: any;
  setisDialogOrder: any;
}

export default function OrderFeatues({
  handleClic,
  isDialogOrder,
  setisDialogOrder,
}: IOrderFeatuesProps) {
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

  const handleClickClose = () => {
    setisDialogOrder(false);
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
      <div className={isDialogOrder ? 'order_dialog activeOverlay' : 'order_dialog'}>
        <div className="order_dialog_swapper">
          <div className="order_close">
            <AiOutlineCloseCircle onClick={handleClickClose} />
          </div>
          <div className="order_dialog-left">
            <div className="order_dialog-right-adside">
              <img
                src="https://stc.shopiness.vn/deal/2019/12/13/6/3/5/f/1576222478368_540.png"
                alt=""
              />
            </div>
          </div>
          <div className="order_dialog-right">
            <div className="order_dialog-right-swapper">
              <div className="order_dialog-right-title">
                <p>GIAO HÀNG MIỄN CHẠM</p>
              </div>

              <div className="order_dialog-right-body">
                <div className="order_dialog-right-group">
                  <div className="order_dialog-right-length">
                    <span>1</span>
                  </div>
                  <div className="order_dialog-right-content">
                    <span>
                      Nhân viên giao hàng (NVGH) sử dụng găng tay , khẩu trang và để khử khuẩn (ĐKK)
                      trong quá trình giao hàng
                    </span>
                  </div>
                </div>
                <div className="order_dialog-right-group">
                  <div className="order_dialog-right-length">
                    <span>2</span>
                  </div>
                  <div className="order_dialog-right-content">
                    <span>
                      NVGH đặt hộp bánh lên ĐKK cùng với tiền thừa (nếu có) trước cửa nhà khách hàng
                    </span>
                  </div>
                </div>
                <div className="order_dialog-right-group">
                  <div className="order_dialog-right-length">
                    <span>3</span>
                  </div>
                  <div className="order_dialog-right-content">
                    <span>
                      Giữ khoảng cách vị trí bánh ít nhất 02 mét cho tới khi khách nhận bánh và đặt
                      tiền thanh toán lên ĐKK
                    </span>
                  </div>
                </div>
                <div className="order_dialog-right-group">
                  <div className="order_dialog-right-length">
                    <span>4</span>
                  </div>
                  <div className="order_dialog-right-content">
                    <span>
                      Xịt vệ sinh ĐKK, hotbag, thùng xe và tiền mặt nhận từ khách ( nếu có) khi về
                      tới nhà hàng
                    </span>
                  </div>
                </div>
                <div className="order_dialog-right-group">
                  <div className="order_dialog-right-length">
                    <span>5</span>
                  </div>
                  <div className="order_dialog-right-content">
                    <span>
                      NVGH xịt khử khuẩn toàn thân trước khi vào nhà hàng để an toàn cho đơn giao kế
                      tiếp
                    </span>
                  </div>
                </div>
              </div>

              <div className="order_dialog-right-btn">
                <button onClick={handleClic}>
                  <MdOutlineDoNotTouch />
                  <span>Giao hàng miễn chạm</span>
                </button>
                <button onClick={handleClic}>
                  <span>Không cần & Tiếp tục</span>
                  <AiOutlineArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
