import * as React from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { GiJusticeStar } from 'react-icons/gi';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
// import { unwrap } from '@reduxjs/toolkit';
import { register } from './../../../app/userReduxAdmin';
import './register.scss';
import axios from 'axios';
import LoadingFile from '../../../component/loadingFeatures/loadingFile/loadingInput';
import { BsCamera } from 'react-icons/bs';
export interface RegisterFeaturesProps {}

export default function RegisterFeatures(props: RegisterFeaturesProps) {
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<number>();
  const [images, setImage] = React.useState<string>('');
  const [email, setEmail] = React.useState('');
  const [LoadingfileImage, setLoadingfileImage] = React.useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const users = useSelector((state) => state.user);

  console.log(username, password);
  const handleChangeFiles = async (e: React.ChangeEvent<any>) => {
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

      console.log(url);
      setImage(url);
      setLoadingfileImage(false);
    } catch (error) {}
  };
  const handleClick = async (e: any) => {
    e.preventDefault();
    try {
      //set userName = email

      const action = register({ username, password, images });
      const user = await dispatch(action).unwrap();
      console.log(user);

      navigate('/admin/login');
      //close Dialog
      // const { closeDialog } = props;
      // if (closeDialog) {
      //   closeDialog();
      // }
    } catch (error) {
      // enqueueSnackbar(error.message, { variant: 'error' });
      console.log('esss', error);
    }
  };
  return (
    <div className="registerAdmin">
      <div className="registerAdmin_container">
        <div className="registerAdmin_block">
          <div className="registerAdmin_title">
            <h2>T???o t??i kho???n</h2>
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
                onChange={handleChangeFiles}
                style={{ display: 'none' }}
              />
              {images === '' && (
                <div className="form_group--file">
                  {LoadingfileImage ? (
                    <LoadingFile />
                  ) : (
                    <img
                      src={
                        images ||
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxsIVGXUz77jSd-Zgau2ZqRpL_STVm4gbxWQ&usqp=CAU'
                      }
                    />
                  )}
                  <label htmlFor="file">
                    <span>
                      {' '}
                      <BsCamera />
                    </span>
                  </label>
                </div>
              )}
              {images !== '' && (
                <div className="form_group--file">
                  {LoadingfileImage ? (
                    <LoadingFile />
                  ) : (
                    <>{images && <img src={images} alt="" />}</>
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
                H??? v?? T??n <GiJusticeStar />
              </label>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Nh???p h??? v?? t??n c???a b???n t???i ????y"
              />
            </div>
            {/* <div className="form_group">
              <label>
                S??? ??i???n tho???i <GiJusticeStar />
              </label>
              <input
                type="tel"
                placeholder="Nh???p s??? ??i???n tho???i c???a b???n t???i ????y"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
            </div> */}
            {/* <div className="form_group">
              <label>
                E-mail <GiJusticeStar />
              </label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Nh???p email c???a b???n t???i ????y"
              />
            </div> */}
            <div className="form_group">
              <label>
                M???t kh???u <GiJusticeStar />
              </label>
              <input
                type="password"
                onChange={(e: any) => setPassword(e.target.value)}
                placeholder="Nh???p m???t kh???u c???a b???n t???i ????y"
              />
            </div>
            {/* <div className="form_group">
            <label>
              X??c nh???n m???t kh???u <GiJusticeStar />
            </label>
            <input type="password" placeholder="Nh???p m???t kh???u c???a b???n t???i ????y" />
          </div> */}
            <div className="form_forget">
              <label>Qu??n m???t kh???u</label>
            </div>
            <div className="form_group-redirest">
              <label>B???n ???? c?? t??i Kho???n ch??a?</label>
              <span>
                <Link to="register">T???o t??i kho???n</Link>
              </span>
            </div>
            <button type="submit">
              <span>
                ????ng K?? <AiOutlineArrowRight />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
