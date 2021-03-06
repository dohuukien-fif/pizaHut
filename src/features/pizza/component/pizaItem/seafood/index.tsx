import * as React from 'react';

import { PizzaFeaturesProps } from './../../../page/interface';
import './styles.scss';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsCart3 } from 'react-icons/bs';
import { formatPrice } from '../../../../../utils';

export interface PizzaSeafoodItemProps {
  items: PizzaFeaturesProps;
  handleIds: (newIds: any) => void;
}

export default function PizzaSeafoodItem({ items, handleIds }: PizzaSeafoodItemProps) {
  const { name, image, price, detail } = items;
  const hanndleIdNew = (newIds: number) => {
    if (handleIds) handleIds(newIds);
  };
  return (
    <div className="seafood_item" onClick={() => hanndleIdNew(items.orderId)}>
      <div className="seafood_block">
        <div className="seafood_aside">
          <img src={image} alt="" />
        </div>
        <div className="seafood_content">
          <header>
            <div className="seafood_top">
              <div className="seafood_name">
                <span>{name}</span>
              </div>
              <div className="seafood_detail">{detail}</div>
            </div>
          </header>
          <footer>
            <div className="seafood_bottom">
              <div className="seafood_price">
                <span>Giá chỉ từ</span>
                <span>{formatPrice(price)}</span>
              </div>
              <div className="seafood_btn">
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
