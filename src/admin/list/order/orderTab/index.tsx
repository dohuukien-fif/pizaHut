import * as React from 'react';
import './styles.scss';
export interface OrderTabProps {
  setIndexTab: React.Dispatch<React.SetStateAction<number>>;
  indexTab: number;
}

export default function OrderTab({ setIndexTab, indexTab }: OrderTabProps) {
  return (
    <div className="orders__tab">
      <div
        className={indexTab === 0 ? 'order__all active' : 'order__all'}
        onClick={() => setIndexTab(0)}
      >
        <span>All Orders</span>
      </div>
      <div
        className={indexTab === 1 ? 'order__dispatch active' : 'order__dispatch'}
        onClick={() => setIndexTab(1)}
      >
        <span>Dispatch</span>
      </div>
      <div
        className={indexTab === 2 ? 'order__completed active' : 'order__completed'}
        onClick={() => setIndexTab(2)}
      >
        <span>Completed</span>
      </div>
    </div>
  );
}
