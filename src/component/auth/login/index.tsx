import * as React from 'react';
import FormConTrol from './formControl';
import './styles.scss';
import { Link, useNavigate } from 'react-router-dom';
import { GiJusticeStar } from 'react-icons/gi';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
// import { unwrap } from '@reduxjs/toolkit';
import { login } from './../../../app/userRedux';
export interface LoginFeaturesProps {}

export default function LoginFeatures(props: LoginFeaturesProps) {
  const [username, setUsername] = React.useState('');
  const [passwords, setPassword] = React.useState<any>();
  const dispatch = useDispatch();
  // const users = useSelector((state) => state.user);
  const password = Number(passwords);
  console.log('passs', typeof password);
  console.log('usser', typeof username);
  const navigate = useNavigate();

  const LOCOLSTORAGE__LOGIN =
    localStorage.getItem('URL__LOGIN') && localStorage.getItem('URL__LOGIN');
  const LOCOLSTORAGE__REDIREST =
    localStorage.getItem('URL__REDIREST') && localStorage.getItem('URL__REDIREST');
  console.log('[LOCOLSTORAGE]', LOCOLSTORAGE__LOGIN);

  const handleClick = async (e: any) => {
    e.preventDefault();
    try {
      //set userName = email

      const action = login({ username, password });
      const user = await dispatch(action).unwrap();
      console.log('user', user);

      if (LOCOLSTORAGE__REDIREST) {
        localStorage.removeItem('URL__REDIREST');
        return navigate(JSON.parse(LOCOLSTORAGE__REDIREST));
      }

      if (LOCOLSTORAGE__LOGIN) {
        localStorage.removeItem('URL__LOGIN');
        return navigate(JSON.parse(LOCOLSTORAGE__LOGIN));
      } else {
        navigate('/');
      }

      //close Dialog
      // const { closeDialog } = props;
      // if (closeDialog) {
      //   closeDialog();
      // }
    } catch (error) {
      // enqueueSnackbar(error.message, { variant: 'error' });
      console.log('esss', error);

      alert('vui lòng kiểm tra  lại mật khẩu khoặc tài khoản');
    }
  };
  return (
    <div className="login">
      <div className="login_container">
        <div className="login_block">
          <div className="login_title">
            <h2>Đăng nhập</h2>
          </div>
          <form onSubmit={handleClick}>
            <div className="form_group">
              <label>
                Teen <GiJusticeStar />
              </label>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Nhập email của bạn tại đây"
              />
            </div>
            <div className="form_group">
              <label>
                Mật khẩu <GiJusticeStar />
              </label>
              <input
                onChange={(e: any) => setPassword(e.target.value)}
                type="password"
                placeholder="Nhập mật khẩu của bạn tại đây"
              />
            </div>
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
                Đăng nhập <AiOutlineArrowRight />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
