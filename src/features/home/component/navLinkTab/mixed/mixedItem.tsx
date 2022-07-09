import * as React from 'react';

import './styles.scss';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsCart3 } from 'react-icons/bs';
import { formatPrice } from '../../../../../utils';
import { HomeFeaturesProps } from '../../../page/interface';
export interface MixedItemProps {
  items: HomeFeaturesProps;
  handleIds: any;
}

export default function MixedItem({ items, handleIds }: MixedItemProps) {
  const { name, image, price, detail } = items;
  const hanndleIdNew = (newIds: number) => {
    if (handleIds) handleIds(newIds);
  };
  return (
    <div className="mixed_item" onClick={() => hanndleIdNew(items.orderId)}>
      <div className="mixed_block">
        <div className="mixed_aside">
          <img src={image} alt="" />
        </div>
        <div className="mixed_content">
          <header>
            <div className="mixed_top">
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
