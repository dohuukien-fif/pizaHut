import * as React from 'react';
import CartList from '../component/cartLisst';
import './styles.scss';
import {
  AiOutlineClose,
  AiFillCloseSquare,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from 'react-icons/ai';
import {
  Cartitem,
  cartItemCount,
  cartItemSelector,
  cartItemTotal,
  cartAddress,
  cartStore,
} from '../cartSelected';
import { useSelector } from 'react-redux';
import { formatPrice } from '../../../utils';
import { useNavigate } from 'react-router-dom';
export default function CartFeatures(props: any) {
  const priceItem = useSelector(Cartitem);
  const total = useSelector(cartItemTotal);
  const count = useSelector(cartItemCount);
  // const count = useSelector(cartItemCount);
  const [Error, setError] = React.useState<string>('');
  const dataCart = useSelector(cartItemSelector);
  const CartAddress = useSelector(cartAddress);
  const userInfor = useSelector((state: any) => state.user.current);
  console.log('priceItem', priceItem, total, count);
  const Errrr = React.useRef<any>();
  const navigate = useNavigate();

  const handleLinkCart = () => {
    navigate('/');
  };

  const handlePay = () => {
    if (Object.keys(userInfor).length === 0) {
      return setError('Vui lòng đăng nhập !');
    }
    if (dataCart.length === 0) {
      return setError('vui lòng mua hàng ! ');
    }
    // if (cartStore === '') {
    //   return setError('vui lòng nhập địa chỉ của bạn !');
    // }
    if (dataCart.length > 0) {
      navigate('/CheckOut');
    }

    return setError('');
  };

  React.useEffect(() => {
    if (Error !== '') {
      Errrr.current = setTimeout(() => {
        setError('');
      }, 5000);
    }
    return () => clearTimeout(Errrr.current);
  }, [Error]);

  const handleClickError = () => {
    setError('');
  };
  return (
    <div className="cart">
      {Error !== '' && (
        <div className={Error !== '' ? 'cart_Error active_error' : 'cart_Error'}>
          <AiOutlineClose onClick={handleClickError} />
          <p>{Error}</p>
        </div>
      )}
      <div className="cart_wrapper">
        <div className="cart_block">
          <div className="cart_title">
            <span>Sản phẩm</span>
          </div>
          <CartList dataCart={dataCart} />
        </div>
        <div className="cart_total">
          <div className="total_title">
            <span>Tổng Tiền:</span> <span>{formatPrice(priceItem)}</span>
          </div>
          <div className="total_payload">
            <button onClick={handleLinkCart}>
              <AiOutlineArrowLeft />
              <span>Tiếp tục mua hàng</span>
            </button>
            <button onClick={handlePay}>
              <span>Thanh toán</span>
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
