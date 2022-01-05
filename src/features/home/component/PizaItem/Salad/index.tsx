import * as React from 'react';
import BakedNoodlesLisstProps from './../../pizaList/BakedNoodlesList';
import { HomeFeaturesProps } from './../../../page/interface';
import './styles.scss';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsCart3 } from 'react-icons/bs';
import { formatPrice } from '../../../../../utils';

export interface SaladItemProps {
  items: HomeFeaturesProps;
}

export default function SaladItem({ items }: SaladItemProps) {
  const { name, image, price, detail } = items;
  return (
    <div className="salad_item">
      <div className="salad_block">
        <div className="salad_aside">
          <img src={image} alt="" />
          <div className="salad_icon">
            <BsCart3 />
          </div>
        </div>
        <div className="salad_content">
          <header>
            <div className="newDist_top">
              <div className="salad_name">
                <span>{name}</span>
              </div>
              <div className="salad_detail">{detail}</div>
            </div>
          </header>
          <footer>
            <div className="salad_bottom">
              <div className="salad_price">
                <span>Giá chỉ từ</span>
                <span>{formatPrice(price)}</span>
              </div>
              <div className="salad_btn">
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
