import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { MdOutlineDashboard, MdOutlineLocalShipping } from 'react-icons/md';
import { FaRegUser, FaStoreAlt } from 'react-icons/fa';
import { BsCreditCard } from 'react-icons/bs';
import { GrDeliver } from 'react-icons/gr';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FiLogOut } from 'react-icons/fi';
import { SiSimpleanalytics } from 'react-icons/si';
import { CgProfile } from 'react-icons/cg';
import { useDispatch } from 'react-redux';
import { logout } from '../../../app/userRedux';

SideBarItem.propTypes = {};

function SideBarItem(props: any) {
  const dispatch = useDispatch();
  const hadleLogOut = () => {
    dispatch(logout());
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
            <MdOutlineDashboard />
            <p>Dashboard</p>
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
            <FaRegUser />
            <p>User</p>
          </div>
          <div className="sideBar__list--group">
            <SiSimpleanalytics />
            <p>Customers</p>
          </div>
          <div className="sideBar__list--group">
            <BsCreditCard />
            <p>Order</p>
          </div>
          <div className="sideBar__list--group">
            <MdOutlineLocalShipping />
            <p>Delivery</p>
          </div>
          <div className="sideBar__list--group">
            <FaStoreAlt />
            <p>Product</p>
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
            <IoMdNotificationsOutline />
            <p>Notification</p>
          </div>
        </div>
      </div>
      <div className="sideBar__user">
        <div className="sideBar__user--title">
          <p>User</p>
        </div>
        {/* group */}
        <div className="sideBar__user--content">
          <div className="sideBar__user--group">
            <CgProfile />
            <p>Profile</p>
          </div>
          <div className="sideBar__user--group" onClick={hadleLogOut}>
            <FiLogOut />
            <p>Logout</p>
          </div>
        </div>
      </div>
      <div className="sideBar__theme">
        <button></button>
        <button></button>
      </div>
    </>
  );
}

export default SideBarItem;
