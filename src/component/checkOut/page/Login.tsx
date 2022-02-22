import * as React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
export interface LoginFeaturesProps {
  numbers: any;
  handleClic: any;
  handleBackbefore: any;
}

export default function LoginFeatures({
  numbers,
  handleClic,
  handleBackbefore,
}: LoginFeaturesProps) {
  return (
    <div>
      <h1>login</h1>
      <div className={numbers >= 4 ? 'checkout_btn activenone' : 'checkout_btn'}>
        <button type="button" className="btn_continue btn-back" onClick={handleBackbefore}>
          <AiOutlineArrowLeft />
          Quay lại
        </button>
        <button className="btn_payload" onClick={handleClic}>
          Đặt hàng
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
}
