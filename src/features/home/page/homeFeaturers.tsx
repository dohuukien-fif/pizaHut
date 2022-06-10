import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineClose, AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../app/cartRedux';
import LoadingFeatures from '../../../component/loadingFeatures';
import Silder from '../../../component/sildes';
import SildesNew from '../../../component/sildes/slidesNew';
import NavLinkTab from '../component/navLinkTab';
import MixedList from '../component/navLinkTab/mixed';
import SeafoodList from '../component/navLinkTab/Seafood/seafood';
import StuffingList from '../component/navLinkTab/stuffing';
import TraditionalList from '../component/navLinkTab/traditional';
import Information from '../component/overlay/information';
import Thumbnail from '../component/overlay/thumbnail';
import AppetizerList from '../component/pizaList/AppetizerList';
import BakedNoodlesList from '../component/pizaList/BakedNoodlesList';
import DrinkList from '../component/pizaList/drinkList';
import NewDishLisst from '../component/pizaList/newDishList';
import PizaList from '../component/pizaList/Piza';
import SaladList from '../component/pizaList/SaladList';
import SpaghettiList from '../component/pizaList/SpaghettiList';
import ProductApi from './../../../api/productApi';
import LoadingListss from './../../../component/loadingFeatures/loadingList/index';
// import Silder from '../component/sildes';
// import SildesNew from '../component/sildes/slidesNew';
import './styles.scss';
export default function HomeFeatures(props: any) {
  const dispatch = useDispatch();
  const [DataPiza, setDataPiza] = useState<any>([]);
  const [activeTab, setactiveTab] = useState('1');
  const [isScroll, setisScroll] = useState<boolean>(false);
  const [setActiveScroll, setsetActiveScroll] = useState<string>('');
  const [isAccountion, setisAccountion] = useState<boolean>(false);
  const [detailProduct, setdetailProduct] = useState<any>({});
  const [isoverlay, setisoverlay] = useState<boolean>(false);
  const [setPrice, setsetPrice] = useState<any>({
    sizePrice: 0,
    morePrice: 0,
  });

  console.log('setPrice', setPrice);
  const [setpriceMore, setsetpriceMore] = useState<any>(0);
  const [Loading, setLoading] = useState<boolean>(false);

  const [LoadingOverlay, setLoadingOverlay] = useState<boolean>(false);
  const [LoadingList, setLoadingList] = useState<boolean>(true);
  console.log('data', DataPiza);

  const closeRef = useRef(null);
  useEffect(() => {
    setLoadingList(true);
    (async () => {
      try {
        const res: any = await ProductApi.get();
        console.log('des', res.data);
        setDataPiza(res.data);
        setLoadingList(false);
      } catch (err) {}
    })();
  }, []);

  function setIdPizza(newId: number): any {
    console.log(newId);
    setLoading(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        setdetailProduct(DataPiza.find((item: any, index: number) => item.orderId === newId));
        setisoverlay(true);
        setLoading(false);
        resolve(true);
      }, 2000);
    });
  }
  const checkCategory = ['piza', 'newDish'];
  const handleSubmitDispachToCart = (newValue: any, values: string) => {
    const checkCtegory = checkCategory.includes(detailProduct.category)
      ? {
          size: { name: newValue.sizeName, price: newValue.sizePrice },
          soles: [newValue.soles],
          more: { name: newValue.moreName, price: newValue.morePrice },
        }
      : {
          size: {},
          soles: [],
          more: {},
        };
    console.log('checkCtegory', checkCtegory);

    setLoadingOverlay(true);
    return new Promise<boolean>((resolve) => {
      setTimeout(() => {
        const action = addProduct({
          id: detailProduct.id,
          product: {
            ...detailProduct,
            ...checkCtegory,
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
    <div className="container">
      <Silder />
      <div className="container_fuiter">
        <div className="container_aside">
          <div className="discount">
            <SildesNew setIdPizza={setIdPizza} />
          </div>
        </div>

        <div className="container_block">
          {/* mon mới */}
          <section className="new">
            {/* món mới */}
            <div className="newDish">
              <div className="newDish_title">
                <span>Món Mới</span>
              </div>
              {LoadingList ? (
                <LoadingListss />
              ) : (
                <NewDishLisst data={DataPiza} setIdPizza={setIdPizza} />
              )}
            </div>
            {/* Nui bỏ lò */}
            <div className=" BakedNoodles">
              <div className="BakedNoodles_title">
                <span>Nui Bỏ Lò</span>
              </div>
              {LoadingList ? (
                <LoadingListss />
              ) : (
                <BakedNoodlesList data={DataPiza} setIdPizza={setIdPizza} />
              )}
            </div>
          </section>

          {/* Thực đơn  */}

          <section className="menu">
            <div className="menu_title">
              <span>Thực Đơn</span>
            </div>
            {/* piza */}
            <div className=" piza">
              <div className="piza_tab">
                <div className="piza_title">
                  <span>Pizza</span>
                  <NavLinkTab setactiveTab={setactiveTab} activeTab={activeTab} />
                </div>
              </div>

              {activeTab === '1' && (
                <PizaList data={DataPiza} activeTab={activeTab} setIdPizza={setIdPizza} />
              )}
              {activeTab === '2' && (
                <SeafoodList data={DataPiza} activeTab={activeTab} setIdPizza={setIdPizza} />
              )}
              {activeTab === '3' && <MixedList data={DataPiza} setIdPizza={setIdPizza} />}
              {activeTab === '4' && (
                <StuffingList data={DataPiza} activeTab={activeTab} setIdPizza={setIdPizza} />
              )}
              {activeTab === '5' && (
                <TraditionalList data={DataPiza} activeTab={activeTab} setIdPizza={setIdPizza} />
              )}
            </div>
            {/* khai vi */}
            <div className=" Appetizer">
              <div className="Appetizer_title">
                <span>Khai Vị</span>
              </div>
              {LoadingList ? (
                <LoadingListss />
              ) : (
                <AppetizerList data={DataPiza} setIdPizza={setIdPizza} />
              )}
            </div>
            {/* mỳ ý */}
            <div className=" Spaghetti">
              <div className="Spaghetti_title">
                <span>Mỳ Ý</span>
              </div>
              {LoadingList ? (
                <LoadingListss />
              ) : (
                <SpaghettiList data={DataPiza} setIdPizza={setIdPizza} />
              )}
            </div>
            {/* salad */}
            <div className="salad">
              <div className="salad_title">
                <span>Salad</span>
              </div>
              {LoadingList ? (
                <LoadingListss />
              ) : (
                <SaladList data={DataPiza} setIdPizza={setIdPizza} />
              )}
            </div>
            {/* nuoc uong */}

            <div className="drink">
              <div className="drink_title">
                <span>Thức Uống</span>
              </div>
              {LoadingList ? (
                <LoadingListss />
              ) : (
                <DrinkList data={DataPiza} setIdPizza={setIdPizza} />
              )}
            </div>
          </section>
        </div>
      </div>
      {/* <Footer /> */}
      {Loading ? (
        <LoadingFeatures />
      ) : (
        <div className={isoverlay ? 'overlay activeOvelay' : 'overlay'} ref={closeRef}>
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
              {' '}
              <div className="overlay_thumbanil">
                <Thumbnail detail={detailProduct} setPrice={setPrice} setpriceMore={setpriceMore} />
              </div>
              <div className="overlay_information">
                <Information
                  onSubmits={handleSubmitDispachToCart}
                  // setsetpriceMore={setsetpriceMore}
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
