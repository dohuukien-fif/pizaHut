import * as React from 'react';
import SwiperCore, { FreeMode, Navigation, Pagination } from 'swiper';
// import 'swiper/components/navigation/navigation.scss';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import './stylesNew.scss';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { formatPrice } from '../../utils';
// import { formatPrice } from './../../../../utils/commen';
// Import Swiper styles
import ProductApi from './../../api/productApi';
import { dataLisst } from '../hooks';
import { HomeFeaturesProps } from '../../features/home/page/interface';
SwiperCore.use([FreeMode, Pagination, Navigation]);
export interface SildesNewProps {}

export default function SildesNew(props: SildesNewProps) {
  const [DataPiza, setDataPiza] = React.useState<any>([]);
  const [LoadingList, setLoadingList] = React.useState<boolean>(true);
  React.useEffect(() => {
    (async () => {
      setLoadingList(true);
      try {
        const res: any = await ProductApi.get();
        console.log('des', res);
        setDataPiza(res);
        setLoadingList(false);
      } catch (err) {}
    })();
  }, []);
  return (
    <>
      <p> Khuyến mãi, Combo</p>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        // freeMode={true}
        navigation
        // pagination={{
        //   clickable: true,
        //   // clickable: true,
        // }}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          400: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="mySwipers"
        // data-swiper-autoplay="2000"
      >
        {DataPiza.filter((e: any) => e.category === 'piza').map(
          (item: HomeFeaturesProps, index: number) => (
            <SwiperSlide>
              <div className="slide_aside">
                <img className="silderl_new" src={item.image} alt="" />
              </div>

              <div className="slide_content">
                <header>
                  <div className="slide_top">
                    <div className="slide_name">
                      <p>{item.name}</p>
                    </div>
                    <div className="slide_people">
                      <p>{item.detail}</p>
                    </div>
                  </div>
                </header>
                <footer>
                  <div className="slide_bottom">
                    <div className="slide_price">
                      <span>Giá chỉ từ</span>
                      <span>{formatPrice(item.price)}</span>
                    </div>
                    <div className="slide_btn">
                      <button>
                        Mua ngay <AiOutlineArrowRight />
                      </button>
                    </div>
                  </div>
                </footer>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </>
  );
}
