import * as React from 'react';

import { DessertFeaturesProps } from './../../../page/interface';
import './styles.scss';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsCart3 } from 'react-icons/bs';
import { formatPrice } from '../../../../../utils';

export interface PizzaNewItemProps {
  items: DessertFeaturesProps;
  handleIds: (newIds: any) => {};
}

export default function PizzaNewItem({ items, handleIds }: PizzaNewItemProps) {
  const { name, image, price, detail } = items;
  const hanndleIdNew = (newIds: number) => {
    if (handleIds) handleIds(newIds);
  };
  return (
    <div className="dessert_item" onClick={() => handleIds(items.id)}>
      <div className="dessert_block">
        <div className="dessert_aside">
          <img src={image} alt="" />
        </div>
        <div className="dessert_content">
          <header>
            <div className="dessert_top">
              <div className="dessert_name">
                <span>{name}</span>
              </div>
              <div className="dessert_detail">{detail}</div>
            </div>
          </header>
          <footer>
            <div className="dessert_bottom">
              <div className="dessert_price">
                <span>Giá chỉ từ</span>
                <span>{formatPrice(price)}</span>
              </div>
              <div className="dessert_btn">
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
