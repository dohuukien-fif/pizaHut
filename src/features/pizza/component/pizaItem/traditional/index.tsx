import * as React from 'react';

import { PizzaFeaturesProps } from './../../../page/interface';
import './styles.scss';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsCart3 } from 'react-icons/bs';
import { formatPrice } from '../../../../../utils';

export interface PizzaTraditiobItemProps {
  items: PizzaFeaturesProps;
}

export default function PizzaTraditiobItem({ items }: PizzaTraditiobItemProps) {
  const { name, image, price, detail } = items;
  return (
    <div className="traditional_item">
      <div className="traditional_block">
        <div className="traditional_aside">
          <img src={image} alt="" />
          <div className="traditional_icon">
            <BsCart3 />
          </div>
        </div>
        <div className="traditional_content">
          <header>
            <div className="traditional_top">
              <div className="traditional_name">
                <span>{name}</span>
              </div>
              <div className="traditional_detail">{detail}</div>
            </div>
          </header>
          <footer>
            <div className="traditional_bottom">
              <div className="traditional_price">
                <span>Giá chỉ từ</span>
                <span>{formatPrice(price)}</span>
              </div>
              <div className="traditional_btn">
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
