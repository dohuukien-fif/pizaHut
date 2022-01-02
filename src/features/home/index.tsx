import * as React from 'react';
// import Silder from './component/sildes';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomeFeatures from './page/homeFeaturers';
export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<HomeMovie />} /> */}
        <Route path="/*" element={<HomeFeatures />} />
        {/* <Route path="/lll" element={<MovieFeatures />} /> */}
        {/* <Route path="/phim/:animeId" element={<Description />} />
        <Route path="/p/:watchId" element={<WatchTv animate={true} />} /> */}
        {/* <Route path="new" element={<AnimeMovie />} /> */}
        {/* <Route element={<CinermerMovie />} /> */}
      </Routes>
    </div>
  );
}
