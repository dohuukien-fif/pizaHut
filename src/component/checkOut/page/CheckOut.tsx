import * as React from 'react';
import './checkout.scss';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import OrderFeatues from './order';
import LoginFeatures from './../page/Login';
import InformationFearutes from './infomation';
import PayloadFeatures from './payload';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { cartOrder, cartAddress } from './../../cart/cartSelected';
import { useSelector } from 'react-redux';
export interface CheckOutFeaturesProps {}

export default function CheckOutFeatures(props: CheckOutFeaturesProps) {
  const location = useLocation();
  console.log(location);
  const CartOrders = useSelector(cartOrder);
  const CartAddresss = useSelector(cartAddress);
  const [active, setActive] = React.useState<string>('active');
  const [number, setnumber] = React.useState<number>(0);
  const navigete = useNavigate();
  const PATCH = '/CheckOut/Thanh-toan';
  let LOGINS = true;
  let LOGINSs = true;

  const handleClic = () => {
    setnumber((prev) => prev + 1);
  };

  React.useEffect(() => {
    (() => {
      if (number === 1 && LOGINS === false) {
        return navigete('/login');
      } else if (number === 1 && CartOrders !== '') {
        setActive('active');
        return navigete('/CheckOut/loginForm');
      }
      if (number === 2 && LOGINS === true) {
        setActive('active');
        return navigete('/CheckOut/Thong-tin');
      }
      if (number === 3 && CartAddresss !== '') {
        setActive('active');
        return navigete('/CheckOut/Thanh-toan');
      } else if (number === 3 && CartAddresss === '') {
        return setnumber(2);
      }
      if (number === 4 && CartOrders !== '' && LOGINS === true && CartAddresss !== '') {
        return setnumber(3);
      } else {
        setnumber(0);
        return navigete('/CheckOut');
      }
    })();
  }, [number]);

  console.log(number);
  return (
    <div className="checkout">
      <div className="checkout_swapper">
        <div className="checkout_progress">
          <div className={number === 0 && CartOrders !== '' ? `step ${active}` : 'step'}>
            <div className="step_number">
              <span>1</span>
            </div>
            <div className="step_name">
              <p>Hình thức đặt hàng</p>
            </div>
          </div>
          <div className={number === 1 ? `step ${active}` : 'step'}>
            <div className="step_number">
              <span>2</span>
            </div>
            <div className="step_name">
              <p> đăng nhập</p>
            </div>
          </div>
          <div className={number === 2 ? `step ${active}` : 'step'}>
            <div className="step_number">
              <span>3</span>
            </div>
            <div className="step_name">
              <p>Thông tin đơn hàng</p>
            </div>
          </div>

          <div className={number === 3 ? `step ${active}` : 'step'}>
            <div className="step_number">
              <span>4</span>
            </div>
            <div className="step_name">
              <p>Thông tin thanh toán</p>
            </div>
          </div>
        </div>
        <div className="checkout_content">
          <Routes>
            <Route path="/*" element={<OrderFeatues />} />
            <Route path="loginForm" element={<LoginFeatures />} />
            <Route path="Thong-tin" element={<InformationFearutes />} />
            <Route path="Thanh-toan" element={<PayloadFeatures />} />

            {/* <Route path="new" element={<AnimeMovie />} /> */}
            {/* <Route element={<CinermerMovie />} /> */}
          </Routes>
        </div>
        <div className={location.pathname === PATCH ? 'checkout_btn activeBtn' : 'checkout_btn'}>
          <button className="btn_continue">
            <AiOutlineArrowLeft />
            Tiếp tục
          </button>
          <button className="btn_payload" onClick={handleClic}>
            Thanh toán
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
