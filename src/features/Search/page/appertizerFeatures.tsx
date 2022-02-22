import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineClose, AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../app/cartRedux';
import LoadingFeatures from '../../../component/loadingFeatures';
import Silder from '../../../component/sildes';
import Information from './../component/overlay/information';
import useSearchData from '../component/hooks/useSearchData';
import Thumbnail from '../component/overlay/thumbnail';
import PizzaNewList from '../component/pizzaList/pizzaNew';
import { dataLisst } from './../../../component/hooks/index';
import './styles.scss';

export default function SearchFeatures(props: any) {
  const params = location.search;
  console.log(params);
  const dispatch = useDispatch();
  const [isloading, setisloading] = useState(true);
  const [DataPiza, setDataPiza] = useState<any>(dataLisst);

  const [isScroll, setisScroll] = useState<boolean>(false);
  const [setActiveScroll, setsetActiveScroll] = useState<string>('');
  const [isAccountion, setisAccountion] = useState<boolean>(false);
  const [detailProduct, setdetailProduct] = useState<any>({});
  const [isoverlay, setisoverlay] = useState<boolean>(false);

  const [setPrice, setsetPrice] = useState<any>({
    priceSize: 0,
    priceMore: 0,
  });
  const [LoadingOverlay, setLoadingOverlay] = useState<boolean>(false);
  const [Loading, setLoading] = useState<boolean>(false);
  const closeRef = useRef(null);
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

  // const setdata = DataPiza.filter((items: any) =>
  //   items.categories?.toLowerCase().includes(params.replace('+', ' ')?.split('=')[1]?.toLowerCase())
  // );'
  console.log('object', params.replace('+', ' ')?.split('=')[1]);

  const { dataSearch, LoadingSearch } = useSearchData(params);
  console.log('data', dataSearch);

  console.log('sss');
  // console.log(dataSearch);
  // const callApi = (data: any) => {
  //   return new Promise<boolean>((resolve) => {
  //     setTimeout(() => {
  //       data.filter((items: any) =>
  //         items.categories
  //           ?.toLowerCase()
  //           .includes(params.replace('+', ' ')?.split('=')[1]?.toLowerCase())
  //       );

  //       setisloading(false);
  //       resolve(true);
  //     }, 2000);
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
    setLoadingOverlay(true);
    return new Promise<boolean>((resolve) => {
      setTimeout(() => {
        const action = addProduct({
          id: detailProduct.id,
          product: {
            ...detailProduct,
            size: { name: newValue.sizeName, price: newValue.sizePrice },
            soles: [newValue.soles],
            more: { name: newValue.moreName, price: newValue.morePrice },
          },
          note: values,
          quantity: 1,
        });

        dispatch(action);
        resolve(true);
        setisoverlay(false);
        setLoadingOverlay(false);
        setsetPrice({
          sizePrice: 0,
          morePrice: 0,
        });
      }, 2000);
    });
  };
  useEffect(() => {
    const hanndleWindowClose = (e: any) => {
      if (e.target === closeRef.current) {
        setisoverlay(false);
      }
    };
    window.addEventListener('click', hanndleWindowClose);

    return () => window.removeEventListener('click', hanndleWindowClose);
  }, []);
  return (
    <div className="appertizer">
      <Silder />{' '}
      {LoadingSearch ? (
        <LoadingFeatures />
      ) : (
        <>
          {' '}
          <div className="appertizer_container">
            <div className="appertizer_block">
              <div className="appertizer_new" id="section1">
                <div className="new">
                  <div className="new_title">
                    <span>{`Bạn đang muốn tìm: ${params.replace('+', ' ')?.split('=')[1]}`}</span>
                  </div>
                  <PizzaNewList data={dataSearch} setIdPizza={setIdPizza} />
                </div>
              </div>
            </div>
          </div>
          {Loading ? (
            <LoadingFeatures />
          ) : (
            <div
              ref={closeRef}
              className={isoverlay ? 'overlay activesOvelayappertizer' : 'overlay'}
            >
              <div className="overlay_wrapper">
                {/* <h1 onClick={() => setisoverlay(false)}> Xoa</h1> */}
                <div className="overlay_closes">
                  {LoadingOverlay ? (
                    <div className="loading_featurees">
                      <AiOutlineLoading3Quarters />
                    </div>
                  ) : (
                    <>
                      <AiOutlineClose onClick={() => setisoverlay(false)} />
                    </>
                  )}
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
        </>
      )}
    </div>
  );
}
