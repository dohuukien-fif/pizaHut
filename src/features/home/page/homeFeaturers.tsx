import React, { useState } from 'react';
import BakedNoodlesList from '../component/pizaList/BakedNoodlesList';
import NewDishLisst from '../component/pizaList/newDishList';
// import Silder from '../component/sildes';
// import SildesNew from '../component/sildes/slidesNew';
import './styles.scss';
import { dataLisst } from './../component/hooks/index';
import PizaList from '../component/pizaList/Piza';
import AppetizerList from '../component/pizaList/AppetizerList';
import SpaghettiList from '../component/pizaList/SpaghettiList';
import SaladList from '../component/pizaList/SaladList';
import DrinkList from '../component/pizaList/drinkList';
import NavLinkTab from '../component/navLinkTab';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import TraditionalList from '../component/navLinkTab/traditional';
import MixedList from '../component/navLinkTab/mixed';
import StuffingList from '../component/navLinkTab/stuffing';
import SeafoodList from '../component/navLinkTab/Seafood/seafood';
import Footer from '../../../component/footer';
import Silder from '../../../component/sildes';
import SildesNew from '../../../component/sildes/slidesNew';

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
              {dataLisst.length === 0 ? <h1>Loading...</h1> : <NewDishLisst data={DataPiza} />}
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
            <div className="menu_title">
              <span>Thực Đơn</span>
            </div>
            {/* piza */}
            <div className=" piza">
              <div className="piza_tab">
                <div className="piza_title">
                  <span>Pizza</span>
                  <NavLinkTab />
                </div>
              </div>
              <Routes>
                <Route path="/*" element={<PizaList data={DataPiza} />} />

                <Route path="Hai-san" element={<SeafoodList data={DataPiza} />} />
                <Route path="/thap-cam" element={<MixedList data={DataPiza} />} />
                <Route path="/truyen-thong" element={<StuffingList data={DataPiza} />} />
                <Route path="/nhan-nhoi" element={<TraditionalList data={DataPiza} />} />

                {/* <Route
                    path="phim-bos"
                    element={<Coming comingMovie={MovieLisst} />}
                  />
                  <Route
                    path="phim-le"
                    element={<Old OldMovie={MovieLisst} />}
                  /> */}

                {/* <Route path="new" element={<AnimeMovie />} /> */}
                {/* <Route element={<CinermerMovie />} /> */}
              </Routes>
            </div>
            {/* khai vi */}
            <div className=" Appetizer">
              <div className="Appetizer_title">
                <span>Khai Vị</span>
              </div>
              <AppetizerList data={DataPiza} />
            </div>
            {/* mỳ ý */}
            <div className=" Spaghetti">
              <div className="Spaghetti_title">
                <span>Mỳ Ý</span>
              </div>
              <SpaghettiList data={DataPiza} />
            </div>
            {/* salad */}
            <div className="salad">
              <div className="salad_title">
                <span>Salad</span>
              </div>
              <SaladList data={DataPiza} />
            </div>
            {/* nuoc uong */}

            <div className="drink">
              <div className="drink_title">
                <span>Thức Uống</span>
              </div>
              <DrinkList data={DataPiza} />
            </div>
          </section>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
