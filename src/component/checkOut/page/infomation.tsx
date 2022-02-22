import * as React from 'react';
import './infor.scss';
import { cartOrder, cartAddress } from './../../cart/cartSelected';
import { useSelector, useDispatch } from 'react-redux';
import { AiFillClockCircle, AiOutlineSearch } from 'react-icons/ai';
import { MdPlace } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';
import FormDelivery from '../component/formGroup/formdelivery';
import FormPickup from '../component/formGroup/formpickup';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
export interface InformationFearutesProps {
  setisform: any;
  numbers: any;
  handleBackbefore: any;
  handleClic: any;
  setisstore: any;
}

function InformationFearutes({
  setisstore,
  setisform,
  numbers,
  handleBackbefore,
  handleClic,
  setisStores,
  setisforms,
  setnumber,
}: any) {
  const CartOrders = useSelector(cartOrder);
  const [istime, setistime] = React.useState<boolean>(false);
  const [istab, setistab] = React.useState<string>('near');
  const [infors, setinfors] = React.useState<string>('');

  const handleClickTimes = () => {
    setistime((x) => !x);
  };
  // const handlechekc = (value: any) => {
  //   setinfors(value.target.defaultValue);
  // };
  const handleClickTab = (newTab: string) => {
    setistab(newTab);
  };
  const handleSubmit = (value: any) => {
    if (setisform) {
      setisform(value);
    }
  };
  const handleSubmits = (value: any) => {
    if (setisstore) {
      setisstore(value);
    }
  };
  return (
    <div className="infor">
      {CartOrders === 'Đặt giao hàng' && (
        <div className="infor_swrapper">
          <div className="infor_title">
            <span>Đặt giao hàng</span>
          </div>
          <FormDelivery
            setisforms={setisforms}
            setinfors={setinfors}
            infors={infors}
            onSubmits={handleSubmit}
            numbers={numbers}
            handleBackbefore={handleBackbefore}
            handleClic={handleClic}
            setisStores={setisStores}
          />
        </div>
      )}

      {CartOrders === 'Đặt lấy hàng' && (
        <div className="receiver_swrapper">
          <div className="receiver_title">
            <span>Đặt lấy hàng</span>
          </div>
          <FormPickup
            numbers={numbers}
            onSubmits={handleSubmits}
            setinfors={setinfors}
            handleClickTimes={handleClickTimes}
            handleClickTab={handleClickTab}
            istab={istab}
            infors={infors}
            handleClic={handleClic}
            handleBackbefore={handleBackbefore}
            setisforms={setisforms}
          />
        </div>
      )}
    </div>
  );
}
export default React.memo(InformationFearutes);
