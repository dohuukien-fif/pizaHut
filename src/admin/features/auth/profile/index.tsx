import * as React from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { GiJusticeStar } from 'react-icons/gi';
import { AiOutlineArrowRight, AiOutlineRollback } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
// import { unwrap } from '@reduxjs/toolkit';
import { logout, profile } from './../../../../app/userReduxAdmin';
import './styles.scss';
import LoadingFile from '../../../../component/loadingFeatures/loadingFile/loadingInput';
import axios from 'axios';
import { BsCamera } from 'react-icons/bs';
import { IoMdArrowRoundBack } from 'react-icons/io';
export interface ProfileAmindFeatuesProps {}

export default function ProfileAmindFeatues(props: ProfileAmindFeatuesProps) {
  const userId = useSelector((state: any) => state.userAdmin.current);
  const [username, setUsername] = React.useState('');
  const [passwords, setPassword] = React.useState<any>();
  const [typePasswords, settypePassword] = React.useState<number>();
  const [newPasswords, setnewPassword] = React.useState<number>();
  const [newImage, setFileImage] = React.useState<string>('');
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
  const handleClick = async (e: any) => {
    e.preventDefault();
    try {
      //set userName = email

      const action = profile({
        id: userId._id,
        username,
        password,
        typePassword,
        newPassword,
        newImage,
      });
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

      alert('thay   ?????i m???t kh???u  th??nh c??ng');
    } catch (error: any) {
      // enqueueSnackbar(error.message, { variant: 'error' });
      console.log('esss', error.message);
      alert('thay   ?????i m???t kh???u  th???t  b???i');
    }
  };

  console.log(newImage);

  const handleClicBack = () => {
    navigate(-1);
  };

  return (
    <div className="profileAdmin">
      <div className="profileAdmin__back">
        <button onClick={handleClicBack}>
          {' '}
          <IoMdArrowRoundBack />
          <span>Tr??? v???</span>
        </button>
      </div>
      <div className="profileAdmin_container">
        <div className="profileAdmin_block">
          <div className="profileAdmin_title">
            <h2>?????i m???t kh???u</h2>
          </div>

          <form onSubmit={handleClick}>
            <div className="form_group">
              <label>
                ???nh ?????i di???n <strong>*</strong>
              </label>
              <input
                type="file"
                id="file"
                accept="image/*"
                onChange={handleChangeFiless}
                style={{ display: 'none' }}
              />
              {userId && newImage === '' && (
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
              {newImage !== '' && (
                <div className="form_group--file">
                  {LoadingfileImage ? (
                    <LoadingFile />
                  ) : (
                    <>{newImage && <img src={newImage} alt="" />}</>
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
                T??n <GiJusticeStar />
              </label>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Nh???p email c???a b???n t???i ????y"
              />
            </div>
            <div className="form_group">
              <label>
                M???t kh???u hi???n t???i <GiJusticeStar />
              </label>
              <input
                onChange={(e: any) => setPassword(e.target.value)}
                type="password"
                placeholder="Nh???p m???t kh???u c???a b???n t???i ????y"
              />
            </div>
            <div className="form_group">
              <label>
                M???t kh???u m???i
                <GiJusticeStar />
              </label>
              <input
                onChange={(e: any) => settypePassword(e.target.value)}
                type="password"
                placeholder="Nh???p m???t kh???u c???a b???n t???i ????y"
              />
            </div>
            <div className="form_group">
              <label>
                Nh???p l???i m???t kh???u m???i <GiJusticeStar />
              </label>
              <input
                onChange={(e: any) => setnewPassword(e.target.value)}
                type="password"
                placeholder="Nh???p m???t kh???u c???a b???n t???i ????y"
              />
            </div>
            {/* <div className="form_forget">
              <label>Qu??n m???t kh???u</label>
            </div> */}
            <div className="form_group-redirest">
              <label>B???n ???? c?? t??i Kho???n ch??a?</label>
              <span>
                <Link to="register">T???o t??i kho???n</Link>
              </span>
            </div>
            <button type="submit">
              <span>
                ????ng nh???p <AiOutlineArrowRight />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
