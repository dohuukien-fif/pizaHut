import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineClose, AiOutlineLike, AiOutlineLoading3Quarters } from 'react-icons/ai';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';
import { addProduct } from '../../../app/cartRedux';
import Silder from '../../../component/sildes';
import SliderFeatures from '../../../component/sildes/sliderBanner';
import Information from '../component/overlay/information';
import Thumbnail from '../component/overlay/thumbnail';
import PizzaMixedList from '../component/pizzaList/PizzaMixed';
import PizzaNewList from '../component/pizzaList/pizzaNew';
import PizzaPerferList from '../component/pizzaList/PizzaPerfer';
import PizzaSeafoodList from '../component/pizzaList/PizzaSeafood';
import PizzaStuffingList from '../component/pizzaList/PizzaStuffing';
import PizzaTraditional from '../component/pizzaList/pizzaTraditional';
import ProductApi from './../../../api/productApi';
import LoadingFeatures from './../../../component/loadingFeatures/index';
import LoadingListss from './../../../component/loadingFeatures/loadingList/index';
import './styles.scss';

export default function PizzaFeatures(props: any) {
  const [DataPiza, setDataPiza] = useState<any>([]);
  const [isScroll, setisScroll] = useState<boolean>(false);
  const [setActiveScroll, setsetActiveScroll] = useState<string>('');
  const [isAccountion, setisAccountion] = useState<boolean>(false);
  const [detailProduct, setdetailProduct] = useState<any>({});
  const [isoverlay, setisoverlay] = useState<boolean>(false);
  const [setPrice, setsetPrice] = useState<any>({
    sizePrice: 0,
    morePrice: 0,
  });
  const userInfor = useSelector((state: any) => state.user.current);
  const [setpriceMore, setsetpriceMore] = useState<any>(0);
  const [Loading, setLoading] = useState<boolean>(false);
  const [LoadingList, setLoadingList] = useState<boolean>(true);
  const [LoadingOverlay, setLoadingOverlay] = useState<boolean>(false);
  const dispatch = useDispatch();
  const Errrr = React.useRef<any>();
  const [Error, setError] = React.useState<string>('');
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

  useEffect(() => {
    if (window.innerWidth > 1204) {
      setisAccountion(true);
    } else {
      setisAccountion(false);
    }
  }, [window.innerWidth]);

  ///handle Id

  // const paramId: number = Number(location.pathname?.split('/')[2]);
  // useEffect(() => {
  //   const fetchId = async () => {
  //     try {
  //       const res: any = await ProductApi.getById(paramId);

  //       console.log(res);
  //       setdetailProduct(res);

  //       setisoverlay(true);
  //       setLoading(false);
  //     } catch (err) {}
  //   };
  //   fetchId();
  // }, []);
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

  //handleSubmit

  const handleSubmitDispachToCart = (newValue: any, values: string) => {
    if (Object.keys(userInfor).length === 0) {
      return setError('Vui l??ng  ????ng nh???p !');
    }
    setLoadingOverlay(true);
    return new Promise<boolean>((resolve) => {
      setTimeout(() => {
        const action = addProduct({
          id: detailProduct.orderId,
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
  console.log(setPrice);

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
    <div className="pizza">
      <SliderFeatures />
      {Error !== '' && (
        <div className={Error !== '' ? 'cart_Error active_error' : 'cart_Error'}>
          <AiOutlineClose onClick={handleClickError} />
          <p>{Error}</p>
        </div>
      )}
      <div className="pizza_container">
        <div className="pizza_block">
          <div className="pizza_title">
            <h2>Pizza</h2>
          </div>
          <div className={isScroll ? `pizza_link ${setActiveScroll}` : 'pizza_link'}>
            <div onClick={() => setisAccountion((x) => !x)} className="mobile_accountion">
              {' '}
              <div className="mobile_wrapper">
                <span>Danh s??ch Pizza</span>
                <RiArrowDropDownLine className={isAccountion ? 'up' : 'dow'} />
              </div>
            </div>
            {isAccountion && (
              <ul>
                <li>
                  <Link
                    activeClass="active"
                    to="section1"
                    spy={true}
                    smooth={true}
                    offset={-250}
                    duration={500}
                  >
                    M???i
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="section2"
                    spy={true}
                    smooth={true}
                    offset={-232}
                    duration={500}
                  >
                    C??ng Th???c ?????c Bi???t
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="section3"
                    spy={true}
                    smooth={true}
                    offset={-232}
                    duration={500}
                  >
                    H???i S???n Cao C???p
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="section4"
                    spy={true}
                    smooth={true}
                    offset={-232}
                    duration={500}
                  >
                    Th???p C???m Cao C???p
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="section5"
                    spy={true}
                    smooth={true}
                    offset={-232}
                    duration={500}
                  >
                    Truy???n Th???ng
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="section6"
                    spy={true}
                    smooth={true}
                    offset={-232}
                    duration={500}
                  >
                    Nh??n Nh???i
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <div className="pizza_new" id="section1">
            <div className="new">
              <div className="new_title">
                <span>M???i</span>
              </div>
              {LoadingList ? (
                <LoadingListss />
              ) : (
                <PizzaNewList data={DataPiza} setIdPizza={setIdPizza} />
              )}
            </div>
          </div>
          <div className="pizza_perfer" id="section2">
            <div className="perfer">
              <div className="perfer_title">
                <span>C??ng Th???c ?????c bi???t</span>
                <div className="perfer_size">
                  <div className="perfer_size-item">
                    <img src="https://dominos.vn/img/icon/pizza-size-3.png" alt="" />
                    <div className="perfer_priceSize">
                      <span>L???n : </span>
                      <span>329.000??</span>
                    </div>
                  </div>
                  <div className="perfer_size-item">
                    <img src="https://dominos.vn/img/icon/pizza-size-2.png" alt="" />
                    <div className="perfer_priceSize">
                      <span>V???a : </span>
                      <span>249.000??</span>
                    </div>
                  </div>
                  <div className="perfer_size-item">
                    <img src="https://dominos.vn/img/icon/pizza-size-1.png" alt="" />
                    <div className="perfer_priceSize">
                      <span>Nh??? : </span>
                      <span>169.000??</span>
                    </div>
                  </div>
                </div>
              </div>
              {LoadingList ? (
                <LoadingListss />
              ) : (
                <PizzaPerferList data={DataPiza} setIdPizza={setIdPizza} />
              )}
            </div>
          </div>
          <div className="pizza_seafood" id="section3">
            <div className="seafood">
              <div className="seafood_title">
                <span>H???i S???n Cao C???p</span>
                <div className="seafood_size">
                  <div className="seafood_size-item">
                    <img src="https://dominos.vn/img/icon/pizza-size-3.png" alt="" />
                    <div className="seafood_priceSize">
                      <span>L???n : </span>
                      <span>299.000??</span>
                    </div>
                  </div>
                  <div className="seafood_size-item">
                    <img src="https://dominos.vn/img/icon/pizza-size-2.png" alt="" />
                    <div className="seafood_priceSize">
                      <span>V???a : </span>
                      <span>219.000??</span>
                    </div>
                  </div>
                  <div className="seafood_size-item">
                    <img src="https://dominos.vn/img/icon/pizza-size-1.png" alt="" />
                    <div className="seafood_priceSize">
                      <span>Nh??? : </span>
                      <span>139.000??</span>
                    </div>
                  </div>
                </div>
              </div>
              {LoadingList ? (
                <LoadingListss />
              ) : (
                <PizzaSeafoodList data={DataPiza} setIdPizza={setIdPizza} />
              )}
            </div>
          </div>
          <div className="pizza_mixed" id="section4">
            <div className="mixed">
              <div className="mixed_title">
                <span>Th???p C???m Cao C???p</span>
                <div className="mixed_size">
                  <div className="mixed_size-item">
                    <img src="https://dominos.vn/img/icon/pizza-size-3.png" alt="" />
                    <div className="mixed_priceSize">
                      <span>L???n : </span>
                      <span>289.000??</span>
                    </div>
                  </div>
                  <div className="mixed_size-item">
                    <img src="https://dominos.vn/img/icon/pizza-size-2.png" alt="" />
                    <div className="mixed_priceSize">
                      <span>V???a : </span>
                      <span>209.000??</span>
                    </div>
                  </div>
                  <div className="mixed_size-item">
                    <img src="https://dominos.vn/img/icon/pizza-size-1.png" alt="" />
                    <div className="mixed_priceSize">
                      <span>Nh??? : </span>
                      <span>129.000??</span>
                    </div>
                  </div>
                </div>
              </div>
              {LoadingList ? (
                <LoadingListss />
              ) : (
                <PizzaMixedList data={DataPiza} setIdPizza={setIdPizza} />
              )}
            </div>
          </div>
          <div className="pizza_traditional" id="section5">
            <div className="traditional">
              <div className="traditional_title">
                <span>Truy???n Th???ng</span>
                <div className="traditional_size">
                  <div className="traditional_size-item">
                    <img src="https://dominos.vn/img/icon/pizza-size-3.png" alt="" />
                    <div className="traditional_priceSize">
                      <span>L???n : </span>
                      <span>279.000??</span>
                    </div>
                  </div>
                  <div className="traditional_size-item">
                    <img src="https://dominos.vn/img/icon/pizza-size-2.png" alt="" />
                    <div className="traditional_priceSize">
                      <span>V???a : </span>
                      <span>199.000??</span>
                    </div>
                  </div>
                  <div className="traditional_size-item">
                    <img src="https://dominos.vn/img/icon/pizza-size-1.png" alt="" />
                    <div className="traditional_priceSize">
                      <span>Nh??? : </span>
                      <span>119.000??</span>
                    </div>
                  </div>
                </div>
              </div>
              {LoadingList ? (
                <LoadingListss />
              ) : (
                <PizzaTraditional data={DataPiza} setIdPizza={setIdPizza} />
              )}
            </div>
          </div>
          <div className="pizza_stuffing" id="section6">
            <div className="stuffing">
              <div className="stuffing_title">
                <span>Nh??n Nh???i</span>
                <div className="stuffing_size">
                  <div className="stuffing_size-item">
                    <img src="https://dominos.vn/img/icon/pizza-size-3.png" alt="" />
                    <div className="stuffing_priceSize">
                      <span>L???n : </span>
                      <span>329.000??</span>
                    </div>
                  </div>
                  <div className="stuffing_size-item">
                    <img src="https://dominos.vn/img/icon/pizza-size-2.png" alt="" />
                    <div className="stuffing_priceSize">
                      <span>V???a : </span>
                      <span>249.000??</span>
                    </div>
                  </div>
                  <div className="stuffing_size-item">
                    <img src="https://dominos.vn/img/icon/pizza-size-1.png" alt="" />
                    <div className="stuffing_priceSize">
                      <span>Nh??? : </span>
                      <span>169.000??</span>
                    </div>
                  </div>
                </div>
              </div>
              {LoadingList ? (
                <LoadingListss />
              ) : (
                <PizzaStuffingList data={DataPiza} setIdPizza={setIdPizza} />
              )}
            </div>
          </div>
        </div>
      </div>

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
                  <Thumbnail detail={detailProduct} setPrice={setPrice} />
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
