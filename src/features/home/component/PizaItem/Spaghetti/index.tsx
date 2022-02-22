import * as React from 'react';
import BakedNoodlesLisstProps from './../../pizaList/BakedNoodlesList';
import { HomeFeaturesProps } from './../../../page/interface';
import './styles.scss';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { GiChiliPepper } from 'react-icons/gi';
import { BsSuitClubFill } from 'react-icons/bs';
import { formatPrice } from '../../../../../utils';

export interface SpaghettiItemProps {
  items: HomeFeaturesProps;
  handleIds: any;
}

export default function SpaghettiItem({ items, handleIds }: SpaghettiItemProps) {
  const { name, image, price, detail, selling, vegetable, chill } = items;

  const hanndleIdNew = (newIds: number) => {
    if (handleIds) handleIds(newIds);
  };
  return (
    <div className="spaghetti_item" onClick={() => hanndleIdNew(items.id)}>
      <div className="spaghetti_block">
        <div className="spaghetti_aside">
          <img src={image} alt="" />
          {(chill !== '' && vegetable !== '' && (
            <div className="rippon">
              <div className="chill_ribbon">
                {/* <div className="ribbon_content">
                <span></span>
              </div> */}
                <GiChiliPepper />
              </div>
              <div className="vegetable_ribbon">
                {/* <div className="ribbon_content">
                <span></span>
              </div> */}
                <BsSuitClubFill />
              </div>
            </div>
          )) ||
            (chill !== '' && (
              <div className="rippon">
                <div className="chill_ribbon">
                  {/* <div className="ribbon_content">
              <span></span>
            </div> */}
                  <GiChiliPepper />
                </div>
              </div>
            )) ||
            (vegetable !== '' && (
              <div className="rippon">
                <div className="vegetable_ribbon">
                  {/* <div className="ribbon_content">
              <span></span>
            </div> */}
                  <BsSuitClubFill />
                </div>
              </div>
            ))}
        </div>
        <div className="spaghetti_content">
          <header>
            <div className="spaghetti_top">
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
