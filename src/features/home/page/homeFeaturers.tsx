import React, { useState } from 'react';
import BakedNoodlesList from '../component/pizaList/BakedNoodlesList';
import NewDishLisst from '../component/pizaList/newDishList';
import Silder from '../component/sildes';
import SildesNew from '../component/sildes/slidesNew';
import './styles.scss';
import { dataLisst } from './../component/hooks/index';
import PizaList from '../component/pizaList/Piza';
import AppetizerList from '../component/pizaList/AppetizerList';
import SpaghettiList from '../component/pizaList/SpaghettiList';
import SaladList from '../component/pizaList/SaladList';
import DrinkList from '../component/pizaList/drinkList';

export default function HomeFeatures(props: any) {
  const [DataPiza, setDataPiza] = useState<any>(dataLisst);

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
            <div className=" piza">
              <PizaList data={DataPiza} />
            </div>
            {/* khai vi */}
            <div className=" Appetizer">
              <AppetizerList data={DataPiza} />
            </div>
            {/* mỳ ý */}
            <div className=" Spaghetti">
              <SpaghettiList data={DataPiza} />
            </div>
            {/* salad */}
            <div className="Salad">
              <SaladList data={DataPiza} />
            </div>
            {/* nuoc uong */}
            <div className="drink">
              <DrinkList data={DataPiza} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
