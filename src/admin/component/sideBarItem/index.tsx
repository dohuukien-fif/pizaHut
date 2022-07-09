import React from 'react';
import { BsCreditCard, BsPeople } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { FaRegUser, FaStoreAlt } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { MdOutlineDashboard, MdOutlineLocalShipping } from 'react-icons/md';
import { SiSimpleanalytics } from 'react-icons/si';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../../app/userRedux';
import './styles.scss';
export interface SideBarItemProps {
  handleLight: () => void;
  handleDark: () => void;
}
function SideBarItem({ handleDark, handleLight }: SideBarItemProps) {
  const checkUserAdmin = useSelector((state: any) => state.userAdmin.current);
  const dispatch = useDispatch();
  const navigete = useNavigate();
  const hadleLogOut = () => {
    dispatch(logout());
  };
  const handleNavigeteProfile = () => {
    if (Object.keys(checkUserAdmin).length === 0) {
      alert('vui lòng đăng nhập trước khi thay đổi mật khẩu');
      return;
    }
    navigete('/admin/profile');
  };
  return (
    <>
      <div className="sideBar__main">
        <div className="sideBar__main--title">
          <p>Main</p>
        </div>
        {/* group */}
        <div className="sideBar__main--content">
          <div className="sideBar__main--group">
            <Link to="/admin">
              <MdOutlineDashboard />
              <p>Dashboard</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="sideBar__list">
        <div className="sideBar__list--title">
          <p>Lists</p>
        </div>

        {/* group */}
        <div className="sideBar__list--content">
          <div className="sideBar__list--group">
            <Link to="/admin/user">
              <FaRegUser />
              <p>User</p>
            </Link>
          </div>
          <div className="sideBar__list--group">
            <Link to="/admin/customers">
              <SiSimpleanalytics />
              <p>Customers</p>
            </Link>
          </div>
          <div className="sideBar__list--group">
            <Link to="/admin/order">
              <BsCreditCard />
              <p>Order</p>
            </Link>
          </div>
          <div className="sideBar__list--group">
            <Link to="/admin/delivery">
              <MdOutlineLocalShipping />
              <p>Delivery</p>
            </Link>
          </div>
          <div className="sideBar__list--group">
            <Link to="/admin/product">
              <FaStoreAlt />
              <p>Product</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="sideBar__useful">
        <div className="sideBar__useful--title">
          <p>Useful</p>
        </div>
        {/* group */}
        <div className="sideBar__useful--content">
          <div className="sideBar__useful--group">
            <Link to="/admin/manager">
              <BsPeople />
              <p>Manager</p>
            </Link>
          </div>
          <div className="sideBar__useful--group">
            <Link to="/admin/notification">
              <IoMdNotificationsOutline />
              <p>Notification</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="sideBar__user">
        <div className="sideBar__user--title">
          <p>User</p>
        </div>
        {/* group */}
        <div className="sideBar__user--content">
          <div className="sideBar__user--group" onClick={handleNavigeteProfile}>
            <div className="sideBar__user--link">
              <CgProfile />
              <p>Profile</p>
            </div>
          </div>
          <div className="sideBar__user--group" onClick={hadleLogOut}>
            <Link to="/admin/profile">
              <FiLogOut />
              <p>Logout</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="sideBar__theme">
        <button onClick={handleLight}></button>
        <button onClick={handleDark}></button>
      </div>
    </>
  );
}

export default SideBarItem;
