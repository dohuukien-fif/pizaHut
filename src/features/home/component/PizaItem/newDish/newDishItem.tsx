import * as React from 'react';
import BakedNoodlesLisstProps from './../../pizaList/BakedNoodlesList';
import { HomeFeaturesProps } from './../../../page/interface';
import './styles.scss';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsCart3 } from 'react-icons/bs';
import { formatPrice } from '../../../../../utils';
export interface BakedNoodlesItemProps {
  items: HomeFeaturesProps;
  handleIds: any;
}

export default function BakedNoodlesItem({ items, handleIds }: BakedNoodlesItemProps) {
  const { name, image, price, detail } = items;
  const hanndleIdNew = (newIds: number) => {
    if (handleIds) handleIds(newIds);
  };
  return (
    <div className="newDish_item" onClick={() => hanndleIdNew(items.id)}>
      <div className="newDish_block">
        <div className="newDish_aside">
          <img src={image} alt="" />
        </div>
        <div className="newDish_content">
          <header>
            <div className="newDist_top">
              <div className="newDish_name">
                <span>{name}</span>
              </div>
              <div className="newDish_detail">{detail}</div>
            </div>
          </header>
          <footer>
            <div className="newDish_bottom">
              <div className="newDish_price">
                <span>Giá chỉ từ</span>
                <span>{formatPrice(price)}</span>
              </div>
              <div className="newDish_btn">
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
