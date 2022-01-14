import * as React from 'react';

import { PizzaFeaturesProps } from './../../../page/interface';
import './styles.scss';
import { AiOutlineArrowRight, AiFillStar } from 'react-icons/ai';
import { BsCart3 } from 'react-icons/bs';
import { formatPrice } from '../../../../../utils';

export interface PizzaPerferItemProps {
  items: PizzaFeaturesProps;
}

export default function PizzaPerferItem({ items }: PizzaPerferItemProps) {
  const { name, image, price, detail, selling } = items;
  return (
    <div className="perfer_item">
      <div className="perfer_block">
        <div className="perfer_aside">
          <img src={image} alt="" />
          {selling !== '' && (
            <div className="rippon">
              <div className="perfer_ribbon">
                {/* <div className="ribbon_content">
              <span></span>
            </div> */}
                <AiFillStar />
              </div>
            </div>
          )}
        </div>
        <div className="perfer_content">
          <header>
            <div className="perfer_top">
              <div className="perfer_name">
                <span>{name}</span>
              </div>
              <div className="perfer_detail">{detail}</div>
            </div>
          </header>
          <footer>
            <div className="perfer_bottom">
              <div className="perfer_price">
                <span>Giá chỉ từ</span>
                <span>{formatPrice(price)}</span>
              </div>
              <div className="perfer_btn">
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
