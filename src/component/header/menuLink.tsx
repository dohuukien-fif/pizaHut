import * as React from 'react';
import './stylesLink.scss';
import { FaShippingFast, FaStore } from 'react-icons/fa';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { FcRating } from 'react-icons/fc';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
export interface IAppProps {
  isorder: boolean;
  setActive: string;
  activeIco: string;
  activeTranForm: (value: string) => {};
  handleOpenMenuAccount: () => void;
  openMenuAccount: boolean;
  hanleLooutClick: () => void;
}

export default function App({
  setActive,
  activeTranForm,
  activeIco,
  isorder,
  handleOpenMenuAccount,
  openMenuAccount,
  hanleLooutClick,
}: IAppProps) {
  const userInfor = useSelector((state: any) => state.user.current);
  const isUserInfor = Boolean(Object.keys(userInfor).length);
  const navigate = useNavigate();

  console.log('[location[', location);

  const handleNavigateLogin = () => {
    localStorage.setItem('URL__REDIREST', JSON.stringify(location.pathname));
    navigate('/login');
  };

  const handleNavigateRegister = () => {
    localStorage.setItem('URL__REDIREST', JSON.stringify(location.pathname));
    navigate('/register');
  };
  const handleNavigeteProfile = () => {
    navigate('/profile');
  };
  const handleNavigeteAccount = () => {
    navigate('/tai-khoan/chi-tiet-don-hang');
  };
  return (
    <div className="nav_Link-block">
      {/* menu link  */}
      <ul className="menu_Link">
        <li>
          <span>
            <NavLink to="/">Khuyến mãi</NavLink>
          </span>
        </li>
        <li>
          <span>
            {' '}
            <NavLink to="pizza">Pizza</NavLink>
          </span>
          <div className="dropdow_list">
            <div className="dropdow_item">
              <Link to="/pizza/newDish">
                <span>mới</span>
              </Link>
            </div>
            <div className="dropdow_item">
              <Link to="/pizza/special">
                <span>Công thức Đặc Biết</span>
              </Link>
            </div>
            <div className="dropdow_item">
              <Link to="/pizza/seafood">
                <span>Hải Sản Cao Cấp</span>
              </Link>
            </div>
            <div className="dropdow_item">
              <Link to="/pizza/stuffing">
                <span>Truyền Thống</span>
              </Link>
            </div>
            <div className="dropdow_item">
              <Link to="/pizza/traditional">
                <span>Nhâp nhồi</span>
              </Link>
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
          {isUserInfor && (
            <>
              <div className="nav_account--mobile--figust">
                <img
                  src={
                    userInfor?.image ||
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxsIVGXUz77jSd-Zgau2ZqRpL_STVm4gbxWQ&usqp=CAU'
                  }
                  alt=""
                  onClick={handleOpenMenuAccount}
                />
                <div
                  className={openMenuAccount ? 'nav_acount-menu active_menu' : 'nav_acount-menu'}
                >
                  <p onClick={handleNavigeteAccount}>Thông tin</p>

                  <p onClick={hanleLooutClick}>Logout</p>

                  <p onClick={handleNavigeteProfile}>Profile</p>
                </div>
              </div>
              <h3>{userInfor?.username}</h3>
            </>
          )}
          {!isUserInfor && (
            <>
              {' '}
              <MdOutlineAccountCircle />
              <span onClick={handleNavigateLogin}> Đăng nhập</span>/
              <span onClick={handleNavigateRegister}>Tạo tài khoản</span> <FcRating />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
