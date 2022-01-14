import * as React from 'react';
import BakedNoodlesLisstProps from './../../pizaList/BakedNoodlesList';
import { HomeFeaturesProps } from './../../../page/interface';
import './styles.scss';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsCart3 } from 'react-icons/bs';
import { formatPrice } from '../../../../../utils';

export interface ApptizerItemProps {
  items: HomeFeaturesProps;
}

export default function ApptizerItem({ items }: ApptizerItemProps) {
  const { name, image, price, detail } = items;
  return (
    <div className="appetizer_item">
      <div className="appetizer_block">
        <div className="appetizer_aside">
          <img src={image} alt="" />
        </div>
        <div className="appetizer_content">
          <header>
            <div className="appetizer_top">
              <div className="appetizer_name">
                <span>{name}</span>
              </div>
              <div className="appetizer_detail">{detail}</div>
            </div>
          </header>
          <footer>
            <div className="appetizer_bottom">
              <div className="appetizer_price">
                <span>Giá chỉ từ</span>
                <span>{formatPrice(price)}</span>
              </div>
              <div className="appetizer_btn">
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
