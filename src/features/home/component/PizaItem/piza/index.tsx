import * as React from 'react';
import BakedNoodlesLisstProps from './../../pizaList/BakedNoodlesList';
import { HomeFeaturesProps } from './../../../page/interface';
import './styles.scss';
import { AiOutlineArrowRight, AiFillStar } from 'react-icons/ai';
import { BsCart3 } from 'react-icons/bs';
import { formatPrice } from '../../../../../utils';

export interface PizaItemProps {
  items: HomeFeaturesProps;
}

export default function PizaItem({ items }: PizaItemProps) {
  const { name, image, price, detail, selling } = items;
  return (
    <div className="pizza_item">
      <div className="pizza_block">
        <div className="pizza_aside">
          <img src={image} alt="" />
          {selling !== '' && (
            <div className="rippon">
              <div className="pizza_ribbon">
                {/* <div className="ribbon_content">
              <span></span>
            </div> */}
                <AiFillStar />
              </div>
            </div>
          )}
        </div>
        <div className="pizza_content">
          <header>
            <div className="pizza_top">
              <div className="pizza_name">
                <span>{name}</span>
              </div>
              <div className="pizza_detail">{detail}</div>
            </div>
          </header>
          <footer>
            <div className="pizza_bottom">
              <div className="pizza_price">
                <span>Giá chỉ từ</span>
                <span>{formatPrice(price)}</span>
              </div>
              <div className="pizza_btn">
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
