import * as React from 'react';
// import Silder from './component/sildes';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LoginFeatures from '../auth/login';
import CheckOutFeatures from './page/CheckOut';
import InformationFearutes from './page/infomation';
import OrderFeatues from './page/order';
import PayloadFeatures from './page/payload';
// import HomeFeaturessss from './page/homeFeaturers';
// import { HomeFeaturesProps } from './page/interface';
export interface IAppProps {
  //   HomeFeaturessss: HomeFeaturesProps;
}

export default function App(props: any) {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<HomeMovie />} /> */}
        <Route path="/*" element={<CheckOutFeatures />} />
        <Route path="OrderForm" element={<OrderFeatues />} />
        <Route path="Login" element={<LoginFeatures />} />
        <Route path="Thong-tin" element={<InformationFearutes />} />
        <Route path="Thanh-toan" element={<PayloadFeatures />} />
        {/* <Route path="/lll" element={<MovieFeatures />} /> */}
        {/* <Route path="/phim/:animeId" element={<Description />} />
        <Route path="/p/:watchId" element={<WatchTv animate={true} />} /> */}
        {/* <Route path="new" element={<AnimeMovie />} /> */}
        {/* <Route element={<CinermerMovie />} /> */}
      </Routes>
    </div>
  );
}
