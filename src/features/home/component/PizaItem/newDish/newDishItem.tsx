import * as React from 'react';
import BakedNoodlesLisstProps from './../../pizaList/BakedNoodlesList';
import { HomeFeaturesProps } from './../../../page/homeFeaturers';
import './styles.scss';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsCart3 } from 'react-icons/bs';
import { formatPrice } from '../../../../../utils';
export interface BakedNoodlesItemProps {
  items: HomeFeaturesProps;
}

export default function BakedNoodlesItem({ items }: BakedNoodlesItemProps) {
  const { name, image, price, detail } = items;
  return (
    <div className="BakedNoodles_item">
      <div className="BakedNoodles_block">
        <div className="BakedNoodles_aside">
          <img src={image} alt="" />
          <div className="BakedNoodles_icon">
            <BsCart3 />
          </div>
        </div>
        <div className="BakedNoodles_content">
          <header>
            <div className="newDist_top">
              <div className="BakedNoodles_name">
                <span>{name}</span>
              </div>
              <div className="BakedNoodles_detail">{detail}</div>
            </div>
          </header>
          <footer>
            <div className="BakedNoodles_bottom">
              <div className="BakedNoodles_price">
                <span>Giá chỉ từ</span>
                <span>{formatPrice(price)}</span>
              </div>
              <div className="BakedNoodles_btn">
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
