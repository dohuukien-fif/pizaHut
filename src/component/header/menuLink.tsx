import * as React from 'react';
import './stylesLink.scss';
import { FaShippingFast, FaStore } from 'react-icons/fa';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { FcRating } from 'react-icons/fc';
import { NavLink } from 'react-router-dom';
export interface IAppProps {
  isorder: boolean;
  setActive: string;
  activeIco: string;
  activeTranForm: (value: string) => {};
}

export default function App({ setActive, activeTranForm, activeIco, isorder }: IAppProps) {
  return (
    <div className="nav_Link-block">
      {/* menu link  */}
      <ul className="menu_Link">
        <li>Khuyến mãi</li>
        <li>
          <span>
            {' '}
            <NavLink to="pizza">Pizza</NavLink>
          </span>
          <div className="dropdow_list">
            <div className="dropdow_item">
              <span>mới</span>
            </div>
            <div className="dropdow_item">
              <span>Công thức Đặc Biết</span>
            </div>
            <div className="dropdow_item">
              <span>Hải Sản Cao Cấp</span>
            </div>
            <div className="dropdow_item">
              <span>Truyền Thống</span>
            </div>
            <div className="dropdow_item">
              <span>Nhâp nhồi</span>
            </div>
          </div>
        </li>
        <li>
          <span>
            {' '}
            <NavLink to="khai-vi">Khai vị</NavLink>
          </span>
        </li>
        <li>
          <span>
            {' '}
            <NavLink to="my-y">Mỳ Ý</NavLink>
          </span>
        </li>
        <li>
          <span>
            {' '}
            <NavLink to="nui-bo-lo">Nui Bỏ Lò</NavLink>
          </span>
        </li>
        <li>
          <span>
            {' '}
            <NavLink to="salad">Salad</NavLink>
          </span>
        </li>
        <li>
          <span>
            {' '}
            <NavLink to="trang-mieng">Tráng miệng</NavLink>
          </span>
        </li>
        <li>
          <span>
            {' '}
            <NavLink to="nuoc-uong">Thức uống</NavLink>
          </span>
        </li>
      </ul>
      {/* mobile {check order => search =>seleted =>account} */}
      <div className="nav_orderMobile">
        <div className="nav_order ">
          <div className={`nav_block ${setActive}`}></div>
          <span onClick={() => activeTranForm('l')}>
            <FaShippingFast
              className={activeIco === 'activeIcon_left' ? activeIco : 'color_icon'}
            />
            <span className={activeIco === 'activeIcon_left' ? activeIco : 'color_icon'}>
              Đặt giao hàng
            </span>
          </span>
          <span onClick={() => activeTranForm('m')}>
            <FaStore className={activeIco === 'activeIcon_right' ? activeIco : 'color_icon'} />
            <span className={activeIco === 'activeIcon_right' ? activeIco : 'color_icon'}>
              Đặt lấy hàng
            </span>
          </span>
        </div>
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
        <div className="nav_account">
          <MdOutlineAccountCircle />
          <span> Đăng nhập</span>/<span>Tạo tài khoản</span> <FcRating />
        </div>
      </div>
    </div>
  );
}
