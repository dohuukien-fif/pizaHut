import axios from 'axios';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineClose } from 'react-icons/ai';
import { DataProps } from '../..';
import InputFeild from '../../../../../component/formControl/inputFeild';
import LoadingFile from '../../../../../component/loadingFeatures/loadingFile/loadingInput';

import './styles.scss';
export interface FormUpdateManagerProps {
  onSubmitValue: (value: any) => void;
  handleCloseModal: () => void;
  dataUpdate: DataProps;
}

export default function FormUpdateManager({
  onSubmitValue,
  handleCloseModal,
  dataUpdate,
}: FormUpdateManagerProps) {
  const [fileImage, setFileImages] = React.useState<string>('');
  const [file, setFile] = React.useState<any>();
  const [LoadingfileImage, setLoadingfileImage] = React.useState<boolean>(false);
  const [values, setValue] = React.useState<any>({
    gender: '',
    date: '',
  });
  const [dataForm, setdataForm] = React.useState<any>({});
  const [error, setError] = React.useState<string>('');
  const Errrr = React.useRef<any>(null);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const { register, handleSubmit, control, reset } = useForm({
    defaultValues: {
      fullName: '',
      telephone: '',
      address: '',
      position: '',
      identification: '',
      // shipper: '' || 'giao ngay',
    },
  });

  const handleIsopen = () => {
    setIsOpen(true);
  };
  const handleIsClose = () => {
    setIsOpen(false);
  };

  const handChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValue((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };
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

      console.log('url', url);
      setFileImages(url);
      setLoadingfileImage(false);
    } catch (error) {}
  };

  const handleSubmitForm = async (value: any) => {
    console.log('value', value);

    const newValue = {
      ...value,
      id: dataUpdate._id,
      position: value.position !== '' ? value.position : dataUpdate.position,
      address: value.address !== '' ? value.address : dataUpdate.address,

      fullName: value.fullName !== '' ? value.fullName : dataUpdate.fullName,
      telephone: value.telephone !== '' ? Number(value.telephone) : dataUpdate.telephone,
      identification:
        value.identification !== '' ? Number(value.identification) : dataUpdate.identification,

      date: values.date !== '' ? values.date : dataUpdate?.date,
      gender: values.date !== '' ? values.gender : dataUpdate?.gender,
      image: fileImage !== '' ? fileImage : dataUpdate?.image,
    };

    setdataForm(newValue);
    setIsOpen(true);
  };

  console.log('[newDataForm]ư', dataForm);

  const handleCheckSubbmitBroveApi = async () => {
    console.log('dataForm', dataForm);

    if (onSubmitValue) {
      await onSubmitValue(dataForm);
    }
    setIsOpen(false);
    setFileImages('');

    setValue({
      gender: '',
      date: '',
    });
    reset();
  };

  const handleClickError = () => {
    setError('');
  };

  React.useEffect(() => {
    if (error !== '') {
      Errrr.current = setTimeout(() => {
        setError('');
      }, 3000);
    }
    return () => clearTimeout(Errrr.current);
  }, [error]);

  return (
    <>
      {error !== '' && (
        <div className={error !== '' ? 'cart_Error active_error' : 'cart_Error'}>
          <AiOutlineClose onClick={handleClickError} />
          <p>{error}</p>
        </div>
      )}
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="manager__update--group">
          <label>Họ và tên :*</label>
          <InputFeild name="fullName" control={control} placeholder={dataUpdate?.fullName} />
        </div>

        <div className="manager__update--group--radio">
          <label>Giới tính :*</label>
          <div className="manager__update--group--second">
            <span>Nam</span>
            <input type="radio" value="nam" name="gender" onChange={handChangeInput} />
          </div>
          <div className="manager__update--group--second">
            <span>Nữ</span>
            <input type="radio" value="nữ" name="gender" onChange={handChangeInput} />
          </div>
        </div>
        <div className="manager__update--group">
          <label>
            Image <strong>*</strong>
          </label>
          <input
            type="file"
            id="files"
            accept="image/*"
            onChange={handleChangeFiles}
            style={{ display: 'none' }}
          />
          {fileImage === '' && (
            <label htmlFor="files">
              <span>Upload File</span>
            </label>
          )}

          <div className="manager__update--image">
            {LoadingfileImage ? (
              <LoadingFile />
            ) : (
              <>{fileImage !== '' && <img src={fileImage} alt="" />}</>
            )}
          </div>
        </div>
        <div className="manager__update--group">
          <label>Giày sinh :*</label>
          <input type="date" name="date" onChange={handChangeInput} />
        </div>
        <div className="manager__update--group">
          <label>Chức vụ :*</label>
          <InputFeild name="position" control={control} placeholder={dataUpdate?.position} />
        </div>
        <div className="manager__update--group">
          <label>Cmnd/Cccd :*</label>
          <InputFeild
            name="identification"
            control={control}
            placeholder={dataUpdate?.identification}
          />
        </div>
        <div className="manager__update--group">
          <label>Số điện thoai :*</label>
          <InputFeild name="telephone" control={control} placeholder={dataUpdate?.telephone} />
        </div>
        <div className="manager__update--group">
          <label>Địa chỉ :*</label>
          <InputFeild name="address" control={control} placeholder={dataUpdate?.address} />
        </div>
        <div className="manager__update--group--btn">
          <button type="submit" onClick={handleIsopen}>
            Xác nhận
          </button>
          <button type="button" onClick={handleCloseModal}>
            Đóng
          </button>
        </div>
        <div className={isOpen ? 'confirms active__confirm' : 'confirm'}>
          <div className="confirm__swaps">
            <div className="confirm__top">
              <span>Bạn có muốn thêm vào danh sách</span>
            </div>
            <div className="confirm__bottom">
              <button type="button" onClick={handleCheckSubbmitBroveApi}>
                Đồng ý
              </button>
              <button type="button" onClick={handleIsClose}>
                Đóng
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
