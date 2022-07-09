import * as React from 'react';
import ManagerItem from './managerItem';

export interface ManagerItemProps {
  datas: any;
  handleOpenModalUpdate: () => void;
  handleGetIdManager: (id: string) => void;
}

export default function ManagerList({
  datas,
  handleOpenModalUpdate,
  handleGetIdManager,
}: ManagerItemProps) {
  const handleGetId = (id: string) => {
    if (handleGetIdManager) handleGetIdManager(id);
  };
  return (
    <div className="manager__list">
      {datas.map((item: any, index: number) => (
        <ManagerItem
          item={item}
          key={index}
          handleOpenModalUpdate={handleOpenModalUpdate}
          handleGetId={handleGetId}
        />
      ))}
    </div>
  );
}
