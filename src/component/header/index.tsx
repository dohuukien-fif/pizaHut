import React, { useState, useEffect } from 'react';
import { BsCart3 } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaShippingFast, FaStore } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import Menulink from './menuLink';
import { MdOutlineAccountCircle, MdOutlinePlace } from 'react-icons/md';
import { FcRating } from 'react-icons/fc';
import './styles.scss';
export interface HeadersProps {}

export default function Headers(props: HeadersProps) {
  // const { id, name } = newArrays;
  const [setActive, setsetActive] = useState<string>('');
  const [isorder, setisorder] = useState<boolean>(false);
  const [isopen, setisopen] = useState<boolean>(false);
  const [isScroll, setisScroll] = useState<boolean>(false);

  const activeTranForm = (value?: string) => {
    console.log(value);
    if (value === 'l') {
      console.log('active_left');
      setsetActive('active_left');
      setisorder(false);
    }
    if (value === 'm') {
      console.log('active_right');
      setsetActive('active_right');
      setisorder(true);
    }
    return '';
  };
  // console.log('iz', setActive);

  useEffect(() => {
    const ScrollNavBar = () => {
      if (window.scrollY) {
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
  return (
    <nav className={isScroll ? 'nav activeNavBar' : 'nav'}>
      <div className="nav_top">
        {/* logo website */}
        <div className="nav_icon">
          <img
            src="https://image.shutterstock.com/image-vector/pizza-daily-fresh-vector-emblem-600w-1901059681.jpg"
            alt=""
          />
        </div>
        {/* https://vislogo.com.vn/upload/image/pizzanew.jpg */}
        {/* <span onClick={() => setisopen((x) => !x)}> kien dp</span> */}
        {/* check order */}
        <div className="nav_info">
          <div className="nav_order">
            <div className={`nav_block ${setActive}`}></div>
            <span onClick={() => activeTranForm('l')}>
              {' '}
              <FaShippingFast />
              Đặt giào hàng
            </span>
            <span onClick={() => activeTranForm('m')}>
              {' '}
              <FaStore />
              Đặt lấy hàng
            </span>
          </div>
          {/* torget input search = selectd */}
          <div className="nav_search">
            {isorder === false && (
              <div className="nav_input">
                <input type="text" placeholder="Nhập địa chỉ của bạn" />
              </div>
            )}
            {isorder === true && (
              <div className="nav_Select">
                <form action="/action_page.php">
                  <input list="browsers" name="browser" placeholder="Chon cửa hàng" />
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
            <AiOutlineSearch />
            <BsCart3 />
            {isopen ? (
              <GrClose style={{ color: 'white' }} onClick={() => setisopen((x) => !x)} />
            ) : (
              <FiMenu onClick={() => setisopen((x) => !x)} />
            )}
          </div>
        </div>
        {/* menu account mobile : none  ,  tablet : block */}
        <div className="nav_account">
          <MdOutlineAccountCircle />
          <span>Đăng nhập</span>/<span>Tạo tài khoản</span> <FcRating />
        </div>
      </div>
      <div className={isopen ? 'nav_Link actives_link' : 'nav_Link'}>
        <Menulink setActive={setActive} activeTranForm={activeTranForm} isorder={isorder} />
        {/* menu cart */}
        <div className="nav_carts">
          <AiOutlineSearch />
          <div className="nav_cart">
            <BsCart3 />
            <span>Giỏ hàng</span>
            <span>0</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
