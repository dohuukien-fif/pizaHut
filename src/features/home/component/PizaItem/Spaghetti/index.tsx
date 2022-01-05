import * as React from 'react';
import BakedNoodlesLisstProps from './../../pizaList/BakedNoodlesList';
import { HomeFeaturesProps } from './../../../page/interface';
import './styles.scss';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsCart3 } from 'react-icons/bs';
import { formatPrice } from '../../../../../utils';

export interface SpaghettiItemProps {
  items: HomeFeaturesProps;
}

export default function SpaghettiItem({ items }: SpaghettiItemProps) {
  const { name, image, price, detail } = items;
  return (
    <div className="spaghetti_item">
      <div className="spaghetti_block">
        <div className="spaghetti_aside">
          <img src={image} alt="" />
          <div className="spaghetti_icon">
            <BsCart3 />
          </div>
        </div>
        <div className="spaghetti_content">
          <header>
            <div className="newDist_top">
              <div className="spaghetti_name">
                <span>{name}</span>
              </div>
              <div className="spaghetti_detail">{detail}</div>
            </div>
          </header>
          <footer>
            <div className="spaghetti_bottom">
              <div className="spaghetti_price">
                <span>Giá chỉ từ</span>
                <span>{formatPrice(price)}</span>
              </div>
              <div className="spaghetti_btn">
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
