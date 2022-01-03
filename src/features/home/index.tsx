import * as React from 'react';
// import Silder from './component/sildes';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomeFeaturessss from './page/homeFeaturers';
import { HomeFeaturesProps } from './page/homeFeaturers';
export interface IAppProps {
  HomeFeaturessss: HomeFeaturesProps;
}

export default function App(props: any) {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<HomeMovie />} /> */}
        <Route path="/*" element={<HomeFeaturessss />} />
        {/* <Route path="/lll" element={<MovieFeatures />} /> */}
        {/* <Route path="/phim/:animeId" element={<Description />} />
        <Route path="/p/:watchId" element={<WatchTv animate={true} />} /> */}
        {/* <Route path="new" element={<AnimeMovie />} /> */}
        {/* <Route element={<CinermerMovie />} /> */}
      </Routes>
    </div>
  );
}
