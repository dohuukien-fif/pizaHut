import React, { useState, useEffect } from 'react';
import './styles.scss';
// import { Link } from 'react-router-dom';

import { Link } from 'react-scroll';
import Silder from '../../../component/sildes';
import PizzaNewList from '../component/pizzaList/pizzaNew';
import PizzaPerferList from '../component/pizzaList/PizzaPerfer';
import PizzaSeafoodList from '../component/pizzaList/PizzaSeafood';
import PizzaMixedList from '../component/pizzaList/PizzaMixed';
import PizzaTraditional from '../component/pizzaList/pizzaTraditional';
import PizzaStuffingList from '../component/pizzaList/PizzaStuffing';
import { dataLisst } from './../../../component/hooks/index';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { PizzaFeaturesProps } from './interface';
import Thumbnail from '../component/overlay/thumbnail';
import Information from '../component/overlay/information';
import LoadingFeaturess from './../../../component/loadingFeatures/index';
import LoadingFeatures from './../../../component/loadingFeatures/index';
import { AiOutlineClose } from 'react-icons/ai';
export default function PizzaFeatures(props: any) {
  const [DataPiza, setDataPiza] = useState<any>(dataLisst);
  const [isScroll, setisScroll] = useState<boolean>(false);
  const [setActiveScroll, setsetActiveScroll] = useState<string>('');
  const [isAccountion, setisAccountion] = useState<boolean>(false);
  const [detailProduct, setdetailProduct] = useState<any>({});
  const [isoverlay, setisoverlay] = useState<boolean>(false);
  const [setPrice, setsetPrice] = useState<any>({
    sizePrice: 0,
    morePrice: 0,
  });
  const [setpriceMore, setsetpriceMore] = useState<any>(0);
  const [Loading, setLoading] = useState<boolean>(false);
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

  useEffect(() => {
    if (window.innerWidth > 1204) {
      setisAccountion(true);
    } else {
      setisAccountion(false);
    }
  }, [window.innerWidth]);

  ///handle Id
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

  //handleSubmit

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
  console.log(setPrice);
  return (
    <div className="pizza">
      <div className="pizza_container">
        <Silder />
        <div className="pizza_block">
          <div className="pizza_title">
            <h2>Pizza</h2>
          </div>
          <div className={isScroll ? `pizza_link ${setActiveScroll}` : 'pizza_link'}>
            <div onClick={() => setisAccountion((x) => !x)} className="mobile_accountion">
              {' '}
              <div className="mobile_wrapper">
                <span>Danh sách Pizza</span>
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
                    Mới
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
                    Công Thức Đặc Biệt
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
                    Hải Sản Cao Cấp
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
                    Thập Cẩm Cao Cấp
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
                    Truyền Thống
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
                    Nhân Nhồi
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <div className="pizza_new" id="section1">
            <div className="new">
              <div className="new_title">
                <span>Mới</span>
              </div>
              <PizzaNewList data={DataPiza} setIdPizza={setIdPizza} />
            </div>
          </div>
          <div className="pizza_perfer" id="section2">
            <div className="perfer">
              <div className="perfer_title">
                <span>Công Thức Đặc biệt</span>
                <div className="perfer_size">
                  <div className="perfer_size-item">
                    <img src="https://dominos.vn/img/icon/pizza-size-3.png" alt="" />
                    <div className="perfer_priceSize">
                      <span>Lớn : </span>
                      <span>329.000đ</span>
                    </div>
                  </div>
                  <div className="perfer_size-item">
                    <img src="https://dominos.vn/img/icon/pizza-size-2.png" alt="" />
                    <div className="perfer_priceSize">
                      <span>Vừa : </span>
                      <span>249.000đ</span>
                    </div>
                  </div>
                  <div className="perfer_size-item">
                    <img src="https://dominos.vn/img/icon/pizza-size-1.png" alt="" />
                    <div className="perfer_priceSize">
                      <span>Nhỏ : </span>
                      <span>169.000đ</span>
                    </div>
                  </div>
                </div>
              </div>
              <PizzaPerferList data={DataPiza} />
            </div>
          </div>
          <div className="pizza_seafood" id="section3">
            <div className="seafood">
              <div className="seafood_title">
                <span>Hải Sản Cao Cấp</span>
                <div className="seafood_size">
                  <div className="seafood_size-item">
                    <img src="https://dominos.vn/img/icon/pizza-size-3.png" alt="" />
                    <div className="seafood_priceSize">
                      <span>Lớn : </span>
                      <span>299.000đ</span>
                    </div>
                  </div>
                  <div className="seafood_size-item">
                    <img src="https://dominos.vn/img/icon/pizza-size-2.png" alt="" />
                    <div className="seafood_priceSize">
                      <span>Vừa : </span>
                      <span>219.000đ</span>
                    </div>
                  </div>
                  <div className="seafood_size-item">
                    <img src="https://dominos.vn/img/icon/pizza-size-1.png" alt="" />
                    <div className="seafood_priceSize">
                      <span>Nhỏ : </span>
                      <span>139.000đ</span>
                    </div>
                  </div>
                </div>
              </div>
              <PizzaSeafoodList data={DataPiza} />
            </div>
          </div>
          <div className="pizza_mixed" id="section4">
            <div className="mixed">
              <div className="mixed_title">
                <span>Thập Cẩm Cao Cấp</span>
                <div className="mixed_size">
                  <div className="mixed_size-item">
                    <img src="https://dominos.vn/img/icon/pizza-size-3.png" alt="" />
                    <div className="mixed_priceSize">
                      <span>Lớn : </span>
                      <span>289.000đ</span>
                    </div>
                  </div>
                  <div className="mixed_size-item">
                    <img src="https://dominos.vn/img/icon/pizza-size-2.png" alt="" />
                    <div className="mixed_priceSize">
                      <span>Vừa : </span>
                      <span>209.000đ</span>
                    </div>
                  </div>
                  <div className="mixed_size-item">
                    <img src="https://dominos.vn/img/icon/pizza-size-1.png" alt="" />
                    <div className="mixed_priceSize">
                      <span>Nhỏ : </span>
                      <span>129.000đ</span>
                    </div>
                  </div>
                </div>
              </div>
              <PizzaMixedList data={DataPiza} />
            </div>
          </div>
          <div className="pizza_traditional" id="section5">
            <div className="traditional">
              <div className="traditional_title">
                <span>Truyền Thống</span>
                <div className="traditional_size">
                  <div className="traditional_size-item">
                    <img src="https://dominos.vn/img/icon/pizza-size-3.png" alt="" />
                    <div className="traditional_priceSize">
                      <span>Lớn : </span>
                      <span>279.000đ</span>
                    </div>
                  </div>
                  <div className="traditional_size-item">
                    <img src="https://dominos.vn/img/icon/pizza-size-2.png" alt="" />
                    <div className="traditional_priceSize">
                      <span>Vừa : </span>
                      <span>199.000đ</span>
                    </div>
                  </div>
                  <div className="traditional_size-item">
                    <img src="https://dominos.vn/img/icon/pizza-size-1.png" alt="" />
                    <div className="traditional_priceSize">
                      <span>Nhỏ : </span>
                      <span>119.000đ</span>
                    </div>
                  </div>
                </div>
              </div>
              <PizzaTraditional data={DataPiza} />
            </div>
          </div>
          <div className="pizza_stuffing" id="section6">
            <div className="stuffing">
              <div className="stuffing_title">
                <span>Nhân Nhồi</span>
                <div className="stuffing_size">
                  <div className="stuffing_size-item">
                    <img src="https://dominos.vn/img/icon/pizza-size-3.png" alt="" />
                    <div className="stuffing_priceSize">
                      <span>Lớn : </span>
                      <span>329.000đ</span>
                    </div>
                  </div>
                  <div className="stuffing_size-item">
                    <img src="https://dominos.vn/img/icon/pizza-size-2.png" alt="" />
                    <div className="stuffing_priceSize">
                      <span>Vừa : </span>
                      <span>249.000đ</span>
                    </div>
                  </div>
                  <div className="stuffing_size-item">
                    <img src="https://dominos.vn/img/icon/pizza-size-1.png" alt="" />
                    <div className="stuffing_priceSize">
                      <span>Nhỏ : </span>
                      <span>169.000đ</span>
                    </div>
                  </div>
                </div>
              </div>
              <PizzaStuffingList data={DataPiza} />
            </div>
          </div>
        </div>
      </div>

      {Loading ? (
        <LoadingFeatures />
      ) : (
        <div className={isoverlay ? 'overlay activeOvelay' : 'overlay'}>
          <div className="overlay_wrapper">
            {/* <h1 onClick={() => setisoverlay(false)}> Xoa</h1> */}
            <div className="overlay_closes">
              <AiOutlineClose onClick={() => setisoverlay(false)} />
            </div>
            <div className="overlay_block">
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
