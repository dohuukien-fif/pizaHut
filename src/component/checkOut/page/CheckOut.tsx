import * as React from 'react';
import './checkout.scss';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import OrderFeatues from './order';
import LoginFeatures from './../page/Login';
import InformationFearutes from './infomation';
import PayloadFeatures from './payload';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { cartOrder, cartAddress, cartItemSelector } from './../../cart/cartSelected';
import { useSelector, useDispatch } from 'react-redux';
import SuccerFeatures from './succer';
import { setAddress, setAddressOld } from '../checkOutRedux';
import { boolean } from 'yup/lib/locale';

export interface CheckOutFeaturesProps {}

export default function CheckOutFeatures(props: CheckOutFeaturesProps) {
  const location = useLocation();
  console.log(location);
  const dispatch = useDispatch();
  const CartOrders = useSelector(cartOrder);
  const CartAddresss = useSelector(cartAddress);
  const cartItemSelectors = useSelector(cartItemSelector);
  // console.log('nnung', CartAddresss);
  // const isValue = Object.values(CartAddresss).some((e) => e !== '');

  // console.log(isValue);

  const [active, setActive] = React.useState<string>('active');
  const [number, setnumber] = React.useState<number>(0);
  const [isInfor, setisInfor] = React.useState<boolean>();

  const [isform, setisform] = React.useState<any>({
    fullName: '',
    phone: '',
    home: '',
    street: '',
    city: '',
    coutry: '',
    time: '',
  });
  const [isStore, setisStore] = React.useState<any>({
    fullName: '',
    phone: '',
    street: '',
    city: '',
    coutry: '',
    store: '',
  });
  const navigete = useNavigate();
  const PATCH = '/CheckOut/Thong-tin';
  let LOGINS = true;

  let INFORVALUE = Object.values(isform).includes('');
  let STOREVALUE = Object.values(isStore).includes('');

  let INFORSTORE =
    (INFORVALUE === false && STOREVALUE === true) || (STOREVALUE === false && INFORVALUE === true);
  // console.log('number', isform);

  // console.log(isform, isStore);
  const handleClic = () => {
    setnumber((prev) => prev + 1);
  };

  const handleBackHome = () => {
    navigete('/');
  };
  const handleBackbefore = () => {
    console.log('ngu');
    setnumber((prev) => prev - 1);
    navigete(-1);

    if (location.pathname !== PATCH) {
      setisStore({
        fullName: '',
        phone: '',
        street: '',
        city: '',
        coutry: '',
        store: '',
      });
      setisform({
        fullName: '',
        phone: '',
        home: '',
        street: '',
        city: '',
        coutry: '',
        streets: '',
      });
    }
  };


  React.useEffect(() => {
    (() => {
      // if (cartItemSelectors.length === 0) {
      //   return navigete('/');
      // }
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
      if (number === 3 && INFORSTORE === false) {
        return setnumber(2);
      } else if (number === 3 && INFORSTORE == true) {
        const action = setAddress(isform);
        const actionOld = setAddressOld(isform);
        dispatch(action);
        dispatch(actionOld);
        setActive('active');
        return navigete('/CheckOut/Thanh-toan');
      }
      if (number === 4 && CartOrders !== '' && LOGINS === true && CartAddresss !== '') {
        return navigete('/CheckOut/Hoa-don');
      } else {
        setnumber(0);
        return navigete('/CheckOut');
      }
    })();
  }, [number, navigete, isform, isStore]);
  const handleSubmit = async (value: any) => {
    console.log('condimem', value);
    if (value) {
      setnumber(3);
      await setisform(value);
    }
  };
  const handleSubmits = (value: any) => {
    setisStore(value);
  };
  return (
    <div className="checkout">
      <div className="checkout_swapper">
        <div className={number >= 4 ? 'checkout_progress activenone' : 'checkout_progress'}>
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

          <div className={number === 3 && INFORSTORE === true ? `step ${active}` : 'step'}>
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
            <Route
              path="loginForm"
              element={
                <LoginFeatures
                  numbers={number}
                  handleBackbefore={handleBackbefore}
                  handleClic={handleClic}
                />
              }
            />
            <Route
              path="Thong-tin"
              element={
                <InformationFearutes
                  setnumber={setnumber}
                  setisform={handleSubmit}
                  setisstore={handleSubmits}
                  setisStores={setisStore}
                  setisforms={setisform}
                  numbers={number}
                  handleBackbefore={handleBackbefore}
                  handleClic={handleClic}
                />
              }
            />
            <Route
              path="Thanh-toan"
              element={
                <PayloadFeatures
                  numbers={number}
                  handleBackbefore={handleBackbefore}
                  handleClic={handleClic}
                />
              }
            />
            <Route path="Hoa-don" element={<SuccerFeatures />} />

            {/* <Route path="new" element={<AnimeMovie />} /> */}
            {/* <Route element={<CinermerMovie />} /> */}
          </Routes>
        </div>
        {location.pathname === '/CheckOut' && (
          <div className="checkout_btn">
            <button className="btn_continue" onClick={handleBackHome}>
              <AiOutlineArrowLeft />
              Tiếp tục
            </button>
            <button className="btn_payload" onClick={handleClic}>
              Thanh toán
              <AiOutlineArrowRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
