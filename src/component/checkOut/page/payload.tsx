import * as React from 'react';
import './payload.scss';
import { AiFillClockCircle, AiFillCheckCircle } from 'react-icons/ai';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { FcMoneyTransfer } from 'react-icons/fc';
import {
  cartAddress,
  cartOrder,
  cartAddressOld,
  cartchecked,
  cartStore,
  cartItemSelector,
  Cartitem,
  quantity,
} from './../../cart/cartSelected';
import { useDispatch, useSelector } from 'react-redux';
import { cartFeaturesProps } from '../../cart/page/interface';
import { formatPrice } from '../../../utils';
import { addCheckOut } from '../checkOutRedux';
export interface PayloadFeaturesProps {
  numbers: any;
  handleClic: any;
  handleBackbefore: any;
}

export default function PayloadFeatures({
  numbers,
  handleClic,
  handleBackbefore,
}: PayloadFeaturesProps) {
  const quantitys = useSelector(quantity);
  const CartAddresss = useSelector(cartAddress);
  const cartAddressOlds = useSelector(cartAddressOld);
  const cartcheckeds = useSelector(cartchecked);
  const cartStores = useSelector(cartStore);
  const cartOrders = useSelector(cartOrder);
  const DataCart = useSelector(cartItemSelector);
  const dispatch = useDispatch();
  const dates = new Date();
  const dataday = `${dates.getDate()}/${dates.getMonth() + 1}/${dates.getFullYear()}`;
  const datahour = `${dates.getHours()}:${dates.getMinutes() + 1}:${dates.getSeconds()}`;
  const ValueRef = React.useRef<any>();
  const Total = useSelector(Cartitem);
  const [active, setactive] = React.useState<string>('money');
  const [isChecked, setisChecked] = React.useState<boolean>(false);
  console.log('stroe', cartStores);
  // console.log('nonono', JSON.parse(cartAddressOlds));
  const [codeDiscount, setcodeDiscount] = React.useState<string>('');
  const [discounts, setdiscount] = React.useState<any[]>([
    {
      name: 'piza20',
      price: 200000,
    },
    {
      name: 'piza30',
      price: 200000,
    },
    {
      name: 'piza60',
      price: 600000,
    },
  ]);

  // console.log('taoal', Total - 200000);

  const DISCOUTPIZZA = discounts.map((e) => e.name).includes(codeDiscount)
    ? discounts
        .filter((e) => e.name === codeDiscount)
        .find((element) => {
          if (element.name.includes(codeDiscount)) return element.name;
        })
    : console.log(' ngu dux  z');

  const NEWTOAL = Boolean(DISCOUTPIZZA) ? Total - DISCOUTPIZZA?.price : Total;

  console.log('NNEWTOTAL', discounts.map((e) => e.name).includes(codeDiscount));
  // console.log(
  //   'DISCOUNT',
  //   discounts.find((element) => {
  //     if (element.name.includes('piza30')) return element;
  //   })
  //     ? Total - DISCOUTPIZZA?.price
  //     : Total
  // );

  // const BLOEA = DISCOUTPIZZA;
  // console.log('4', !!BLOEA);
  console.log('bolea', Boolean(DISCOUTPIZZA) ? Total - DISCOUTPIZZA.price : Total);
  console.log('okne', Boolean(DISCOUTPIZZA) === false ? Total : DISCOUTPIZZA[0]?.total);

  const handlecheck = (e: any) => {
    console.log(e.target.value);
    if (e.target.value) {
      setisChecked(true);
      setactive(e.target.value);
    } else {
      setisChecked(false);
      setactive('');
    }
  };

  const SHIPERDELIVERY =
    cartOrders === 'Đặt giao hàng' &&
    (cartcheckeds === false ? (
      <span>{`${cartAddressOlds.street},${cartAddressOlds.coutry},${cartAddressOlds.city}`}</span>
    ) : (
      <span>{`${CartAddresss.street},${CartAddresss.coutry},${CartAddresss.city}`}</span>
    ));

  const hanndleClick = () => {
    setcodeDiscount(ValueRef.current.value);
  };
  const setCheckOutData = () => {
    handleClic();

    const action = addCheckOut({
      code: Math.floor(Math.random() * 4000) + 100,
      day: dataday,
      time: datahour,
      product: DataCart,
      total: NEWTOAL,
      discount: Total - NEWTOAL,
      order: cartOrders,
      store: cartStores,
      address: cartcheckeds ? CartAddresss : cartAddressOlds,
    });

    dispatch(action);
  };
  return (
    <div className="payload">
      <div className="payload_swapper">
        <div className="payload_block">
          <div className="payload_left">
            <div className="payload_left-top">
              <div className="payload_left-title">
                <span>Thông tin nhận hàng</span>
              </div>
              <div className="payload_left-address">
                <div className="payload_left-address-top">
                  <span>Nhận hàng tại:</span>

                  {/* <span>{`${cartStores}`}</span> */}
                  {SHIPERDELIVERY}
                  {cartOrders === 'Đặt lấy hàng' && <span>{cartStores.store}</span>}
                  {}
                </div>
                {cartOrders === 'Đặt lấy hàng' && (
                  <div className="payload_left-address-bottom">
                    <span>{cartStores.address}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="payload_left-bottom">
              <div className="payload_left-titlePay">
                <span>Phường thức thanh toán</span>
              </div>
              <div className="payload_left-pay">
                <div className="payload_left-pay-title">
                  <span>
                    Phường thức thanh toán <strong>*</strong>
                  </span>
                </div>
                <div className="payload_left-pay-content">
                  {active !== 'money' ? (
                    <input type="radio" value="money" name="pay" onChange={handlecheck} />
                  ) : (
                    <AiFillCheckCircle />
                  )}

                  <div
                    className={
                      active === 'money'
                        ? `payload_left-pay-money activePay`
                        : 'payload_left-pay-money'
                    }
                  >
                    <div className="payload_left-pay-icon">
                      <FcMoneyTransfer />
                    </div>
                    <div className="payload_left-pay-infor">
                      <p>Thanh toán khi nhận hàng</p>
                      <p>Trả bằng tiền mặt - đơn hàng dưới 1.000.000đ</p>
                    </div>
                  </div>
                </div>
                <div className="payload_left-pay-content">
                  {active !== 'momo' ? (
                    <input type="radio" value="momo" name="pay" onChange={handlecheck} />
                  ) : (
                    <AiFillCheckCircle />
                  )}

                  <div
                    className={
                      active === 'momo'
                        ? `payload_left-pay-money activePay`
                        : 'payload_left-pay-money'
                    }
                  >
                    <div className="payload_left-pay-icon">
                      <img
                        src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBM0E3SHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--98ad6550665270931a546757db0e58f65b0505bc/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFJc0FXa0NMQUU9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--ee4e4854f68df0a745312d63f6c2782b5da346cd/MoMo%20Logo.png"
                        alt=""
                      />
                    </div>
                    <div className="payload_left-pay-infor">
                      <p>Thanh toán khi nhận hàng</p>
                      <p>Bạn sẽ được dẫn hướng đến trang của Momo để thực hiện thanh toán</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="payload-right">
            <div className="payload_right-top">
              <div className="payload_right-voucher">
                <div className="payload_right-voucher-title">
                  <h3>Voucher/Code</h3>
                  <span>Nhập mã khuyến mãi của bạn tại đây</span>
                </div>
                <div className="payload_right-voucher-check">
                  <input type="text" ref={ValueRef} />
                  <button onClick={hanndleClick}>Áp dụng</button>
                </div>
              </div>
            </div>
            <div className="payload_right-bottom">
              <div className="payload_right-bottom-title">
                <h3>Đơn hàng của bạn</h3>
              </div>
              <div className="payload_right-bottom-content">
                {/* MAP CART iTEM */}

                <div className="payload_right-bottom-list">
                  {DataCart?.map((items: cartFeaturesProps, index: any) => (
                    <div className="payload_right-bottom-item" key={index}>
                      <div className="payload_right-bottom-length">
                        <span>{index}</span>
                      </div>
                      <div className="payload_right-bottom-product">
                        <div className="payload_right-bottom-name">
                          <span>{items.product.name}</span>
                          <span>X1</span>
                        </div>
                        <div className="payload_right-bottom-continent">
                          <div className="payload_right-bottom-size">
                            <span>{`Kích thước - ${items.product.size.name}`}</span>
                          </div>
                          <div className="payload_right-bottom-soles">
                            <span>{`Đế - ${items.product.soles}`}</span>
                          </div>
                          <div className="payload_right-bottom-more">
                            <span>{`Thêm nhân - Cà chua`}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="payload_right-bottom-price">
                  <span>{formatPrice(Total) || '0d'}</span>
                </div>
              </div>

              <div className="payload_right-bottom-check">
                <div className="payload_right-bottom-group">
                  <div className="payload_right-bottom-group-name">
                    <span>Tạm tính (x1)</span>
                  </div>
                  <div className="payload_right-bottom-group-price">
                    <span>{formatPrice(Total) || '0d'}</span>
                  </div>
                </div>
                <div className="payload_right-bottom-group">
                  <div className="payload_right-bottom-group-name">
                    <span>Phụ thu</span>
                  </div>
                  <div className="payload_right-bottom-group-price">
                    <span>0đ</span>
                  </div>
                </div>
                <div className="payload_right-bottom-group">
                  <div className="payload_right-bottom-group-name">
                    <span>Giảm giá</span>
                  </div>
                  <div className="payload_right-bottom-group-price">
                    <span>{`-  ${formatPrice(Total - NEWTOAL)}`}</span>
                  </div>
                </div>
                <div className="payload_right-bottom-group">
                  <div className="payload_right-bottom-group-name">
                    <span>Thuế</span>
                  </div>
                  <div className="payload_right-bottom-group-price">
                    <span>0đ</span>
                  </div>
                </div>
                <div className="payload_right-bottom-group">
                  <div className="payload_right-bottom-group-name">
                    <span>Phí giao hàng</span>
                  </div>
                  <div className="payload_right-bottom-group-price">
                    <span>0đ</span>
                  </div>
                </div>
              </div>
              <div className="payload_right-bottom-total">
                <span>Tổng tiền</span>
                <span>{formatPrice(NEWTOAL) || '0d'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={numbers >= 4 ? 'checkout_btn activenone' : 'checkout_btn'}>
        <button type="button" className="btn_continue btn-back" onClick={handleBackbefore}>
          <AiOutlineArrowLeft />
          Quay lại
        </button>
        <button className="btn_payload" onClick={setCheckOutData}>
          Đặt hàng
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
}
