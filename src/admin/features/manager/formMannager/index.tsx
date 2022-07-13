import axios from 'axios';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineClose } from 'react-icons/ai';
import InputFeild from '../../../../component/formControl/inputFeild';
import LoadingFile from '../../../../component/loadingFeatures/loadingFile/loadingInput';
import './styles.scss';
export interface FormManagerProps {
  onSubmitValue: (value: any) => void;
  handleCloseModal: () => void;
}

export default function FormManager({ onSubmitValue, handleCloseModal }: FormManagerProps) {
  const [fileImage, setFileImage] = React.useState<string>('');
  const [file, setFile] = React.useState<any>();
  const [dataForm, setdataForm] = React.useState<any>({});
  const [LoadingfileImage, setLoadingfileImage] = React.useState<boolean>(false);
  const [values, setValue] = React.useState<any>({
    gender: '',
    date: '',
  });
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');
  const Errrr = React.useRef<any>(null);
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

      console.log(url);
      setFileImage(url);
      setLoadingfileImage(false);
    } catch (error) {}
  };

  const handleSubmitForm = async (value: any) => {
    if (Object.values(value).includes('')) {
      return setError('kiểm tra thông tin');
    }
    if (fileImage === '') {
      return setError('vui lòng chọn ảnh đại diện');
    }
    if (Object.values(values).includes('')) {
      return setError('vui lòng chọn giới tính và ngày');
    }
    const newValue = {
      ...value,

      telephone: Number(value.telephone),
      identification: Number(value.identification),
      ...values,
      image:
        fileImage !== ''
          ? fileImage
          : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwWuvJHLqnpwQKedQusejSFEL-9Y3grrH4vQ&usqp=CAU',
    };
    setdataForm(newValue);
    setIsOpen(true);
  };

  const handleCheckSubbmitBroveApi = async () => {
    console.log('dataForm', dataForm);

    if (onSubmitValue) {
      await onSubmitValue(dataForm);
    }
    setIsOpen(false);
    setFileImage('');

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
          <InputFeild
            name="fullName"
            control={control}
            placeholder="Vui lòng nhập họ và tên bạn..."
          />
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
            id="file"
            accept="image/*"
            onChange={handleChangeFiles}
            style={{ display: 'none' }}
          />
          {fileImage === '' && (
            <label htmlFor="file">
              <span>Upload File</span>
            </label>
          )}

          <div className="manager__update--image">
            {LoadingfileImage ? (
              <LoadingFile />
            ) : (
              <>{fileImage && <img src={fileImage} alt="" />}</>
            )}
          </div>
        </div>
        <div className="manager__update--group">
          <label>Giày sinh :*</label>
          <input type="date" name="date" onChange={handChangeInput} value={values.date} />
        </div>
        <div className="manager__update--group">
          <label>Chức vụ :*</label>
          <InputFeild
            name="position"
            control={control}
            placeholder="Vui lòng nhập chức vụ bạn..."
          />
        </div>
        <div className="manager__update--group">
          <label>Cmnd/Cccd :*</label>
          <InputFeild
            name="identification"
            control={control}
            placeholder="Vui lòng nhập Cmnd/Cccd bạn..."
          />
        </div>
        <div className="manager__update--group">
          <label>Số điện thoai :*</label>
          <InputFeild
            name="telephone"
            control={control}
            placeholder="Vui lòng nhập số điện thoại bạn..."
          />
        </div>
        <div className="manager__update--group">
          <label>Địa chỉ :*</label>
          <InputFeild name="address" control={control} placeholder="Vui lòng nhập địa bạn..." />
        </div>
        <div className="manager__update--group--btn">
          <button type="submit">Xác nhận</button>
          <button type="button" onClick={handleCloseModal}>
            Đóng
          </button>
        </div>
        <div className={isOpen ? 'confirm active__confirm' : 'confirm'}>
          <div className="confirm__swap">
            <div className="confirm__top">
              <span>Bạn có muốn thêm vào danh sách</span>
            </div>
            <div className="confirm__bottom">
              <button type="button" onClick={handleCheckSubbmitBroveApi}>
                Đồng ý
              </button>
              <button type="button">Đóng</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
