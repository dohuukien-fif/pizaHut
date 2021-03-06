import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineClose, AiOutlineLike, AiOutlineLoading3Quarters } from 'react-icons/ai';
import LoadingFeatures from '../../../component/loadingFeatures';
import Silder from '../../../component/sildes';
import Information from './../component/overlay/information';
import Thumbnail from '../component/overlay/thumbnail';
import PizzaNewList from '../component/pizzaList/pizzaNew';
import ProductApi from './../../../api/productApi';
import { dataLisst } from './../../../component/hooks/index';
import './styles.scss';
import LoadingListss from './../../../component/loadingFeatures/loadingList/index';
import { addProduct } from '../../../app/cartRedux';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import SliderFeatures from '../../../component/sildes/sliderBanner';
export default function DessertFeatures(props: any) {
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

  const [Error, setError] = React.useState<string>('');
  const Errrr = React.useRef<any>();
  const userInfor = useSelector((state: any) => state.user.current);
  const [Loading, setLoading] = useState<boolean>(false);
  const [LoadingList, setLoadingList] = useState<boolean>(true);
  const [LoadingOverlay, setLoadingOverlay] = useState<boolean>(false);
  const dispatch = useDispatch();
  const closeRef = useRef(null);
  useEffect(() => {
    (async () => {
      setLoadingList(true);
      try {
        const res: any = await ProductApi.get();

        setDataPiza(res.data);
        setLoadingList(false);
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
  const handleSubmitDispachToCart = (newValue: any, values: string) => {
    if (Object.keys(userInfor).length === 0) {
      setError('vui    long   ????ng   nh???p');
      return;
    }
    setLoadingOverlay(true);
    return new Promise<boolean>((resolve) => {
      setTimeout(() => {
        const action = addProduct({
          id: detailProduct.orderId,
          product: {
            ...detailProduct,
            size: {},
            soles: [],
            more: {},
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

    await axios.put(
      `https://api-pizza-home.herokuapp.com/api/products/${detailProduct.orderId}/like`,
      {
        userId: userInfor._id,
      }
    );

    alert('c???m ??n b???n ???? ????nh gi??');
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
    <div className="dessert">
      <SliderFeatures />{' '}
      {Error !== '' && (
        <div className={Error !== '' ? 'cart_Error active_error' : 'cart_Error'}>
          <AiOutlineClose onClick={handleClickError} />
          <p>{Error}</p>
        </div>
      )}
      <div className="dessert_container">
        <div className="dessert_block">
          <div className="dessert_new" id="section1">
            <div className="new">
              <div className="new_title">
                <span>Tr??ng Mi???ng</span>
              </div>
              {LoadingList ? (
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
        <div ref={closeRef} className={isoverlay ? 'overlay activesOvelayDessert' : 'overlay'}>
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
              <div className="overlay_thumbanil">
                {!detailProduct.image ? (
                  <LoadingFeatures />
                ) : (
                  <Thumbnail detail={detailProduct} setPrice={setPrice} />
                )}
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
