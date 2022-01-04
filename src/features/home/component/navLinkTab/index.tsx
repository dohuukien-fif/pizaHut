import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';
export interface NavLinkTabProps {}

export default function NavLinkTab(props: NavLinkTabProps) {
  const isActive = false;
  return (
    <div className="tab_list">
      <div className="tab_Link">
        <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="*">
          <span>Tất Cả</span>
        </NavLink>
      </div>
      <div className="tab_Link">
        <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="Hai-san">
          <span>Hải Sản Cao Cấp</span>
        </NavLink>
      </div>
      <div className="tab_Link">
        <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="thap-cam">
          <span>Thập Cẩm Cao Cấp</span>
        </NavLink>
      </div>
      <div className="tab_Link">
        <NavLink to="truyen-thong">
          <span>Truyền Thống</span>
        </NavLink>
      </div>
      <div className="tab_Link">
        <NavLink to="nhan-nhoi">
          <span>Nhân Nhồi</span>
        </NavLink>
      </div>
    </div>
  );
}
