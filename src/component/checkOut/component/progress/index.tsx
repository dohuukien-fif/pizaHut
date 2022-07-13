import * as React from 'react';

export interface PRogressProps {
  number: Number;
  CartOrders: any;
  active: string;
  INFORSTORE: boolean;
}

export default function Progress({ number, CartOrders, active, INFORSTORE }: PRogressProps) {
  return (
    <div className={number >= 4 ? 'checkout_progress activenone' : 'checkout_progress'}>
      <div className={number === 0 && CartOrders !== '' ? `step ${active}` : 'step'}>
        <div className="step_number">
          <span>1</span>
        </div>
        <div className="step_name">
          <p>Hình thức đặt hàng</p>
        </div>
      </div>
      <div className={number === 1 ? `step ${active}` : 'step'}>
        <div className="step_number">
          <span>2</span>
        </div>
        <div className="step_name">
          <p> đăng nhập</p>
        </div>
      </div>
      <div className={number === 2 ? `step ${active}` : 'step'}>
        <div className="step_number">
          <span>3</span>
        </div>
        <div className="step_name">
          <p>Thông tin đơn hàng</p>
        </div>
      </div>

      <div className={number === 3 && INFORSTORE === true ? `step ${active}` : 'step'}>
        <div className="step_number">
          <span>4</span>
        </div>
        <div className="step_name">
          <p>Thông tin thanh toán</p>
        </div>
      </div>
    </div>
  );
}
