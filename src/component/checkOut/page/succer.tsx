import * as React from 'react';
import { AiFillHome, AiFillCheckCircle } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import './succer.scss';
import { cartcode } from './../../cart/cartSelected';
import { useSelector } from 'react-redux';
import { checkProducts } from './../../cart/cartSelected';
import OrderApi from '../../../api/OrderApi';
export interface SuccerFeaturesProps {}

export default function SuccerFeatures(props: SuccerFeaturesProps) {
  const CartCode = useSelector(cartcode);
  const checkProductss = useSelector(checkProducts);

  console.log('CartCode', CartCode);
  const { code } = checkProductss;

  React.useEffect(() => {
    (async () => {
      const res = await OrderApi.getAll();
      console.log('[resresresv]', res);
    })();
  });
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate('/');
  };
  return (
    <div className="succer">
      <div className="succer_swapper">
        <div className="succer_block">
          <div className="succer_left">
            <img src="https://m.media-amazon.com/images/I/61fnP+E-bmL._AC_SX425_.jpg" alt="" />
          </div>
          <div className="succer_right">
            <div className="succer_right-top">
              <div className="succer_warning">
                <AiFillCheckCircle />
                <p>Bạn đã đặt hàng thành công</p>
              </div>
              <div className="succer_companny">
                <p>Cảm ơn bạn đã đặt hàng tại The Pizza Company Vietnam</p>
              </div>
            </div>
            <div className="succer_right-bottom">
              <div className="succer_code">
                <span>Mã đơn hàng của bạn là:</span>
                <span>{CartCode !== undefined && CartCode}</span>
              </div>
              <div className="succer_check">
                <span>Để kiểm tra tình trạng đơn hàng vui lòng kích vào đây :</span>
                <Link to="/tai-khoan/chi-tiet-don-hang">
                  <span>THEO GIỎI ĐƠN HÀNG</span>
                </Link>
              </div>
              <div className="succer_support">
                <span>Mọi thắc mắc và yêu cầu hỗ trợ vui lòng liên hệ tổng đài CSKH:</span>
                <span>1900 633 606</span>
              </div>
              <div className="succer_eat">
                <p>Chúc bạn ngon miệng !!</p>
              </div>
              <div className="succer_btn">
                <button onClick={handleBackHome}>
                  <AiFillHome />
                  <span>Trang chủ</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
