import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';
export interface NavLinkTabProps {
  setactiveTab: React.Dispatch<React.SetStateAction<string>>;
  activeTab: string;
}

export default function NavLinkTab({ setactiveTab, activeTab }: NavLinkTabProps) {
  // const isActive = false;

  const handleActiveLink = (newValue: string) => {};
  return (
    <div className="tab_list">
      <div
        className={activeTab === '1' ? 'tab_Link active_Tab' : 'tab_Link'}
        onClick={() => setactiveTab('1')}
      >
        <span>Tất Cả</span>
      </div>
      <div
        className={activeTab === '2' ? 'tab_Link active_Tab' : 'tab_Link'}
        onClick={() => setactiveTab('2')}
      >
        <span>Hải Sản Cao Cấp</span>
      </div>
      <div
        className={activeTab === '3' ? 'tab_Link active_Tab' : 'tab_Link'}
        onClick={() => setactiveTab('3')}
      >
        <span>Thập Cẩm Cao Cấp</span>
      </div>
      <div
        className={activeTab === '4' ? 'tab_Link active_Tab' : 'tab_Link'}
        onClick={() => setactiveTab('4')}
      >
        <span>Truyền Thống</span>
      </div>
      <div
        className={activeTab === '5' ? 'tab_Link active_Tab' : 'tab_Link'}
        onClick={() => setactiveTab('5')}
      >
        <span>Nhân Nhồi</span>
      </div>
    </div>
  );
}
