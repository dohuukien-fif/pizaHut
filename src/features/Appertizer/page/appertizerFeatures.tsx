import React, { useState, useEffect, useRef } from 'react';
import './styles.scss';
// import { Link } from 'react-router-dom';

import { Link } from 'react-scroll';
import Silder from '../../../component/sildes';
import PizzaNewList from '../component/pizzaList/pizzaNew';

import { dataLisst } from './../../../component/hooks/index';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import LoadingFeatures from '../../../component/loadingFeatures';
import { AiOutlineClose, AiOutlineLike, AiOutlineLoading3Quarters } from 'react-icons/ai';
import ProductApi from './../../../api/productApi';
import Information from './../component/overlay/information';
import Thumbnail from './../component/overlay/thumbnail';
import LoadingListss from './../../../component/loadingFeatures/loadingList/index';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../../app/cartRedux';
import axios from 'axios';
import SliderFeatures from '../../../component/sildes/sliderBanner';
export default function AppertizerFeatures(props: any) {
  const dispatch = useDispatch();
  const userInfor = useSelector((state: any) => state.user.current);

  console.log('[[userInformmmmm]]', userInfor);
  const [DataPiza, setDataPiza] = useState<any>([]);
  const [isScroll, setisScroll] = useState<boolean>(false);
  const [setActiveScroll, setsetActiveScroll] = useState<string>('');
  const [isAccountion, setisAccountion] = useState<boolean>(false);
  const [detailProduct, setdetailProduct] = useState<any>({});
  const [isoverlay, setisoverlay] = useState<boolean>(false);
  const [Price, setsetPrice] = useState<any>({
    priceSize: 0,
    priceMore: 0,
  });
  const Errrr = React.useRef<any>();
  const [Loading, setLoading] = useState<boolean>(false);
  const [Loadingappertizer, setLoadingappertizer] = useState<boolean>(true);
  const [setpriceMore, setsetpriceMore] = useState<any>(0);
  const [Error, setError] = React.useState<string>('');
  const [LoadingOverlay, setLoadingOverlay] = useState<boolean>(false);
  const [LoadingList, setLoadingList] = useState<boolean>(true);
  console.log('setPrice', Price);
  const closeRef = useRef(null);
  useEffect(() => {
    (async () => {
      setLoadingappertizer(true);
      try {
        const res: any = await ProductApi.get();
        console.log('des', res.data);
        setDataPiza(res.data);
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
      setError('vui long đăng nhập !');
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
    <div className="appertizer">
      <SliderFeatures />
      {Error !== '' && (
        <div className={Error !== '' ? 'cart_Error active_error' : 'cart_Error'}>
          <AiOutlineClose onClick={handleClickError} />
          <p>{Error}</p>
        </div>
      )}
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
        <div ref={closeRef} className={isoverlay ? 'overlay activesOvelayappertizer' : 'overlay'}>
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
                  <Thumbnail detail={detailProduct} Price={Price} />
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
