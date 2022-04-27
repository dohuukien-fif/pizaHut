import * as React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import { MdOutlineDarkMode } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { Link, Route, Routes } from 'react-router-dom';
import NewProduct from './component/newProduct';
import SideBar from './component/sidebar';
import LoginFeatures from './features/auth/login';
import RegisterFeatures from './features/auth/register';
import DashBoard from './features/dashboard';
import CustomerFeatures from './list/customer';
import DeliveryFeatures from './list/delivery';
import ProductFeatures from './list/product';
import UserFeatures from './list/user';
import './styles.scss';
export interface IAppProps {}

export default function App(props: any) {
  const userInnfor = useSelector((state: any) => state.user.current);

  const isUserInfor = Object.keys(userInnfor);
  console.log('[userInnfor', isUserInfor, userInnfor);
  const [open, setopen] = React.useState<boolean>(false);

  const handleOpenMenu = () => {
    setopen(true);
  };
  const handleCloseMenu = () => {
    setopen(false);
  };
  return (
    <div className="admin">
      <div className={open ? 'admin__left active' : 'admin__left'}>
        <SideBar />
      </div>

      <div className="admin__right">
        <div className="admin__right--navTop">
          <div className="admin__right--block">
            <div className="admin__right--theme">
              <MdOutlineDarkMode />
            </div>
            <div className="admin__right--account">
              {isUserInfor.length === 0 && (
                <div className="creater__account">
                  <Link to="/admin/login">
                    {' '}
                    <span>Đăng nhập</span>
                  </Link>

                  <Link to="/admin/register">
                    {' '}
                    <span>Đăng kí</span>
                  </Link>
                </div>
              )}
              {isUserInfor.length > 0 && (
                <>
                  {' '}
                  <img
                    src={
                      userInnfor.image ||
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxsIVGXUz77jSd-Zgau2ZqRpL_STVm4gbxWQ&usqp=CAU'
                    }
                    alt=""
                  />
                  <span>{userInnfor.username}</span>
                </>
              )}
            </div>

            <div className="admin__openTab">
              {!open && <FiMenu onClick={handleOpenMenu} />}
              {open && <AiOutlineClose onClick={handleCloseMenu} />}
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="user" element={<UserFeatures />} />
          <Route path="customers" element={<CustomerFeatures />} />{' '}
          <Route path="delivery" element={<DeliveryFeatures />} />
          <Route path="product" element={<ProductFeatures />} />
          <Route path="newProduct" element={<NewProduct />} />
          <Route path="login" element={<LoginFeatures />} />
          <Route path="register" element={<RegisterFeatures />} />
          {/* <Route path="/login">
          {user ? <Navigate replace to="Trang-chu" /> :element={<LoginFeatures />}}
        </Route> */}
          {/* <Route ></Route> */}
        </Routes>
      </div>
    </div>
  );
}
