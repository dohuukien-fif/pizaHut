import * as React from 'react';
// import Silder from './component/sildes';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AccountFeature from './page/AccountFeatures';
import DetailOrder from './page/detailOrder';

export default function App(props: any) {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<HomeMovie />} /> */}
        <Route path="/*" element={<AccountFeature />} />
        <Route path="chi-tiet-don-hang" element={<DetailOrder />} />
        {/* <Route path="/*" element={<AccountFeature />} />
        <Route path="/*" element={<AccountFeature />} /> */}
        {/* <Route path="/lll" element={<MovieFeatures />} /> */}
        {/* <Route path="/phim/:animeId" element={<Description />} />
        <Route path="/p/:watchId" element={<WatchTv animate={true} />} /> */}
        {/* <Route path="new" element={<AnimeMovie />} /> */}
        {/* <Route element={<CinermerMovie />} /> */}
      </Routes>
    </div>
  );
}
