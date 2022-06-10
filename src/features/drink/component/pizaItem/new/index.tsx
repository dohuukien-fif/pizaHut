import * as React from 'react';

import { DrinkFeaturesProps } from './../../../page/interface';
import './styles.scss';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsCart3 } from 'react-icons/bs';
import { formatPrice } from '../../../../../utils';

export interface PizzaNewItemProps {
  items: DrinkFeaturesProps;

  handleIds: (newIds: number) => void;
}

export default function PizzaNewItem({ items, handleIds }: PizzaNewItemProps) {
  const { name, image, price, detail } = items;
  const hanndleIdNew = (newIds: number) => {
    if (handleIds) handleIds(newIds);
  };
  return (
    <div className="drink_item" onClick={() => handleIds(items.orderId)}>
      <div className="drink_block">
        <div className="drink_aside">
          <img src={image} alt="" />
        </div>
        <div className="drink_content">
          <header>
            <div className="drink_top">
              <div className="drink_name">
                <span>{name}</span>
              </div>
              <div className="drink_detail">{detail}</div>
            </div>
          </header>
          <footer>
            <div className="drink_bottom">
              <div className="drink_price">
                <span>Giá chỉ từ</span>
                <span>{formatPrice(price)}</span>
              </div>
              <div className="drink_btn">
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
