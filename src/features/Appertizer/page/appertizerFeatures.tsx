import React, { useState, useEffect } from 'react';
import './styles.scss';
// import { Link } from 'react-router-dom';

import { Link } from 'react-scroll';
import Silder from '../../../component/sildes';
import PizzaNewList from '../component/pizzaList/pizzaNew';

import { dataLisst } from './../../../component/hooks/index';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import LoadingFeatures from '../../../component/loadingFeatures';
import { AiOutlineClose } from 'react-icons/ai';
import ProductApi from './../../../api/productApi';
import Information from '../../pizza/component/overlay/information';
import Thumbnail from '../component/overlay/thumbnail';
import LoadingListss from './../../../component/loadingFeatures/loadingList/index';
export default function AppertizerFeatures(props: any) {
  const [DataPiza, setDataPiza] = useState<any>([]);
  const [isScroll, setisScroll] = useState<boolean>(false);
  const [setActiveScroll, setsetActiveScroll] = useState<string>('');
  const [isAccountion, setisAccountion] = useState<boolean>(false);
  const [detailProduct, setdetailProduct] = useState<any>({});
  const [isoverlay, setisoverlay] = useState<boolean>(false);
  const [setPrice, setsetPrice] = useState<any>({
    priceSize: 0,
    priceMore: 0,
  });
  const [Loading, setLoading] = useState<boolean>(false);
  const [Loadingappertizer, setLoadingappertizer] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      setLoadingappertizer(true);
      try {
        const res: any = await ProductApi.get();
        console.log('des', res);
        setDataPiza(res);
        setLoadingappertizer(false);
      } catch (err) {}
    })();
  }, []);
  // const handLink = (e: any) => {
  //   e.preventDefault();
  //   const target = e.target.getAttribute('href');
  //   const location = document.querySelector(target).offsetTop;
  //   console.log(location);

  //   window.scrollTo({
  //     left: 0,
  //     top: location - 150,
  //   });
  // };
  useEffect(() => {
    const ScrollNavBar = () => {
      const widthtabletsmall = screen.width > 767 && screen.width < 1024;
      const widthtabletbig = screen.width > 1023 && screen.width < 1366;
      if (screen.width > 1024 && window.scrollY > 440) {
        setsetActiveScroll('active_scroll');
        setisScroll(true);
      } else if (widthtabletbig && window.scrollY > 420) {
        setsetActiveScroll('active_scrollTabletBig');
        setisScroll(true);
      } else if (widthtabletsmall && window.scrollY > 470) {
        setsetActiveScroll('active_scrollTabletSmall');
        setisScroll(true);
      } else if (screen.width < 768 && window.scrollY > 300) {
        setsetActiveScroll('active_scrollmobile');
        setisScroll(true);
      } else {
        setisScroll(false);
      }
    };
    window.addEventListener('scroll', ScrollNavBar);
    return () => {
      window.removeEventListener('scroll', ScrollNavBar);
    };
  }, [window.scrollY]);
  console.log(window.scroll);

  useEffect(() => {
    if (window.innerWidth > 1204) {
      setisAccountion(true);
    } else {
      setisAccountion(false);
    }
  }, [window.innerWidth]);
  function setIdPizza(newId: number): any {
    setLoading(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        setdetailProduct(DataPiza.find((item: any, index: number) => item.id === newId));
        setisoverlay(true);
        setLoading(false);
        resolve(true);
      }, 2000);
    });
  }
  const handleSubmitDispachToCart = (newValue: any, values: string) => {
    console.log(
      'product',
      detailProduct,
      'infor',
      newValue,
      'note',
      values,
      'total',
      detailProduct.price + (setPrice.priceSize + setPrice.priceMore),
      'quantity',
      1
    );
  };
  return (
    <div className="appertizer">
      <Silder />
      <div className="appertizer_container">
        <div className="appertizer_block">
          <div className="appertizer_new" id="section1">
            <div className="new">
              <div className="new_title">
                <span>Khai vị</span>
              </div>
              {Loadingappertizer ? (
                <LoadingListss />
              ) : (
                <PizzaNewList data={DataPiza} setIdPizza={setIdPizza} />
              )}
            </div>
          </div>
        </div>
      </div>
      {Loading ? (
        <LoadingFeatures />
      ) : (
        <div className={isoverlay ? 'overlay activesOvelayappertizer' : 'overlay'}>
          <div className="overlay_wrapper">
            {/* <h1 onClick={() => setisoverlay(false)}> Xoa</h1> */}
            <div className="overlay_closes">
              <AiOutlineClose onClick={() => setisoverlay(false)} />
            </div>
            <div className="overlay_block">
              <div className="overlay_thumbanil">
                <Thumbnail detail={detailProduct} setPrice={setPrice} />
              </div>
              <div className="overlay_information">
                <Information
                  onSubmits={handleSubmitDispachToCart}
                  detail={detailProduct}
                  setsetPrice={setsetPrice}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
