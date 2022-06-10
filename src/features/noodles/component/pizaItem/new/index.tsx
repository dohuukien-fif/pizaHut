import * as React from 'react';

import { NoodlesFeaturesProps } from './../../../page/interface';
import './styles.scss';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsCart3 } from 'react-icons/bs';
import { formatPrice } from '../../../../../utils';

export interface PizzaNewItemProps {
  items: NoodlesFeaturesProps;
  handleIds: (newIds: number) => void;
}

export default function PizzaNewItem({ items, handleIds }: PizzaNewItemProps) {
  const { name, image, price, detail } = items;
  const hanndleIdNew = (newIds: number) => {
    if (handleIds) handleIds(newIds);
  };
  return (
    <div className="noodles_item" onClick={() => handleIds(items.orderId)}>
      <div className="noodles_block">
        <div className="noodles_aside">
          <img src={image} alt="" />
        </div>
        <div className="noodles_content">
          <header>
            <div className="noodles_top">
              <div className="noodles_name">
                <span>{name}</span>
              </div>
              <div className="noodles_detail">{detail}</div>
            </div>
          </header>
          <footer>
            <div className="noodles_bottom">
              <div className="noodles_price">
                <span>Giá chỉ từ</span>
                <span>{formatPrice(price)}</span>
              </div>
              <div className="noodles_btn">
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
