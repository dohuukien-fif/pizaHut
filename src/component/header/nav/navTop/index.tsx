import * as React from 'react';
import {
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineLoading3Quarters,
  AiOutlineSearch,
} from 'react-icons/ai';
import { BsCart3 } from 'react-icons/bs';
import { FaShippingFast, FaStore } from 'react-icons/fa';
import { FcRating } from 'react-icons/fc';
import { FiMenu } from 'react-icons/fi';
import { MdOutlineAccountCircle, MdOutlinePlace } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { boolean } from 'yup';
import { StoreProps } from '../../interface';

export interface NavTopProps {
  setActive: any;
  activeIco: string;
  isorder: boolean;
  activeTranForm: any;
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeselected: (e: React.ChangeEvent<HTMLInputElement>) => void;
  store: StoreProps[];
  inputRef: any;
  isOpenSearch: boolean;
  setisOpenSearch: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: any;
  SearchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  handleClickLinkCart: () => void;
  count: number;
  setisopen: React.Dispatch<React.SetStateAction<boolean>>;
  isopen: boolean;
  userInfor: any;
  handleOpenMenuAccount: () => void;
  openMenuAccount: boolean;
  hanleLooutClick: () => void;
  closeRef: any;
}

export default function NavTop({
  setActive,
  closeRef,
  activeIco,
  isorder,
  activeTranForm,
  handleChangeInput,
  handleChangeselected,
  store,
  inputRef,
  isOpenSearch,
  setisOpenSearch,
  handleSubmit,
  SearchTerm,
  setSearchTerm,
  loading,
  handleClickLinkCart,
  count,
  setisopen,
  isopen,
  userInfor,
  handleOpenMenuAccount,
  openMenuAccount,
  hanleLooutClick,
}: NavTopProps) {
  const isUserInfor = Boolean(Object.keys(userInfor).length);
  const location = useLocation();
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
    <div className="nav_top" ref={closeRef}>
      {/* logo website */}
      <div className="nav_icon">
        <Link to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScjgFeNhO-stVJM0eWVR5k7mjPL3rd0V459Q&usqp=CAU"
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
              <input type="text" placeholder="Nhập địa chỉ của bạn" onChange={handleChangeInput} />
              <MdOutlinePlace />
            </div>
          )}
          {isorder === true && (
            <div className="nav_Select">
              <form>
                <AiOutlineHome />
                <input
                  onChange={handleChangeselected}
                  list="browsers"
                  placeholder="Nhập cửa hàng"
                />
                <datalist id="browsers">
                  {store.map((items: StoreProps, index: number) => (
                    <React.Fragment key={index}>
                      <option ref={inputRef} value={items.stores}>
                        {items.address}
                      </option>
                    </React.Fragment>
                  ))}
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
            <AiOutlineSearch onClick={() => setisOpenSearch((x: any) => !x)} />
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
            <BsCart3 onClick={handleClickLinkCart} />
            <span>{count}</span>
          </div>
          <span>Giỏ hàng</span>
          {isopen ? (
            <AiOutlineClose className="icon_close" onClick={() => setisopen((x: any) => !x)} />
          ) : (
            <FiMenu onClick={() => setisopen((x: any) => !x)} />
          )}
        </div>
      </div>
      {/* menu account mobile : none  ,  tablet : block */}
      <div className="nav_account">
        {isUserInfor && (
          <>
            <div className="nav_account_figust">
              <img
                src={
                  userInfor?.image ||
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxsIVGXUz77jSd-Zgau2ZqRpL_STVm4gbxWQ&usqp=CAU'
                }
                alt=""
                onClick={handleOpenMenuAccount}
              />
              <div className={openMenuAccount ? 'nav_acount-menu active_menu' : 'nav_acount-menu'}>
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
            <span onClick={handleNavigateLogin}>Đăng nhập</span>/
            <span onClick={handleNavigateRegister}>Tạo tài khoản</span>{' '}
          </>
        )}
        <FcRating />
      </div>
    </div>
  );
}
