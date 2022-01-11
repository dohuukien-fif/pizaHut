import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import './App.scss';
import CartFeatures from './component/cart/index';
import Footer from './component/footer';
import Headers from './component/header/index';
import AppertizerFeatures from './features/Appertizer/index';
import DessertFeatures from './features/dessert/index';
import DrinkFeatures from './features/drink/index';
import HomePiza from './features/home/index';
import NoodleFeatures from './features/noodles/index';
import PizzaFeatures from './features/pizza/index';
import SaladFeatures from './features/Salad/index';
import SpaghettiFeatures from './features/Spaghetti/index';
// export interface AppProps {
//   id: number;
//   name: string;
// }

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
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
    <div>
      <Headers />
      <Routes>
        <Route path="trang-chu/*" element={<HomePiza />} />
        <Route path="/" element={<Navigate replace to="Trang-chu" />} />
        <Route path="/pizza/*" element={<PizzaFeatures />} />
        <Route path="/khai-vi/*" element={<AppertizerFeatures />} />
        <Route path="/salad/*" element={<SaladFeatures />} />
        <Route path="/my-y/*" element={<SpaghettiFeatures />} />
        <Route path="/nui-bo-lo/*" element={<NoodleFeatures />} />
        <Route path="/nuoc-uong/*" element={<DrinkFeatures />} />
        <Route path="/trang-mieng/*" element={<DessertFeatures />} />
        <Route path="/cart/*" element={<CartFeatures />} />

        {/* <Route path="/" element={<Navigate replace to="Trang-chu" />} />
        <Route path="/phim-bo/*" element={<SerieMovie />} />
        <Route path="/phim-le/*" element={<OldMovie />} />
        <Route path="/phim-hoat-hinh/*" element={<AnimeMovie />} />
        <Route path="/phim-chieu-rap/*" element={<CinermerMovie />} /> */}

        {/* <Route path="new" element={<AnimeMovie />} /> */}
        {/* <Route element={<CinermerMovie />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
