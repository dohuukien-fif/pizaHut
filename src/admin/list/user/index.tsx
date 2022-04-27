import * as React from 'react';
import './styles.scss';
export interface UserFeaturesProps {}

export default function UserFeatures(props: UserFeaturesProps) {
  const data = [
    {
      id: 1,
      name: 'huu  kien',
      email: 'huukien009@gmail.com',
    },
    {
      id: 1,
      name: 'huu  kien',
      email: 'huukien009@gmail.com',
    },
    {
      id: 1,
      name: 'huu  kien',
      email: 'huukien009@gmail.com',
    },
    {
      id: 1,
      name: 'huu  kien',
      email: 'huukien009@gmail.com',
    },
  ];
  return (
    <div className="user">
      <div className="user__swapper">
        <div className="user__title">
          <span>USER</span>
        </div>
        <div className="user__list">
          <div className="user__table--top">
            <span>STT</span>
            <span>User</span>
            <span>Email</span>
            <span>Status</span>
          </div>
          <div className="user__table--body">
            {data.map((items, index) => (
              <div className="user__table--item">
                <div className="user__table--stt">
                  <span>{items.id}</span>
                </div>
                <div className="user__table--user">
                  <span>{items.name}</span>
                </div>
                <div className="user__table--email">
                  <span>{items.email}</span>
                </div>
                <div className="user__table--status">
                  <span>active</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
