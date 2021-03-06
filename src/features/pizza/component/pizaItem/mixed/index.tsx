import * as React from 'react';

import { PizzaFeaturesProps } from './../../../page/interface';
import './styles.scss';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsCart3 } from 'react-icons/bs';
import { formatPrice } from '../../../../../utils';

export interface PizzaMixedItemProps {
  items: PizzaFeaturesProps;
  handleIds: (newIds: any) => void;
}

export default function PizzaMixedItem({ items, handleIds }: PizzaMixedItemProps) {
  const { name, image, price, detail } = items;
  const hanndleIdNew = (newIds: number) => {
    if (handleIds) handleIds(newIds);
  };
  return (
    <div className="mixed_item" onClick={() => hanndleIdNew(items.orderId)}>
      <div className="mixed_block">
        <div className="mixed_aside">
          <img src={image} alt="" />
        </div>
        <div className="mixed_content">
          <header>
            <div className="mixed_top">
              <div className="mixed_name">
                <span>{name}</span>
              </div>
              <div className="mixed_detail">{detail}</div>
            </div>
          </header>
          <footer>
            <div className="mixed_bottom">
              <div className="mixed_price">
                <span>Giá chỉ từ</span>
                <span>{formatPrice(price)}</span>
              </div>
              <div className="mixed_btn">
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
