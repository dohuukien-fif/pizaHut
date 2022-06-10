import * as React from 'react';

import { AppertizerFeaturesProps } from './../../../page/interface';
import './styles.scss';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsCart3 } from 'react-icons/bs';
import { formatPrice } from '../../../../../utils';

export interface PizzaNewItemProps {
  items: AppertizerFeaturesProps;
  handleIds: (newId: number) => void;
}

export default function PizzaNewItem({ items, handleIds }: PizzaNewItemProps) {
  const { name, image, price, detail } = items;
  const hanndleIdNew = (newIds: number) => {
    if (handleIds) handleIds(newIds);
  };
  return (
    <div className="appertizer_item" onClick={() => handleIds(items.orderId)}>
      <div className="appertizer_block">
        <div className="appertizer_aside">
          <img src={image} alt="" />
        </div>
        <div className="appertizer_content">
          <header>
            <div className="appertizer_top">
              <div className="appertizer_name">
                <span>{name}</span>
              </div>
              <div className="appertizer_detail">{detail}</div>
            </div>
          </header>
          <footer>
            <div className="appertizer_bottom">
              <div className="appertizer_price">
                <span>Giá chỉ từ</span>
                <span>{formatPrice(price)}</span>
              </div>
              <div className="appertizer_btn">
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
