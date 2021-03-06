import * as React from 'react';
import FormControlRegister from './formControl';
import './styles.scss';
import { Link, useNavigate } from 'react-router-dom';
import { GiJusticeStar } from 'react-icons/gi';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
// import { unwrap } from '@reduxjs/toolkit';
import { register } from './../../../app/userRedux';
export interface RegisterFeaturesProps {}

export default function RegisterFeatures(props: RegisterFeaturesProps) {
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<number>();
  const [email, setEmail] = React.useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const users = useSelector((state) => state.user);
  const LOCOLSTORAGE__LOGIN =
    localStorage.getItem('URL__LOGIN') && localStorage.getItem('URL__LOGIN');
  const LOCOLSTORAGE__REDIREST =
    localStorage.getItem('URL__LOGIN') && localStorage.getItem('URL__LOGIN');
  console.log('[LOCOLSTORAGE]', LOCOLSTORAGE__LOGIN);

  console.log(username, password);
  const handleClick = async (e: any) => {
    e.preventDefault();
    try {
      //set userName = email

      const action = register({ username, password });
      const user = await dispatch(action).unwrap();
      console.log(user);

      if (LOCOLSTORAGE__REDIREST) {
        localStorage.removeItem('URL__REDIREST');
        return navigate(JSON.parse(LOCOLSTORAGE__REDIREST));
      }

      if (LOCOLSTORAGE__LOGIN) {
        localStorage.removeItem('URL__LOGIN');
        return navigate(JSON.parse(LOCOLSTORAGE__LOGIN));
      } else {
        navigate('/login');
      }
      //close Dialog
      // const { closeDialog } = props;
      // if (closeDialog) {
      //   closeDialog();
      // }
    } catch (error) {
      alert('vui lòng kiểm  tra lại  thông  tin');
      console.log('esss', error);
    }
  };
  return (
    <div className="register">
      <div className="register_container">
        <div className="register_block">
          <div className="register_title">
            <h2>Tạo tài khoản</h2>
          </div>
          <form onSubmit={handleClick}>
            <div className="form_group">
              <label>
                Họ và Tên <GiJusticeStar />
              </label>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Nhập họ và tên của bạn tại đây"
              />
            </div>
            {/* <div className="form_group">
              <label>
                Số điện thoại <GiJusticeStar />
              </label>
              <input
                type="tel"
                placeholder="Nhập số điện thoại của bạn tại đây"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
            </div> */}
            <div className="form_group">
              <label>
                E-mail <GiJusticeStar />
              </label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Nhập email của bạn tại đây"
              />
            </div>
            <div className="form_group">
              <label>
                Mật khẩu <GiJusticeStar />
              </label>
              <input
                type="password"
                onChange={(e: any) => setPassword(e.target.value)}
                placeholder="Nhập mật khẩu của bạn tại đây"
              />
            </div>
            {/* <div className="form_group">
            <label>
              Xác nhận mật khẩu <GiJusticeStar />
            </label>
            <input type="password" placeholder="Nhập mật khẩu của bạn tại đây" />
          </div> */}
            <div className="form_forget">
              <label>Quên mật khẩu</label>
            </div>
            <div className="form_group-redirest">
              <label>Bạn đã có tài Khoản chưa?</label>
              <span>
                <Link to="register">Tạo tài khoản</Link>
              </span>
            </div>
            <button type="submit">
              <span>
                Đăng Kí <AiOutlineArrowRight />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
