import * as React from 'react';

import './styles.scss';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsCart3 } from 'react-icons/bs';
import { formatPrice } from '../../../../../utils';
import { HomeFeaturesProps } from '../../../page/interface';
export interface MixedItemProps {
  items: HomeFeaturesProps;
}

export default function MixedItem({ items }: MixedItemProps) {
  const { name, image, price, detail } = items;
  return (
    <div className="mixed_item">
      <div className="mixed_block">
        <div className="mixed_aside">
          <img src={image} alt="" />
          <div className="mixed_icon">
            <BsCart3 />
          </div>
        </div>
        <div className="mixed_content">
          <header>
            <div className="newDist_top">
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
