import * as React from 'react';
import Silder from '../component/sildes';
import './styles.scss';
export interface HomeFeaturesProps {}

export default function HomeFeatures(props: HomeFeaturesProps) {
  return (
    <div className="container">
      <Silder />
      <div className="container_fuiter">
        <div className="container_aside">
          <div className="discount"></div>
        </div>

        <div className="container_block">
          {/* mon mới */}
          <section className="new">
            {/* món mới */}
            <div className="newDish"></div>
            {/* Nui bỏ lò */}
            <div className=" BakedNoodles"></div>
          </section>

          {/* Thực đơn  */}

          <section className="menu">
             {/* piza */}
            <div className=" piza"></div>
            {/* khai vi */}
            <div className=" Appetizer"></div>
     {/* mỳ ý */}
            <div className=" Spaghetti"></div>
             {/* salad */}
             <div className="Salad">

             </div>
             {/* nuoc uong */}
             <div className="drink">

             </div>

          </section>
        </div>
      </div>
    </div>
  );
}
