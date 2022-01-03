import React, { useState } from 'react';
import BakedNoodlesList from '../component/pizaList/BakedNoodlesList';
import NewDishLisst from '../component/pizaList/newDishList';
import Silder from '../component/sildes';
import SildesNew from '../component/sildes/slidesNew';
import './styles.scss';
import { dataLisst } from './../component/hooks/index';
export interface HomeFeaturesProps {
  categories: string;
  id: number;
  image: string;
  name: string;
  price: number;
  detail: string;
}

export default function HomeFeatures(props: any) {
  const [DataPiza, setDataPiza] = useState(dataLisst);

  console.log('data', DataPiza);
  return (
    <div className="container">
      <Silder />
      <div className="container_fuiter">
        <div className="container_aside">
          <div className="discount">
            <SildesNew />
          </div>
        </div>

        <div className="container_block">
          {/* mon mới */}
          <section className="new">
            {/* món mới */}
            <div className="newDish">
              <div className="newDish_title">
                <span>Món Mới</span>
              </div>
              <NewDishLisst data={DataPiza} />
            </div>
            {/* Nui bỏ lò */}
            <div className=" BakedNoodles">
              <div className="BakedNoodles_title">
                <span>Nui Bỏ Lò</span>
              </div>
              <BakedNoodlesList data={DataPiza} />
            </div>
          </section>

          {/* Thực đơn  */}

          <section className="menu">
            <div className="menu_title"></div>
            {/* piza */}
            <div className=" piza"></div>
            {/* khai vi */}
            <div className=" Appetizer"></div>
            {/* mỳ ý */}
            <div className=" Spaghetti"></div>
            {/* salad */}
            <div className="Salad"></div>
            {/* nuoc uong */}
            <div className="drink"></div>
          </section>
        </div>
      </div>
    </div>
  );
}
