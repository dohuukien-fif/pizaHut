import * as React from 'react';

import { SaladFeaturesProps } from './../../../page/interface';
import './styles.scss';
import { AiOutlineArrowRight, AiOutlineHeatMap, AiFillStar } from 'react-icons/ai';
import { BsCart3 } from 'react-icons/bs';
import { formatPrice } from '../../../../../utils';

export interface PizzaNewItemProps {
  items: SaladFeaturesProps;
  handleIds: (newIds: any) => void;
}

export default function PizzaNewItem({ items, handleIds }: PizzaNewItemProps) {
  const { name, image, price, detail, selling, unique } = items;
  const hanndleIdNew = (newIds: number) => {
    if (handleIds) handleIds(newIds);
  };
  return (
    <div className="salad_item" onClick={() => handleIds(items.orderId)}>
      <div className="salad_block">
        <div className="salad_aside">
          <img src={image} alt="" />
          {(selling !== '' && unique !== '' && (
            <div className="rippon">
              <div className="salad_rippon">
                {/* <div className="ribbon_content">
              <span></span>
            </div> */}
                <AiFillStar />
              </div>
              <div className="unique_rippon">
                {/* <div className="ribbon_content">
              <span></span>
            </div> */}
                <AiOutlineHeatMap />
              </div>
            </div>
          )) ||
            (unique !== '' && (
              <div className="rippon">
                <div className="unique_rippon">
                  {/* <div className="ribbon_content">
              <span></span>
            </div> */}
                  <AiOutlineHeatMap />
                </div>
              </div>
            )) ||
            (selling !== '' && (
              <div className="rippon">
                <div className="salad_rippon">
                  {/* <div className="ribbon_content">
              <span></span>
            </div> */}
                  <AiFillStar />
                </div>
              </div>
            ))}
        </div>
        <div className="salad_content">
          <header>
            <div className="salad_top">
              <div className="salad_name">
                <span>{name}</span>
              </div>
              <div className="salad_detail">{detail}</div>
            </div>
          </header>
          <footer>
            <div className="salad_bottom">
              <div className="salad_price">
                <span>Gi?? ch??? t???</span>
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
