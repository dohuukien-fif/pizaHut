import * as React from 'react';
import './payload.scss';
export interface PayloadFeaturesProps {}

export default function PayloadFeatures(props: PayloadFeaturesProps) {
  return (
    <div className="payload">
      <div className="payload_swapper">
        <div className="payload_block">
          <div className="payload_left">
            <div className="payload_left-top">
              <div className="payload_left-title">
                <span>Thông tin nhận hàng</span>
              </div>
              <div className="payload_left-address">
                <div className="payload_left-address-top">
                  <span>Nhận hàng tại:</span> <span>The Pizza Company Song Hành</span>
                </div>
                <div className="payload_left-address-bottom">
                  <span>81 Song hành, P An Phú, Quận 2, HCM</span>
                </div>
              </div>
            </div>
            <div className="payload_left-bottom">
              <div className="payload_left-titlePay">
                <span>Phường thức thanh toán</span>
              </div>
              <div className="payload_left-pay">
                <div className="payload_left-pay-title">
                  <span>Phường thức thanh toán</span>
                </div>
                <div className="payload_left-pay-content"></div>
              </div>
            </div>
          </div>
          <div className="payload-right">
            <div className="payload_right-top">
              <div className="payload_right-voucher">
                <div className="payload_right-voucher-title">
                  <h3>Nhập mã khuyến mãi của bạn tại đây</h3>
                </div>
                <div className="payload_right-voucher-check">
                  <input type="text" />
                  <button>Áp dụng</button>
                </div>
              </div>
            </div>
            <div className="payload_right-bottom">
              <div className="payload_right-bottom-title">
                <h3>Đơn hàng của bạn</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
