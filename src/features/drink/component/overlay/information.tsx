import React, { SetStateAction, useState, Dispatch, ChangeEventHandler, useRef } from 'react';
import { formatPrice } from '../../../../utils';
import { DrinkFeaturesProps } from './../../page/interface';
import './stylesInfor.scss';
import { IoMdAddCircle } from 'react-icons/io';
import { BiRadioCircleMarked } from 'react-icons/bi';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
export interface InformationProps {
  detail: DrinkFeaturesProps;
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
        <div className="overlay_name">
          <span>{name}</span>
        </div>
        <div className="overlay_choose">
          <p>
            {`Kich thước ${
              size !== undefined && new Array(size[indexSize]).map((item) => item.name)
            } - ${(soles !== undefined && index) || 'Dày'}`}
          </p>
        </div>
        <div className="overlay_spice">
          <span>{Spice}</span>
        </div>
        {getInfor.moreName !== '' && (
          <div className="ovelay_coutinent">
            <span>{`+ ${getInfor.moreName}`}</span>
          </div>
        )}

        <div className="overlay_size">
          <div className="size_title">
            <p>KÍCH THƯỚC</p>
          </div>
          <div className="size_list">
            {size?.map((items: DrinkFeaturesProps, index: number) => (
              <div
                key={items.id}
                className={getStyles(index)}
                onClick={() => handleClickSize(items.price, items.name, index)}
              >
                <p>{items.name}</p>
                <p> {items.price > 0 && `+ ${formatPrice(items.price)}`}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="overlay_soles">
          <div className="soles_title">
            <p>ĐẾ</p>
          </div>
          <div className="soles_list">
            {soles
              ?.filter((e: any) => e.items[newsoles])
              ?.find((e: any) => e)
              ?.items.map((item: any, index: number) => (
                <div
                  key={index}
                  className="soles_item"
                  onClick={() => handleClickSoles(item, index)}
                >
                  <div className="soles_checkbox">
                    <BiRadioCircleMarked className={getStylesCheckBox(index)} />
                  </div>
                  <label>{item}</label>
                </div>
              ))}
          </div>
        </div>
        <div className="overlay_more">
          <div className="more_title">
            <span>THÊM NHÂN</span>
          </div>
          <div className="more_list">
            {more?.map((items, index) => (
              <div className="more_wrapper">
                <div
                  key={items.id}
                  className="more_item"
                  onClick={() => handleMore(items.name, items.price)}
                >
                  <div
                    className={
                      getInfor.moreName === items.name
                        ? 'more_item-block actimore'
                        : 'more_item-block'
                    }
                  >
                    <div className="more_aside">
                      <img src={items.images} alt="" />
                    </div>
                    <div className="more_name">
                      <p>{items.name}</p>
                    </div>
                    <div className="more_price">
                      <p>{`+ ${items.price}`}</p>
                    </div>
                    <div className="more_icon">
                      {getInfor.moreName === items.name ? (
                        <BsFillCheckCircleFill className="activeIcon" />
                      ) : (
                        <IoMdAddCircle />
                      )}
                    </div>
                  </div>{' '}
                </div>
                {getInfor.moreName === items.name && (
                  <div className="more_delete" onClick={deleteMore}>
                    <p>Xóa</p>
                  </div>
                )}
              </div>
            ))}
          </div>
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
