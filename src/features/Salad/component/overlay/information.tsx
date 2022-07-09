import React, { SetStateAction, useState, Dispatch, ChangeEventHandler, useRef } from 'react';
import { formatPrice } from '../../../../utils';
import { SaladFeaturesProps } from './../../page/interface';
import './stylesInfor.scss';
import { IoMdAddCircle } from 'react-icons/io';
import { BiRadioCircleMarked } from 'react-icons/bi';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
export interface InformationProps {
  detail: SaladFeaturesProps;
  setsetPrice: Dispatch<SetStateAction<number>>;
  onSubmits: any;
}

export default function Information({ detail, setsetPrice, onSubmits }: InformationProps) {
  const [index, setindex] = useState<string>();
  const [indexSize, setindexSize] = useState<number>(0);
  const [newsoles, setnewsoles] = useState<number>(0);
  const [indexSoles, setindexSoles] = useState<number>(0);
  const [getmorre, setgetmorre] = useState<any>([]);
  // const [ischeck, setischeck] = useState<boolean>();
  const [values, setvalue] = useState<string>('');
  const [activemore, setactivemore] = useState<boolean>(false);
  const [getInfor, setgetInfor] = useState<any>({
    sizeName: '' || 'Nhỏ 6',
    sizePrice: undefined || 0,
    soles: '' || 'Dày',
    moreName: '',
    morePrice: '',
  });

  const moreRef = useRef<any>(false);
  const { name, size, soles, Spice, price, more } = detail;
  //handle thêm
  const handleClickSoles = (valueName: any, index: number) => {
    setindexSoles(index);
    // const { value, checked, name } = e.target;
    // setischeck(value !== name ? false : true);

    setindex(valueName);
    setgetInfor((prev: any) => ({
      ...prev,
      soles: valueName,
    }));
    // setischeck(chekc);
  };
  //handle size piza
  const handleClickSize = (newPrice: number, newName: string, newIndex: number) => {
    // console.log('newIndexx', newIndex);
    setgetInfor((prev: any) => ({
      ...prev,
      sizePrice: newPrice,
      sizeName: newName,
    }));
    setsetPrice((prev: any) => ({
      ...prev,
      priceSize: newPrice,
    }));
    setindexSize(newIndex);
    setnewsoles(newIndex);
  };

  const handleMore = (newValue: string, newPrice: number) => {
    setactivemore((x) => !x);
    setsetPrice((prev: any) => ({
      ...prev,
      priceMore: newPrice,
    }));
    // const nnewaaa = getmorre
    //   .filter((e: any, index: number) => (e[index] === newValue ? e.replace(e, '') : e))
    //   .join();
    // setgetmorre((prev: any) => [...prev, isactive === false ? newValue : nnewaaa]);
    setgetInfor((prev: any) => ({
      ...prev,
      moreName: newValue,

      morePrice: newPrice,
    }));
  };

  // console.log(soles?.forEach((i: any) => i.item.map((s: any) => s)));

  //active classname for checkbox === size
  const getStyles = (index: number) => {
    if (index === indexSize) {
      return 'size_item activess';
    } else {
      return 'size_item actives';
    }
  };
  const getStylesCheckBox = (index: number) => {
    if (index === indexSoles) {
      return ' activessSoles';
    } else {
      return ' activesSoles';
    }
  };
  //onsubmit info
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (onSubmits) onSubmits(getInfor, values);
    setvalue('');
    setgetInfor({
      sizeName: '',
      sizePrice: undefined,
      soles: '',
      moreName: '',
      morePrice: '',
    });
  };
  console.log('ref', moreRef);

  const deleteMore = () => {
    setgetInfor((prev: any) => ({
      ...prev,
      moreName: '',
      morePrice: '',
    }));
  };
  console.log(getmorre);
  return (
    <form onSubmit={handleSubmit}>
      <div className="ovelay_info">
        <div className="overlay_names">
          <span>{name}</span>
        </div>

        <div className="overlay_note">
          <div className="note_title">
            <span>GHI CHÚ</span>
          </div>

          <textarea
            placeholder="Nhập ghi chứ của bạn"
            value={values}
            onChange={(e) => setvalue(e.target.value)}
          />
        </div>
        <div className="ovelay_btn">
          <button type="submit">THÊM VÀO GIỎ HÀNG</button>
        </div>
      </div>
    </form>
  );
}
