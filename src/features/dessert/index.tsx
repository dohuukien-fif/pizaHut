import * as React from 'react';
// import Silder from './component/sildes';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import PizzaFeature from './page/dessertFeatures';
import { DessertFeaturesProps } from './page/interface';
export interface IAppProps {
  PizzaFeature: DessertFeaturesProps;
}

export default function App(props: any) {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<HomeMovie />} /> */}
        <Route path="/*" element={<PizzaFeature />} />
        {/* <Route path="/lll" element={<MovieFeatures />} /> */}
        {/* <Route path="/phim/:animeId" element={<Description />} />
        <Route path="/p/:watchId" element={<WatchTv animate={true} />} /> */}
        {/* <Route path="new" element={<AnimeMovie />} /> */}
        {/* <Route element={<CinermerMovie />} /> */}
      </Routes>
    </div>
  );
}
