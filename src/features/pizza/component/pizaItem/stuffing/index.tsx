import * as React from 'react';

import { PizzaFeaturesProps } from './../../../page/interface';
import './styles.scss';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsCart3 } from 'react-icons/bs';
import { formatPrice } from '../../../../../utils';

export interface PizzaStuffingItemProps {
  items: PizzaFeaturesProps;
  handleIds: any;
}

export default function PizzaStuffingItem({ items, handleIds }: PizzaStuffingItemProps) {
  const { name, image, price, detail } = items;
  const hanndleIdNew = (newIds: number) => {
    if (handleIds) handleIds(newIds);
  };
  return (
    <div className="stuffing_item" onClick={() => hanndleIdNew(items.id)}>
      <div className="stuffing_block">
        <div className="stuffing_aside">
          <img src={image} alt="" />
        </div>
        <div className="stuffing_content">
          <header>
            <div className="stuffing_top">
              <div className="stuffing_name">
                <span>{name}</span>
              </div>
              <div className="stuffing_detail">{detail}</div>
            </div>
          </header>
          <footer>
            <div className="stuffing_bottom">
              <div className="stuffing_price">
                <span>Giá chỉ từ</span>
                <span>{formatPrice(price)}</span>
              </div>
              <div className="stuffing_btn">
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
