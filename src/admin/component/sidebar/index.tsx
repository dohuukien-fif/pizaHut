import React from 'react';
import PropTypes from 'prop-types';
import SideBarItem from '../sideBarItem';
import './styles.scss';
import { boolean } from 'yup/lib/locale';
export interface SideBarProps {
  handleThemeColorLight: () => void;
  handleThemeColorDark: () => void;
}
function SideBar({ handleThemeColorLight, handleThemeColorDark }: SideBarProps) {
  const handleDark = () => {
    handleThemeColorDark();
  };
  const handleLight = () => {
    handleThemeColorLight();
  };
  return (
    <div className="sideBar__container">
      <div className="sideBar__title">
        <p>Pizza Admin</p>
      </div>
      <div className="sideBar__swapper">
        <SideBarItem handleDark={handleDark} handleLight={handleLight} />
      </div>
    </div>
  );
}

export default SideBar;
