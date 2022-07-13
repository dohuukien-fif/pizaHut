import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineLoading3Quarters, AiOutlineSearch } from 'react-icons/ai';
import { BsCart3 } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { formatPrice } from '../../utils';
import { removeProduct } from './../../app/cartRedux';
import { logout } from './../../app/userRedux';
import { cartAddress, Cartitem, cartItemCount, cartItemSelector } from './../cart/cartSelected';
import { setAddress, setOrder, setStore } from './../checkOut/checkOutRedux';
import { StoreProps } from './interface';
import Menulink from './menuLink';
import MinniCartItem from './miniCartItem';
import NavTop from './nav/navTop';
import './styles.scss';
export interface HeadersProps {}

export default function Headers(props: HeadersProps) {
  const [DataCart, setDataCart] = React.useState<any>([]);
  // const { id, name } = newArrays;
  const userInfor = useSelector((state: any) => state.user.current);

  console.log('[userInfor]', userInfor);
  const [store, setstore] = React.useState<StoreProps[]>([
    {
      stores: 'THE PIZZA COMPANY SONG HÀNH',
      address: '81 song hành,P An phú , Quận 2 ,HCM',
      phone: '0969757507',
    },
    {
      stores: 'THE PIZZA COMPANY NGUYỄN THỊ MINH KHAI',
      address: '81 song hành,P An phú , Quận 2 ,HCM',
      phone: '0969757507',
    },
    {
      stores: 'THE PIZZA COMPANY 333 LÊ VĂN SỸ',
      address: '81 song hành,P An phú , Quận 2 ,HCM',
      phone: '0969757507',
    },
  ]);
  const [setActive, setsetActive] = useState<string>('');
  const [isorder, setisorder] = useState<boolean>(false);
  const [isopen, setisopen] = useState<boolean>(false);
  const [isScroll, setisScroll] = useState<boolean>(false);
  const [isOpenSearch, setisOpenSearch] = useState(false);
  const [Error, setError] = useState<string>('');
  const [openMenuAccount, setopenMenuAccount] = useState(false);
  const [loading, setloading] = useState(false);
  const [SearchTerm, setSearchTerm] = useState('');
  const [activeIco, setactiveIco] = useState<string>('activeIcon_left');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const count = useSelector(cartItemCount);
  const closeRef = useRef(null);
  const dataCart = useSelector(cartItemSelector);
  const CartAddress = useSelector(cartAddress);
  const priceItem = useSelector(Cartitem) || 0;
  const deboun: any = useRef(null);
  const inputRef = useRef<any>('');

  console.log('dataCart', dataCart);
  const handleOpenMenuAccount = () => {
    setopenMenuAccount((x) => !x);
  };

  const handleDeleteCart = (id: string) => {
    const action = removeProduct(id);
    dispatch(action);
  };

  const location = useLocation();
  const activeTranForm = (value?: string) => {
    if (value === 'l') {
      setsetActive('active_left');
      setactiveIco('activeIcon_left');
      setisorder(false);
      dispatch(setOrder('Đặt giao hàng'));
    }
    if (value === 'm') {
      setsetActive('active_right');
      setactiveIco('activeIcon_right');
      setisorder(true);
      dispatch(setOrder('Đặt lấy hàng'));
    }
    return '';
  };

  const hanleLooutClick = () => {
    const action = logout();
    dispatch(action);
  };
  // console.log('iz', setActive);

  useEffect(() => {
    const ScrollNavBar = () => {
      if (screen.width > 1024 && window.scrollY > 500) {
        setisScroll(true);
      } else {
        setisScroll(false);
      }
    };
    window.addEventListener('scroll', ScrollNavBar);
    return () => {
      window.removeEventListener('scroll', ScrollNavBar);
    };
  }, [window.scrollY]);

  const handleClickLinkCart = () => {
    navigate('/cart');
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();

    return new Promise<boolean>((resolve) => {
      setloading(true);
      setTimeout(() => {
        navigate(`/search?q=${SearchTerm}`);
        resolve(true);
        setloading(false);
        setSearchTerm('');
        setisOpenSearch(false);
      }, 1000);
    });

    // navigate({ search: SearchTerm.trim("") });
    // location.search(`${SearchTerm}`);
  };
  const sizeRef: any = useRef();
  const handleChangeselected = (e: any) => {
    const values = e.target.value;

    console.log('values', values, 'ref', inputRef.current.label);
    dispatch(
      setStore({
        store: values,
        address: inputRef.current.label,
      })
    );
  };
  const handleChangeInput = (e: any) => {
    // const values = e.target.value;
    const values = e.target.value;
    if (deboun.current) {
      clearTimeout(deboun.current);
    }
    deboun.current = setTimeout(() => {
      dispatch(setAddress(values));
    }, 500);
  };

  const handlePay = () => {
    if (dataCart.length === 0) {
      setError('vui lòng mua hàng ');
    }
    if (CartAddress === '') {
      setError('vui lòng nhập địa chỉ của bạn');
    }

    return setError('');
  };

  useEffect(() => {
    const hanndleWindowClose = (e: any) => {
      if (e.target === closeRef.current) {
        setopenMenuAccount(false);
      }
    };
    window.addEventListener('click', hanndleWindowClose);

    return () => window.removeEventListener('click', hanndleWindowClose);
  }, []);

  useEffect(() => {
    const hanndleWindowClose = (e: any) => {
      if (window.innerWidth > 700) {
        setisopen(false);
      }
    };

    window.addEventListener('resize', hanndleWindowClose);

    return () => window.removeEventListener('resize', hanndleWindowClose);
  }, [window.innerWidth]);
  const checkCategory = ['piza', 'newDish'];

  useEffect(() => {
    const hanndleWindowClose = (e: any) => {};

    const classScroll = document.getElementsByClassName('nav');

    console.log(classScroll);
    window.addEventListener('resize', hanndleWindowClose);

    return () => window.removeEventListener('resize', hanndleWindowClose);
  }, []);

  // document.getElementsByClassName('active_scroll').style.background = '10px';

  //.style.top = `${sizeRef.current.clientHeight}px`;

  useEffect(() => {
    setisopen(false);
  }, [location.pathname]);
  return (
    <nav className={isScroll ? 'nav activeNav' : 'nav'} ref={sizeRef}>
      <div className="nav_block">
        <NavTop
          closeRef={closeRef}
          setActive={setActive}
          activeIco={activeIco}
          isorder={isorder}
          activeTranForm={activeTranForm}
          handleChangeInput={handleChangeInput}
          handleChangeselected={handleChangeselected}
          store={store}
          inputRef={inputRef}
          isOpenSearch={isOpenSearch}
          setisOpenSearch={setisOpenSearch}
          handleSubmit={handleSubmit}
          SearchTerm={SearchTerm}
          setSearchTerm={setSearchTerm}
          loading={loading}
          handleClickLinkCart={handleClickLinkCart}
          count={count}
          setisopen={setisopen}
          isopen={isopen}
          userInfor={userInfor}
          handleOpenMenuAccount={handleOpenMenuAccount}
          openMenuAccount={openMenuAccount}
          hanleLooutClick={hanleLooutClick}
        />
        <div className={isopen ? 'nav_Link actives_link' : 'nav_Link'}>
          <Menulink
            setActive={setActive}
            activeTranForm={activeTranForm}
            isorder={isorder}
            activeIco={activeIco}
            handleOpenMenuAccount={handleOpenMenuAccount}
            openMenuAccount={openMenuAccount}
            hanleLooutClick={hanleLooutClick}
          />
          {/* menu cart tablet =>laptop */}
          <div className="nav_carts">
            <div className="nav_cart" onClick={handleClickLinkCart}>
              <BsCart3 />

              <span>Giỏ hàng</span>
              <span className="nav_cart-count">
                {Object.keys(userInfor).length === 0 ? 0 : count}
              </span>

              <div className="nav_miniCart">
                {dataCart?.length === 0 || Object.keys(userInfor).length === 0 ? (
                  <div className="flayout_cart">
                    <h2>Rất tiếc!!! Bạn không có sản phẩm ở đây</h2>
                    <p>
                      Chúng tối sẽ giao hàng vói hóa đơn trên <strong>100,000đ</strong>
                    </p>
                  </div>
                ) : (
                  <div className="miniCart_list">
                    {dataCart?.map((items: any, index: number) => (
                      <MinniCartItem
                        items={items}
                        key={index}
                        handleDeleteCart={handleDeleteCart}
                        checkCategory={checkCategory}
                      />
                    ))}
                  </div>
                )}

                {dataCart.length > 0 && Object.keys(userInfor).length > 0 && (
                  <div className="miniCart_total">
                    <div className="miniCart_total-block">
                      <div className="minicart_title">
                        <span>Tổng Tiền:</span> <span>{formatPrice(priceItem)}</span>
                      </div>
                      <div className="miniCart_bottom">
                        <button onClick={handlePay}>
                          <p>Thanh toán</p>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
