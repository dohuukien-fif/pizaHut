import * as React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CartFeature from './page/cartFeatures';
import { cartFeaturesProps } from './page/interface';
export interface IndexProps {
  CartFeature: cartFeaturesProps;
}

export default function Index(props: any) {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<HomeMovie />} /> */}
        <Route path="/*" element={<CartFeature />} />
        {/* <Route path="/lll" element={<MovieFeatures />} /> */}
        {/* <Route path="/phim/:animeId" element={<Description />} />
        <Route path="/p/:watchId" element={<WatchTv animate={true} />} /> */}
        {/* <Route path="new" element={<AnimeMovie />} /> */}
        {/* <Route element={<CinermerMovie />} /> */}
      </Routes>
    </div>
  );
}
