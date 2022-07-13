import { yupResolver } from '@hookform/resolvers/yup';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { MdPlace } from 'react-icons/md';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { setAddress, setStore } from './../../../checkOutRedux';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Inputfeild from '../../../../formControl/inputFeild';
import RadioField from '../../../../formControl/radioFeild';
import SelectedField from '../../../../formControl/selectedFeild';
import { cartStore } from './../../../../cart/cartSelected';
import axios from 'axios';
import { CityProps } from '../../../../../model/city';
export interface FormPickupProps {
  onSubmits: any;
  setinfors: React.Dispatch<React.SetStateAction<string>>;
  handleClickTimes: any;
  handleClickTab: any;
  istab: string;
  infors: string;
  handleClic: any;
  numbers: any;
  handleBackbefore: any;
  setisforms: any;
}

export default function FormPickup({
  onSubmits,
  setinfors,
  handleClickTimes,
  handleClickTab,
  istab,
  infors,
  handleClic,
  numbers,
  handleBackbefore,
  setisforms,
}: FormPickupProps) {
  const Errrr = React.useRef<any>();
  const [data, setdata] = React.useState<CityProps[]>([]);
  const [City, setCity] = React.useState<any>({
    city: '',
    street: '',
    coutry: '',
  });
  const dispatch = useDispatch();
  const CARTSTORE = useSelector(cartStore);
  const [values, setvalue] = React.useState<any>({
    fullName: '',
    phone: '',

    city: '',
    coutry: '',
  });
  const [error, seterror] = React.useState<string>('');
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
  // const [values, setvalue] = React.useState<any>({
  //   fullName: '',
  //   phone: '',
  //   home: '',
  //   street: '',
  //   city: '',
  //   coutry: '',
  //   streets: '',

  //   time: '',
  //   shipper: '' || 'giao ngay',
  // });
  const [store, setstore] = React.useState<any[]>([
    {
      stores: 'THE PIZZA COMPANY SONG HÀNH',
      address: '81 song hành,P An phú , Quận 2 ,HCM',
      phone: '0969757507',
    },
    {
      stores: 'THE PIZZA COMPANY NGUYỄN THỊ MINH KHAI',
      address: '81 song hành,P An phú , Quận 2 ,HCM',
      phone: '0969757507',
    },
    {
      stores: 'THE PIZZA COMPANY 333 LÊ VĂN SỸ',
      address: '81 song hành,P An phú , Quận 2 ,HCM',
      phone: '0969757507',
    },
  ]);
  // const schema = yup.object().shape({
  //   fullName: yup
  //     .string()
  //     .required('please enter your full Name')
  //     .test('should has leasst two word', 'please enter at least two word', (value: any) => {
  //       return value.split(' ').length >= 2;
  //     }),
  //   phone: yup.string().required('please enter your Email').email('please enter Email'),
  //   email: yup.string().required('please enter your Email').email('please enter Email'),
  //   now: yup.string().required('please enter your Email').email('please enter Email'),
  //   time: yup.string().required('please enter your Password').min(6, 'please enter at least 6 '),
  //   city: yup
  //     .string()
  //     .required('please enter retyPassword')
  //     .oneOf([yup.ref('password')], 'please does not match'),
  //   coutry: yup
  //     .string()
  //     .required('please enter retyPassword')
  //     .oneOf([yup.ref('password')], 'please does not match'),
  //   store: yup
  //     .string()
  //     .required('please enter retyPassword')
  //     .oneOf([yup.ref('password')], 'please does not match'),
  //   selectSotre: yup
  //     .string()
  //     .required('please enter retyPassword')
  //     .oneOf([yup.ref('password')], 'please does not match'),
  // });
  // const form = useForm({
  //   defaultValues: {
  //     fullName: '',
  //     email: '',
  //     password: '',
  //     retypePassword: '',
  //   },
  //   resolver: yupResolver(schema),
  // });
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      fullName: '',
      phone: '',

      // street: '',
      // streets: '',

      time: '',
      // shipper: '' || 'giao ngay',
    },
  });
  const handleChan = (e: any) => {
    const { name, value } = e.target;
    setCity((prevCity: CityProps) => ({
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
  // const hanndleChange = (e: any) => {
  //   const { value, name } = e.target;
  //   setvalue((prev: any) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };
  // const newValue = Object.values(values).includes('');

  const handleClick = (store: string, address: string) => {
    const action = setStore({ store, address });

    dispatch(action);
  };

  const handleFormSubmit = (formValues: any) => {
    console.log('ngu heo', formValues);

    // one submit index + 1 để check address old =>dialog

    // dialog check using address old

    //check address old

    //check address new

    console.log('CARTSTORE', Object.keys(CARTSTORE).length);
    if (Object.values(formValues).includes('') || Object.keys(CARTSTORE).length === 0) {
      setisforms({
        fullName: '',
        phone: '',
        home: '',
        street: '',
        city: '',
        coutry: '',
        time: '',
        streets: '',
      });
      return seterror('vui lòng  kiểm  tra thông   tin  còn thiếu');
    } else {
      console.log('[{ ...formValues, ...City }]', { ...formValues, ...City });
      onSubmits({ ...formValues, ...City });
      handleClic();
    }
  };

  React.useEffect(() => {
    if (error !== '') {
      Errrr.current = setTimeout(() => {
        seterror('');
      }, 5000);
    }
    return () => clearTimeout(Errrr.current);
  }, [error]);
  // const { isSubmitting } = form.formState;
  //fetchApi   City

  console.log('City', City);
  return (
    <div className="receiver_content">
      {error !== '' && (
        <div className={error !== '' ? 'cart_Error active_error' : 'cart_Error'}>
          <p>{error}</p>
        </div>
      )}
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="receiver_left">
          <div className="receiver_left-title">
            <span>Thông tin nhận hàng</span>
          </div>
          {/* RECEIVER_LEFT */}
          <div className="receiver_left-content">
            <div className="form_group">
              <label>
                Họ và tên: <strong>*</strong>
              </label>
              <Inputfeild
                control={control}
                name="fullName"
                placeholder="Vui lòng nhập họ và tên của bạn..."
              />
            </div>
            <div className="form_group">
              <label>
                Số điện thoại: <strong>*</strong>
              </label>
              <Inputfeild
                control={control}
                name="phone"
                placeholder="Vui lòng nhập số điện thoại của bạn..."
              />
            </div>

            <div className="receiver_time">
              <div className="receiver_right-title">
                <span>CHỌN THỜI GIAN NHẬN HÀNG</span>
              </div>
              <div className="form_groupRadio" onClick={() => setinfors('now')}>
                <RadioField control={control} name="time" value="ngay bay gio" />

                <label>Chọn ngay bây giờ (tối thiểu 30 phút sau khi đặt hàng thành công)</label>
              </div>
              <div className="form_groupRadio" onClick={() => setinfors('time')}>
                <RadioField control={control} name="time" value="" />
                <label>chọn thời gian</label>
              </div>
              <div className="form_check">
                <input type="checkbox" id="cb1" />
                <label>Chọn xuất quá đơn đỏ</label>
              </div>
            </div>
            {infors === 'time' && (
              <div className="form_group" style={{ marginTop: '20px' }}>
                <Inputfeild
                  control={control}
                  name="time"
                  placeholder="Vui lòng nhập thời gian lấy hàng..."
                />
              </div>
            )}
          </div>
        </div>
        {/* RECEIVER_RIGHT */}
        <div className="receiver_right">
          <div className="receiver_right-title">
            <span>chọn cửa hàng nhận</span>
          </div>

          <div className="receiver_right-content">
            <div className="form_group">
              <label>
                Tỉnh thành: <strong>*</strong>
              </label>
              <select name="city" id="" onChange={handleChan}>
                <option>Vui long chọn Tỉnh/Thành phố</option>{' '}
                {data.map((item: any, index) => (
                  <React.Fragment key={index}>
                    <option value={item.name}>{item.name}</option>
                  </React.Fragment>
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
                        <React.Fragment key={idx}>
                          {' '}
                          <option value={item.name}>{item.name}</option>
                        </React.Fragment>
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
                        <React.Fragment key={idx}>
                          <option value={item.name}>{item.name}</option>
                        </React.Fragment>
                      ))}
                  </>
                ) : (
                  <option>Vui long chọn Quận/huyện</option>
                )}
              </select>
            </div>
            <div className="receiver_store">
              <div className="receiver_store-btn">
                <button
                  type="button"
                  className={
                    istab === 'near'
                      ? 'receiver_store-btn-near activeTab'
                      : 'receiver_store-btn-near'
                  }
                  onClick={() => handleClickTab('near')}
                >
                  <span>Cửa hàng gần bạn</span>
                </button>
                <button
                  type="button"
                  className={
                    istab === 'filter'
                      ? 'receiver_store-btn-near activeTab'
                      : 'receiver_store-btn-near'
                  }
                  onClick={() => handleClickTab('filter')}
                >
                  Cửa hàng có thể lọc
                </button>
              </div>

              <div className="receiver_store-place">
                {/* TAB-NEAR */}
                {istab === 'near' && (
                  <>
                    {' '}
                    {store.map((items, index) => (
                      <div className="form_store" key={index}>
                        <input
                          type="radio"
                          id="time"
                          name="time"
                          value={items}
                          onClick={() => handleClick(items.stores, items.address)}
                        />
                        <div className="receiver_store-place-content">
                          <div className="receiver_store-place-block">
                            <div className="receiver_store-title">
                              <span>{items.stores}</span>
                            </div>
                            <div className="receiver_store-places">
                              <MdPlace />
                              <span>{items.address}</span>
                            </div>
                            <div className="receiver_store-phone">
                              <BsTelephone />
                              <span>{items.phone}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
                {/* TABFILTER */}
                {istab === 'filter' && (
                  <>
                    {' '}
                    {store.map((items, index) => (
                      <div className="form_store" key={index}>
                        <input
                          type="radio"
                          id="time"
                          name="time"
                          onClick={() => handleClick(items.stores, items.address)}
                        />
                        <div className="receiver_store-place-content">
                          <div className="receiver_store-place-block">
                            <div className="receiver_store-title">
                              <span>{items.stores}</span>
                            </div>
                            <div className="receiver_store-places">
                              <MdPlace />
                              <span>{items.address}</span>
                            </div>
                            <div className="receiver_store-phone">
                              <BsTelephone />
                              <span>{items.phone}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
          <div className={numbers >= 4 ? 'checkout_btn activenone' : 'checkout_btn'}>
            <button type="button" className="btn_continue btn-back" onClick={handleBackbefore}>
              <AiOutlineArrowLeft />
              Quay lại
            </button>
            <button className="btn_payload" type="submit">
              Đặt hàng
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
