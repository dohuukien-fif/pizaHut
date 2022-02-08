import React, { useState, useEffect, useRef } from 'react';
import { BsCart3 } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import {
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineLoading3Quarters,
  AiTwotoneHome,
  AiOutlineHome,
} from 'react-icons/ai';
import { FaShippingFast, FaStore } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import Menulink from './menuLink';
import { MdOutlineAccountCircle, MdOutlinePlace } from 'react-icons/md';
import { FcRating } from 'react-icons/fc';
import './styles.scss';
import { useNavigate, Link } from 'react-router-dom';
import { cartFeaturesProps } from '../cart/page/interface';
import { formatPrice } from '../../utils';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import LoadingInput from '../loadingFeatures/loadingInput/loadingInput';
import { dataLisst } from '../hooks';
import { logout } from './../../app/userRedux';
import { useSelector, useDispatch } from 'react-redux';
import { cartItemCount, cartItemSelector, Cartitem, cartAddress } from './../cart/cartSelected';
import { setOrder, setAddress } from './../../app/cartRedux';
export interface HeadersProps {}

export default function Headers(props: HeadersProps) {
  const [DataCart, setDataCart] = React.useState<any>([]);
  // const { id, name } = newArrays;
  const [setActive, setsetActive] = useState<string>('');
  const [isorder, setisorder] = useState<boolean>(false);
  const [isopen, setisopen] = useState<boolean>(false);
  const [isScroll, setisScroll] = useState<boolean>(false);
  const [isOpenSearch, setisOpenSearch] = useState(false);
  const [Error, setError] = useState<string>('');
  const [loading, setloading] = useState(false);
  const [SearchTerm, setSearchTerm] = useState('');
  const [activeIco, setactiveIco] = useState<string>('activeIcon_left');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const count = useSelector(cartItemCount);
  const users = useSelector((state: any) => state.user.current);
  const dataCart = useSelector(cartItemSelector);
  const CartAddress = useSelector(cartAddress);
  const priceItem = useSelector(Cartitem);
  const deboun: any = useRef(null);

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
      }, 1000);
    });

    // navigate({ search: SearchTerm.trim("") });
    // location.search(`${SearchTerm}`);
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
  return (
    <nav className="nav">
      <div className="nav_block">
        <div className="nav_top">
          {/* logo website */}
          <div className="nav_icon">
            <Link to="/">
              <img
                src="https://image.shutterstock.com/image-vector/pizza-daily-fresh-vector-emblem-600w-1901059681.jpg"
                alt=""
              />
            </Link>
          </div>
          {/* https://vislogo.com.vn/upload/image/pizzanew.jpg */}
          {/* <span onClick={() => setisopen((x) => !x)}> kien dp</span> */}
          {/* check order */}
          <div className="nav_info">
            <div className="nav_order">
              <div className={`nav_block ${setActive}`}></div>
              <span onClick={() => activeTranForm('l')}>
                {' '}
                <FaShippingFast
                  className={activeIco === 'activeIcon_left' ? activeIco : 'color_icon'}
                />
                <span className={activeIco === 'activeIcon_left' ? activeIco : 'color_icon'}>
                  {' '}
                  Đặt giào hàng
                </span>
              </span>
              <span onClick={() => activeTranForm('m')}>
                {' '}
                <FaStore className={activeIco === 'activeIcon_right' ? activeIco : 'color_icon'} />
                <span className={activeIco === 'activeIcon_right' ? activeIco : 'color_icon'}>
                  {' '}
                  Đặt lấy hàng
                </span>
              </span>
            </div>
            {/* torget input search = selectd */}
            <div className="nav_search">
              {isorder === false && (
                <div className="nav_input">
                  <input
                    type="text"
                    placeholder="Nhập địa chỉ của bạn"
                    onChange={handleChangeInput}
                  />
                  <MdOutlinePlace />
                </div>
              )}
              {isorder === true && (
                <div className="nav_Select">
                  <form action="/action_page.php">
                    <AiOutlineHome />
                    <input
                      list="browsers"
                      name="browser"
                      placeholder="Nhập cửa hàng"
                      onChange={handleChangeInput}
                    />
                    <datalist id="browsers">
                      <option value="The Piza Company Song Hành Explorer">
                        The Piza Company Song Hành
                      </option>
                      <option value="The Piza Company Estella">The Piza Company Estella</option>
                      <option value="The Piza Nguyễn Thị Minh Khai">
                        The Piza Nguyễn Thị Minh Khai
                      </option>
                      <option value="The Piza Company Lê Van Sỹ">The Piza Company Lê Van Sỹ</option>
                      <option value="The Piza Company Hậu Giang">The Piza Company Hậu Giang</option>
                    </datalist>
                  </form>
                </div>
              )}
            </div>
          </div>
          {/* menu mobile {search , cart ,menu tab} */}
          <div className="nav_menu">
            <div className="menu_block">
              <div className="search_pizzaMobile">
                <AiOutlineSearch onClick={() => setisOpenSearch((x) => !x)} />
                {isOpenSearch && (
                  <form onSubmit={handleSubmit}>
                    <div className="form_add">
                      <input
                        type="text"
                        value={SearchTerm}
                        placeholder="Tìm kiếm sản phẩm"
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <button type="submit">
                        {' '}
                        {loading ? (
                          <div className="loading_featurees">
                            <AiOutlineLoading3Quarters />
                          </div>
                        ) : (
                          <AiOutlineSearch />
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
              <div className="icon_cart">
                <BsCart3 />
                <span>{count}</span>
              </div>
              <span>Giỏ hàng</span>
              {isopen ? (
                <AiOutlineClose className="icon_close" onClick={() => setisopen((x) => !x)} />
              ) : (
                <FiMenu onClick={() => setisopen((x) => !x)} />
              )}
            </div>
          </div>
          {/* menu account mobile : none  ,  tablet : block */}
          <div className="nav_account">
            <h1 onClick={hanleLooutClick}>locout</h1>
            <h1>{users?.username}</h1>
            <MdOutlineAccountCircle />
            <span>
              <Link to="/login">Đăng nhập</Link>
            </span>
            /
            <span>
              <Link to="/register">Tạo tài khoản</Link>
            </span>{' '}
            <FcRating />
          </div>
        </div>
        <div className={isopen ? 'nav_Link actives_link' : 'nav_Link'}>
          <Menulink
            setActive={setActive}
            activeTranForm={activeTranForm}
            isorder={isorder}
            activeIco={activeIco}
          />
          {/* menu cart tablet =>laptop */}
          <div className="nav_carts">
            <div className="search_pizza">
              <AiOutlineSearch onClick={() => setisOpenSearch((x) => !x)} />
              {isOpenSearch && (
                <form onSubmit={handleSubmit}>
                  <div className="form_add">
                    <input
                      type="text"
                      placeholder="Tìm kiếm sản phẩm"
                      value={SearchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button type="submit">
                      {' '}
                      {loading ? (
                        <div className="loading_featurees">
                          <AiOutlineLoading3Quarters />
                        </div>
                      ) : (
                        <AiOutlineSearch />
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
            <div className="nav_cart" onClick={handleClickLinkCart}>
              <BsCart3 />

              <span>Giỏ hàng</span>
              <span>{count}</span>

              <div className="nav_miniCart">
                {dataCart?.length === 0 ? (
                  <div className="flayout_cart">
                    <h2>Rất tiếc!!! Bạn không có sản phẩm ở đây</h2>
                    <p>
                      Chúng tối sẽ giao hàng vói hóa đơn trên <strong>100,000đ</strong>
                    </p>
                  </div>
                ) : (
                  <div className="miniCart_list">
                    {dataCart?.map((items: any, index: number) => (
                      <div className="miniCart_item" key={index}>
                        <div className="miniCart_blocks">
                          <div className="miniCart_left">
                            <div className="miniCart_aside">
                              <img src={items.product.image} alt={items.product.name} />
                            </div>
                          </div>

                          <div className="miniCart_right">
                            <div className="right_block">
                              <div className="miniCart_add">
                                <div className="miniCart_add-left">
                                  <div className="miniCart_name">
                                    <span>{items.product.name}</span>
                                  </div>
                                  {items.product.size.name && (
                                    <div className="miniCart_sizeName">
                                      <span>{`Kích thước - ${items.product.size.name}`}</span>
                                    </div>
                                  )}

                                  {items.product.soles && (
                                    <div className="miniCart_soles">
                                      <span>{`Đế - ${items.product.soles}`}</span>
                                    </div>
                                  )}
                                  {items.product.more.name && (
                                    <div className="miniCart_more">
                                      <span>{`Thếm nhân - ${items.product.more.name}`}</span>
                                    </div>
                                  )}
                                </div>
                                <div className="miniCart_delete">
                                  <RiDeleteBin6Fill />
                                </div>
                              </div>
                              <div className="miniCart_bottom">
                                <div className="miniCart_quantity">
                                  <span>Số lượng: 1</span>
                                </div>
                                <div className="miniCart_price">
                                  <span>
                                    {formatPrice(
                                      (items.product.price +
                                        items.product.size.price +
                                        items.product.more.price) *
                                        items.quantity
                                    )}
                                  </span>
                                </div>
                              </div>
                              {/* <div className="miniCart_quantity">
                          
                            </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {dataCart.length > 0 && (
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
