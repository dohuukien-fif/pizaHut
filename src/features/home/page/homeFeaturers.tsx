import axios from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AiOutlineClose, AiOutlineLike, AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
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
  const Errrr = React.useRef<any>();
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
  const [Error, setError] = React.useState<string>('');
  const userInfor = useSelector((state: any) => state.user.current);
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

  async function setIdPizza(newId: number) {
    console.log('newId', newId);
    setLoading(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        const res = ProductApi.getById(newId)
          .then((data: any) => setdetailProduct(data))
          .catch((error) => error);

        console.log(res);

        setisoverlay(true);
        setLoading(false);
        resolve(true);
      }, 2000);
    });
  }
  const checkCategory = ['piza', 'newDish', 'mixed', 'Seafood', 'Stuffing', 'Traditional'];
  const handleSubmitDispachToCart = (newValue: any, values: string) => {
    if (Object.keys(userInfor).length === 0) {
      return setError('Vui lòng  đăng nhập !');
    }

    console.log('newValue', newValue);
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
          id: detailProduct.orderId,
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
        setdetailProduct({});
      }
    };
    window.addEventListener('click', hanndleWindowClose);

    return () => window.removeEventListener('click', hanndleWindowClose);
  }, []);
  React.useEffect(() => {
    if (Error !== '') {
      Errrr.current = setTimeout(() => {
        setError('');
      }, 5000);
    }
    return () => clearTimeout(Errrr.current);
  }, [Error]);

  const handleClickError = () => {
    setError('');
  };
  const [like, setLikes] = useState<string>('');
  const handleClickLike = async () => {
    console.log(detailProduct.orderId);

    await axios.put(`http://localhost:5000/api/products/${detailProduct.orderId}/like`, {
      userId: userInfor._id,
    });

    alert('cảm ơn bạn đã đánh giá');
  };

  console.log(detailProduct);
  console.log(detailProduct?.like?.includes(userInfor?._id));

  console.log(detailProduct?.like);

  const checkLike = like === '' ? detailProduct?.like?.includes(userInfor?._id) : like;

  const handleClickLikes = (newValue: string) => {
    handleClickLike();
    if (like === newValue) {
      setLikes('unlike');
    } else {
      setLikes(newValue);
    }
  };

  const handleCloseModalPizza = () => {
    setdetailProduct({});
    setisoverlay(false);
  };
  return (
    <div className="container">
      <Silder />
      {Error !== '' && (
        <div className={Error !== '' ? 'cart_Error active_error' : 'cart_Error'}>
          <AiOutlineClose onClick={handleClickError} />
          <p>{Error}</p>
        </div>
      )}
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

            <div className="overlay__like">
              <button onClick={() => handleClickLikes(userInfor._id)}>
                <AiOutlineLike
                  className={
                    checkLike === true || checkLike === userInfor._id
                      ? 'icon__like active__like'
                      : 'icon__like'
                  }
                />
              </button>
            </div>
            <div className="overlay_closes">
              {LoadingOverlay ? (
                <div className="loading_featurees">
                  <AiOutlineLoading3Quarters />
                </div>
              ) : (
                <>
                  <AiOutlineClose onClick={handleCloseModalPizza} />
                </>
              )}
            </div>
            <div className="overlay_block">
              {' '}
              <div className="overlay_thumbanil">
                {!detailProduct.image ? (
                  <LoadingFeatures />
                ) : (
                  <Thumbnail
                    detail={detailProduct}
                    setPrice={setPrice}
                    setpriceMore={setpriceMore}
                  />
                )}
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
