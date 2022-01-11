import * as React from 'react';

import { DrinkFeaturesProps } from './../../../page/interface';
import './styles.scss';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsCart3 } from 'react-icons/bs';
import { formatPrice } from '../../../../../utils';

export interface PizzaNewItemProps {
  items: DrinkFeaturesProps;

  handleIds: (newIds: any) => {};
}

export default function PizzaNewItem({ items, handleIds }: PizzaNewItemProps) {
  const { name, image, price, detail } = items;
  const hanndleIdNew = (newIds: number) => {
    if (handleIds) handleIds(newIds);
  };
  return (
    <div className="new_item" onClick={() => hanndleIdNew(items.id)}>
      <div className="new_block">
        <div className="new_aside">
          <img src={image} alt="" />
          <div className="new_icon">
            <BsCart3 />
          </div>
        </div>
        <div className="new_content">
          <header>
            <div className="new_top">
              <div className="new_name">
                <span>{name}</span>
              </div>
              <div className="new_detail">{detail}</div>
            </div>
          </header>
          <footer>
            <div className="new_bottom">
              <div className="new_price">
                <span>Giá chỉ từ</span>
                <span>{formatPrice(price)}</span>
              </div>
              <div className="new_btn">
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
