import * as React from 'react';
import NewDishLisstProps from './../../pizaList/BakedNoodlesList';
import { HomeFeaturesProps } from './../../../page/interface';
import './styles.scss';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsCart3 } from 'react-icons/bs';
import { formatPrice } from '../../../../../utils';
export interface newDishItemProps {
  items: HomeFeaturesProps;
  handleIds: any;
}

export default function newDishItem({ items, handleIds }: newDishItemProps) {
  const { name, image, price, detail } = items;
  const hanndleIdNew = (newIds: number) => {
    if (handleIds) handleIds(newIds);
  };
  return (
    <div className="bakednooles_item" onClick={() => hanndleIdNew(items.orderId)}>
      <div className="bakednooles_block">
        <div className="bakednooles_aside">
          <img src={image} alt="" />
        </div>
        <div className="bakednooles_content">
          <header>
            <div className="newDist_top">
              <div className="bakednooles_name">
                <span>{name}</span>
              </div>
              <div className="bakednooles_detail">{detail}</div>
            </div>
          </header>
          <footer>
            <div className="bakednooles_bottom">
              <div className="bakednooles_price">
                <span>Giá chỉ từ</span>
                <span>{formatPrice(price)}</span>
              </div>
              <div className="bakednooles_btn">
                <button>
                  <span>Mua ngay</span> <AiOutlineArrowRight />
                </button>
              </div>
            </div>
          </footer>
        </div>
      </div>
      {/* <h1>{name}</h1> */}
    </div>
  );
}
