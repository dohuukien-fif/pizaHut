import React from 'react';
import PropTypes from 'prop-types';
import SideBarItem from '../sideBarItem';
import './styles.scss';
SideBar.propTypes = {};

function SideBar(props: any) {
  return (
    <div className="sideBar__container">
      <div className="sideBar__title">
        <p>Pizza Admin</p>
      </div>
      <div className="sideBar__swapper">
        <SideBarItem />
      </div>
    </div>
  );
}

export default SideBar;
