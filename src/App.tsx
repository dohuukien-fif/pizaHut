import { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import Headers from './component/header/index';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import HomePiza from './features/home/index';
export interface AppProps {
  id: number;
  name: string;
}

function App() {
  // const [count, setCount] = useState<number>(0);
  // function call(n: number) {
  //   return n;
  // }
  // console.log(call(10));
  // const newArray: AppProps[] = [
  //   {
  //     id: 1,
  //     name: 'kien',
  //   },
  //   {
  //     id: 2,
  //     name: 'cong',
  //   },
  // ];

  return (
    <>
      <Headers />{' '}
      <Routes>
        <Route path="trang-chu/*" element={<HomePiza />} />
        <Route path="/" element={<Navigate replace to="Trang-chu" />} />

        {/* <Route path="/" element={<Navigate replace to="Trang-chu" />} />
        <Route path="/phim-bo/*" element={<SerieMovie />} />
        <Route path="/phim-le/*" element={<OldMovie />} />
        <Route path="/phim-hoat-hinh/*" element={<AnimeMovie />} />
        <Route path="/phim-chieu-rap/*" element={<CinermerMovie />} /> */}

        {/* <Route path="new" element={<AnimeMovie />} /> */}
        {/* <Route element={<CinermerMovie />} /> */}
      </Routes>
    </>
  );
}

export default App;
