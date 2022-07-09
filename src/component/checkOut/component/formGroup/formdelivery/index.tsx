import { yupResolver } from '@hookform/resolvers/yup';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Inputfeild from '../../../../formControl/inputFeild';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { cartAddressOld } from './../../../../cart/cartSelected';
import { useSelector, useDispatch } from 'react-redux';
import SelectedField from '../../../../formControl/selectedFeild';
import RadioField from '../../../../formControl/radioFeild';
import { Button } from 'react-scroll';
import axios, { Axios } from 'axios';
import { CityProps } from '../../../../../model/city';
export interface FormDeliveryProps {
  setinfors: React.Dispatch<React.SetStateAction<string>>;
  infors: any;
  onSubmits: any;
  numbers: any;
  handleBackbefore: any;
  handleClic: any;
  setisStores: any;
  setisforms: any;
}

function FormDelivery({
  setinfors,
  numbers,
  handleBackbefore,
  infors,
  setisforms,
  handleClic,
  onSubmits,
  setisStores,
}: FormDeliveryProps) {
  const Errrr = React.useRef<any>();
  const [radioShiper, setradioShiper] = React.useState<any>('');
  const [isbolean, setisbolean] = React.useState<boolean>(false);
  const [index, setindex] = React.useState<number>(0);
  const [Datacity, setDatacity] = React.useState<any>([
    {
      value: '',
      label: 'Chon Tỉnh/Thành',
    },
    {
      value: 'hcm',
      label: 'Hồ Chí Minh',
    },
    {
      value: 'hn',
      label: 'ha noi',
    },
    {
      value: 'ct',
      label: 'can tho',
    },
  ]);
  const [Datacoutry, setDatacoutry] = React.useState<any>([
    {
      value: '',
      label: 'Chon Quận/Huyện',
    },
    {
      value: 'hcm',
      label: 'thu duc',
    },
    {
      value: 'hn',
      label: 'quan ',
    },
    {
      value: 'ct',
      label: 'huyen',
    },
  ]);
  const [Datastreet, setDatastreet] = React.useState<any>([
    {
      value: '',
      label: 'Chon Xã/Phường',
    },
    {
      value: 'hcm',
      label: 'duc hoa',
    },
    {
      value: 'hn',
      label: 'ha noi',
    },
    {
      value: 'ct',
      label: 'can tho',
    },
  ]);
  const [values, setvalue] = React.useState<any>({
    fullName: '',
    phone: '',
    home: '',
    street: '',
    city: '',
    coutry: '',
    streets: '',

    time: '',
    shipper: '' || 'giao ngay',
  });
  const checkOurtAddress = useSelector(cartAddressOld);
  console.log('add', checkOurtAddress);
  console.log('checkedAndress', checkOurtAddress);
  const [error, seterror] = React.useState<string>('');
  const [checkedAndress, setcheckedAndress] = React.useState<boolean>(false);

  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required('please enter your full Name')
      .test('should has leasst two word', 'please enter at least two word', (value: any) => {
        return value.split(' ').length >= 2;
      }),
    phone: yup.string().required('please enter your Email').email('please enter Email'),
    city: yup.string().required('please enter your Email').email('please enter Email'),
    coutry: yup.string().required('please enter your Email').email('please enter Email'),
    commune: yup.string().required('please enter your Email').email('please enter Email'),
    apartment: yup.string().required('please enter your Email').email('please enter Email'),
    Street: yup.string().required('please enter your Password').min(6, 'please enter at least 6 '),
    now: yup
      .string()
      .required('please enter retyPassword')
      .oneOf([yup.ref('password')], 'please does not match'),
    time: yup
      .string()
      .required('please enter retyPassword')
      .oneOf([yup.ref('password')], 'please does not match'),
  });

  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      fullName: '',
      phone: '',
      home: '',

      streets: '',

      time: '',
      // shipper: '' || 'giao ngay',
    },
  });
  const [City, setCity] = React.useState({
    city: '',
    street: '',
    coutry: '',
  });
  const [data, setdata] = React.useState<CityProps[]>([]);

  const handleChan = (e: any) => {
    const { name, value } = e.target;
    setCity((prevCity) => ({
      ...prevCity,
      [name]: value,
    }));
  };

  React.useEffect(() => {
    const fetchApi = async () => {
      const res = await axios.get('https://provinces.open-api.vn/api/?depth=3');
      setdata(res.data);
      console.log('dataCity', res);
    };
    fetchApi();
  }, []);
  // const {
  //   control,
  //   handleSubmit,
  //   formState: { isSubmitting },
  // } = useForm({
  //   defaultValues: {
  //     fullName: '',
  //     phone: '',
  //     home: '',
  //     street: '',
  //   },
  //   resolver: yupResolver(schema),
  // });
  const newValue = Object.values(values).includes('');

  const handleFormSubmit = async (formValues: any) => {
    console.log('ngu heo', { ...formValues }, City);

    // one submit index + 1 để check address old =>dialog
    setindex((prev) => prev + 1);

    // dialog check using address old
    if (index >= 2) {
      setisbolean(false);
      return setindex(0);
    }

    //check address old
    if (checkedAndress && checkOurtAddress === undefined) {
      setcheckedAndress(false);
      return seterror('Bạn chưa có địa chỉ cũ');
    } else if (checkedAndress && checkOurtAddress !== undefined) {
      handleClic();
      setisbolean(true);
      return await onSubmits(checkOurtAddress);
    }

    //check address new
    if (Object.values(formValues).includes('')) {
      setisStores({
        fullName: '',
        phone: '',
        street: '',
        city: '',
        coutry: '',
        store: '',
      });
      return seterror('vui lòng  kiểm  tra thông   tin  còn thiếu');
    } else {
      console.log('chimtooooo o', { ...formValues, ...City });
      await onSubmits({ ...formValues, ...City });
      handleClic();
      // setvalue({
      //   fullName: '',
      //   phone: '',
      //   home: '',
      //   street: '',
      //   city: '',
      //   coutry: '',
      //   streets: '',
      // });
    }

    // Clear previous submission error
  };
  console.log('inndex', checkedAndress);
  // const hanndleChange = (e: any) => {
  //   const { value, name } = e.target;
  //   setvalue((prev: any) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };
  // const handleChane = (e: any) => {
  //   const { value, name } = e.currentTarget;
  //   console.log('radio', name, value);
  //   setvalue((prev: any) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = async () => {
  //   handleClic();
  //   if (checkedAndress) {
  //     return await onSubmits(checkOurtAddress);
  //   }
  //   if (newValue) {
  //     setisStores({
  //       fullName: '',
  //       phone: '',
  //       street: '',
  //       city: '',
  //       coutry: '',
  //       store: '',
  //     });
  //     return seterror('vui lòng  kiểm  tra thông   tin  còn thiếu');
  //   } else {
  //     onSubmits(values);
  //     setvalue({
  //       fullName: '',
  //       phone: '',
  //       home: '',
  //       street: '',
  //       city: '',
  //       coutry: '',
  //       streets: '',
  //     });
  //   }
  // };

  React.useEffect(() => {
    if (error !== '') {
      Errrr.current = setTimeout(() => {
        seterror('');
      }, 5000);
    }
    return () => clearTimeout(Errrr.current);
  }, [error]);
  // const { isSubmitting } = form.formState;

  // const onSubmit = (data: any) => console.log('form', data);

  const handleClickisBolean = () => {
    setisbolean(false);
    setisforms({
      fullName: '',
      phone: '',
      home: '',
      street: '',
      city: '',
      coutry: '',
      time: '',
    });
  };

  console.log(City);

  return (
    <div className="infor_content">
      {error !== '' && (
        <div className={error !== '' ? 'cart_Error active_error' : 'cart_Error'}>
          <p>{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="infor_left">
          <div
            className={isbolean ? 'dialogCheckInfor active_dialogCheckInfor' : 'dialogCheckInfor'}
          >
            <div className="dialogCheckInfor_swapper">
              <p> bạn chắc chắn muốn dùng địa chỉ cũ để đặt hàng ?</p>
              <div className="dialogCheckInfor_btn">
                <span onClick={handleClickisBolean}>Cancer</span>
                <button type="submit">xác nhận</button>
              </div>
            </div>
          </div>

          <div className="infor_left-title">
            <span>Thông tin nhận hàng</span>

            <div className="form_group">
              {/* <Inputfeild control={control} name="fullName" />
              <Inputfeild control={control} name="home" />
              <Inputfeild control={control} name="phone" /> */}

              <input
                type="checkbox"
                id="cb1"
                onChange={(e) => setcheckedAndress(e.currentTarget.checked)}
              />
              <span>Sử dụng địa chỉ cũ</span>
            </div>
          </div>
          {/* INFOR_LEFT */}
          <div className="infor_left-content">
            <div className="form_group">
              <label>
                Họ và tên: <strong>*</strong>
              </label>
              <Inputfeild control={control} name="fullName" />
            </div>
            <div className="form_group">
              <label>
                Số điện thoại: <strong>*</strong>
              </label>
              <Inputfeild control={control} name="phone" />
            </div>
            <div className="form_group">
              <label>
                Tỉnh thành: <strong>*</strong>
              </label>
              <select name="city" id="" onChange={handleChan}>
                <option>Vui long chọn Tỉnh/Thành phố</option>{' '}
                {data.map((item: any, index) => (
                  <>
                    <option value={item.name}>{item.name}</option>
                  </>
                ))}
              </select>
            </div>
            <div className="form_group">
              <label>
                Quận huyện: <strong>*</strong>
              </label>
              <select name="street" id="" onChange={handleChan}>
                {City.city !== '' ? (
                  <>
                    {' '}
                    <option>Vui long chọn Quận/Huyện</option>
                    {data

                      ?.find((e: any) => e.name === City.city)
                      ?.districts?.map((item, idx) => (
                        <option value={item.name}>{item.name}</option>
                      ))}
                  </>
                ) : (
                  <option>Vui long chọn Tỉnh/Thành phố</option>
                )}
              </select>
            </div>
            <div className="form_group">
              <label>
                Phường xã: <strong>*</strong>
              </label>
              <select name="coutry" id="" onChange={handleChan}>
                {City.street !== '' ? (
                  <>
                    <option>Vui long chọn Phường/Xã</option>
                    {data
                      ?.find((e: any) => e.name === City.city)
                      ?.districts.find((e) => e.name === City.street)
                      ?.wards?.map((item: any, idx: number) => (
                        <option value={item.name}>{item.name}</option>
                      ))}
                  </>
                ) : (
                  <option>Vui long chọn Quận/huyện</option>
                )}
              </select>
            </div>
            <div className="form_group">
              <label>
                Số nhà hẽm: <strong>*</strong>
              </label>
              <Inputfeild control={control} name="home" />
            </div>
            <div className="form_group">
              <label>
                Tên đường: <strong>*</strong>
              </label>
              <Inputfeild control={control} name="streets" />
            </div>
          </div>
        </div>
        {/* INFOR_RIGHT */}
        <div className="infor_right">
          <div className="infor_right-title">
            <span>Chọn thời gian nhận hàng</span>
          </div>
          <div className="form_group" onClick={() => setinfors('now')}>
            <RadioField control={control} name="time" value="ngay bay gio" />

            <label> Ngay bây giờ (tối thiểu 30 phút sau khi đặt hàng thành công)</label>
          </div>
          <div className="form_group" onClick={() => setinfors('time')}>
            <RadioField control={control} name="time" value="" />
            {/* <input
              type="radio"
              onClick={() => setinfors('time')}
              id="time"
              // name="time"
              // onChange={(e) => setcheckedAndress(e.currentTarget.value)}
            /> */}
            <label>chọn thời gian</label>
          </div>
          <div className="form_check">
            <input
              type="checkbox"
              id="cb1"
              name="time"
              // value={values.time}
              // onChange={hanndleChange}
            />
            <label>Chọn xuất quá đơn đỏ</label>
          </div>

          {infors === 'time' && (
            <div className="form_time">
              <Inputfeild control={control} name="time" />
              {/* <input
                type="text"
                placeholder="Nhập thời gian giao hàng"
                name="time"
                value={values.time}
                onChange={hanndleChange}
              /> */}
            </div>
          )}
          <div className={numbers >= 4 ? 'checkout_btn activenone' : 'checkout_btn'}>
            <button type="button" className="btn_continue btn-back" onClick={handleBackbefore}>
              <AiOutlineArrowLeft />
              Quay lại
            </button>
            <button type="submit" className="btn_payload">
              Đặt hàng
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default React.memo(FormDelivery);
