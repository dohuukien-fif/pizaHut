import * as React from 'react';

export interface ManagerItemProps {
  item: any;
  handleOpenModalUpdate: () => void;
  handleGetId: (id: string) => void;
}

export default function ManagerItem({
  item,
  handleOpenModalUpdate,
  handleGetId,
}: ManagerItemProps) {
  const handleClickGetId = (id: string) => {
    if (handleGetId) handleGetId(id);
  };
  return (
    <div className="manager__item">
      <div className="manager__left">
        <div className="manager__figust">
          <img
            src={
              item.image ||
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwWuvJHLqnpwQKedQusejSFEL-9Y3grrH4vQ&usqp=CAU'
            }
            alt=""
          />
        </div>
        <div className="manager__name">
          <span>{item.fullName}</span>
        </div>
        <div className="manager__position">
          <span>{item.position}</span>
        </div>
        <div className="manager__telephone">
          <span>{item.telephone}</span>
        </div>
        <div className="manager__identification">
          <span>{item.identification}</span>
        </div>
      </div>
      <div className="manager__right">
        <div className="manager__address">
          <span>{item.address}</span>
        </div>
        <div className="manager__action">
          <button onClick={() => handleClickGetId(item._id)}>
            <span>Edit</span>
          </button>
        </div>
      </div>
    </div>
  );
}
