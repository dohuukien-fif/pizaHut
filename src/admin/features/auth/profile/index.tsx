import * as React from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { GiJusticeStar } from 'react-icons/gi';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
// import { unwrap } from '@reduxjs/toolkit';
import { logout, profile } from './../../../../app/userReduxAdmin';
import './styles.scss';
import LoadingFile from '../../../../component/loadingFeatures/loadingFile/loadingInput';
import axios from 'axios';
import { BsCamera } from 'react-icons/bs';
export interface ProfileAmindFeatuesProps {}

export default function ProfileAmindFeatues(props: ProfileAmindFeatuesProps) {
  const userId = useSelector((state: any) => state.userAdmin.current);
  const [username, setUsername] = React.useState('');
  const [passwords, setPassword] = React.useState<any>();
  const [typePasswords, settypePassword] = React.useState<number>();
  const [newPasswords, setnewPassword] = React.useState<number>();
  const [fileImage, setFileImage] = React.useState<string>('');
  const [file, setFile] = React.useState<any>();
  const [LoadingfileImage, setLoadingfileImage] = React.useState<boolean>(false);
  const dispatch = useDispatch();
  // const users = useSelector((state) => state.user);
  const password = Number(passwords);
  const typePassword = Number(typePasswords);
  const newPassword = Number(newPasswords);
  console.log(typeof password);
  console.log(typeof username);
  const navigate = useNavigate();
  const handleClick = async (e: any) => {
    e.preventDefault();
    try {
      //set userName = email

      const action = profile({ id: userId._id, username, password, typePassword, newPassword });
      const user = await dispatch(action).unwrap();
      console.log('user', user);

      //close Dialog
      // const { closeDialog } = props;
      // if (closeDialog) {
      //   closeDialog();
      // }
      const actionLogout = logout();

      dispatch(actionLogout);

      navigate('/admin/login');

      alert('thay   đổi mật khẩu  thành công');
    } catch (error: any) {
      // enqueueSnackbar(error.message, { variant: 'error' });
      console.log('esss', error.message);
      alert('thay   đổi mật khẩu  thất  bại');
    }
  };
  const handleChangeFiless = async (e: any) => {
    setLoadingfileImage(true);
    const file = e.target.files[0];
    const data = new FormData();

    data.append('file', file);
    data.append('upload_preset', 'upload');

    try {
      const uploadRe = await axios.post(
        'https://api.cloudinary.com/v1_1/huukien/image/upload',
        data
      );
      console.log(data);
      console.log(uploadRe.data);

      const { url } = uploadRe.data;

      setFileImage(url);
      setLoadingfileImage(false);
    } catch (error) {}
  };

  console.log(fileImage);

  return (
    <div className="profileAdmin">
      <div className="profileAdmin_container">
        <div className="profileAdmin_block">
          <div className="profileAdmin_title">
            <h2>Đổi mật khẩu</h2>
          </div>

          <form onSubmit={handleClick}>
            <div className="form_group">
              <label>
                Ảnh đại diện <strong>*</strong>
              </label>
              <input
                type="file"
                id="file"
                accept="image/*"
                onChange={handleChangeFiless}
                style={{ display: 'none' }}
              />
              {userId && fileImage === '' && (
                <div className="form_group--file">
                  {LoadingfileImage ? <LoadingFile /> : <img src={userId.image} />}
                  <label htmlFor="file">
                    <span>
                      {' '}
                      <BsCamera />
                    </span>
                  </label>
                </div>
              )}
              {fileImage !== '' && (
                <div className="form_group--file">
                  {LoadingfileImage ? (
                    <LoadingFile />
                  ) : (
                    <>{fileImage && <img src={fileImage} alt="" />}</>
                  )}

                  <label htmlFor="file">
                    <span>
                      <BsCamera />
                    </span>
                  </label>
                </div>
              )}
            </div>
            <div className="form_group">
              <label>
                Tên <GiJusticeStar />
              </label>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Nhập email của bạn tại đây"
              />
            </div>
            <div className="form_group">
              <label>
                Mật khẩu hiện tại <GiJusticeStar />
              </label>
              <input
                onChange={(e: any) => setPassword(e.target.value)}
                type="password"
                placeholder="Nhập mật khẩu của bạn tại đây"
              />
            </div>
            <div className="form_group">
              <label>
                Mật khẩu mới
                <GiJusticeStar />
              </label>
              <input
                onChange={(e: any) => settypePassword(e.target.value)}
                type="password"
                placeholder="Nhập mật khẩu của bạn tại đây"
              />
            </div>
            <div className="form_group">
              <label>
                Nhập lại mật khẩu mới <GiJusticeStar />
              </label>
              <input
                onChange={(e: any) => setnewPassword(e.target.value)}
                type="password"
                placeholder="Nhập mật khẩu của bạn tại đây"
              />
            </div>
            {/* <div className="form_forget">
              <label>Quên mật khẩu</label>
            </div> */}
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
