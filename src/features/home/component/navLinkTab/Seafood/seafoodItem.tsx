import * as React from 'react';
import BakedNoodlesLisstProps from './../../pizaList/BakedNoodlesList';

import './styles.scss';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsCart3 } from 'react-icons/bs';
import { formatPrice } from '../../../../../utils';
import { HomeFeaturesProps } from '../../../page/interface';

export interface SeafoodItemProps {
  items: HomeFeaturesProps;
}

export default function SeafoodItem({ items }: SeafoodItemProps) {
  const { name, image, price, detail } = items;
  return (
    <div className="seafood_item">
      <div className="seafood_block">
        <div className="seafood_aside">
          <img src={image} alt="" />
          <div className="seafood_icon">
            <BsCart3 />
          </div>
        </div>
        <div className="seafood_content">
          <header>
            <div className="newDist_top">
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
