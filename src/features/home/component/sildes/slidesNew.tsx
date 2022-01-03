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
import { formatPrice } from './../../../../utils/commen';
// Import Swiper styles

SwiperCore.use([FreeMode, Pagination, Navigation]);
export interface SildesNewProps {}

export default function SildesNew(props: SildesNewProps) {
  return (
    <>
      <h2> Khuyến mãi, Combo</h2>
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
        <SwiperSlide>
          <div className="slide_aside">
            <img
              className="silderl_new"
              src="https://media.istockphoto.com/photos/piza-and-hot-dog-picture-id510408944?b=1&k=20&m=510408944&s=170667a&w=0&h=eIIfqHjXwpi3RXxY6PGi6qIe5dZDaVq44mpJjR3ddG8="
              alt=""
            />
          </div>

          <div className="slide_content">
            <header>
              <div className="slide_top">
                <div className="slide_name">
                  <p>Combo Piza SanWich</p>
                </div>
                <div className="slide_people">
                  <p>Phù hợp 2 - 3 nguòi</p>
                </div>
              </div>
            </header>
            <footer>
              <div className="slide_bottom">
                <div className="slide_price">
                  <span>Giá chỉ từ</span>
                  <span>{formatPrice(5000000)}</span>
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
        <SwiperSlide>
          <div className="slide_aside">
            <img
              className="silderl_new"
              src="https://swall.teahub.io/photos/small/33-331908_simple-simons-pizza.jpg"
              alt=""
            />
          </div>
          <div className="slide_content">
            <header>
              <div className="slide_top">
                <div className="slide_name">
                  <p>Combo Piza SanWich</p>
                </div>
                <div className="slide_people">
                  <p>Phù hợp 2 - 3 nguòi</p>
                </div>
              </div>
            </header>
            <footer>
              <div className="slide_bottom">
                <div className="slide_price">
                  <span>Giá chỉ từ</span>
                  <span>{formatPrice(5000000)}</span>
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
        <SwiperSlide>
          <div className="slide_aside">
            <img
              className="silderl_new"
              src="https://swall.teahub.io/photos/small/32-327924_pizza-background.jpg"
              alt=""
            />
          </div>
          <div className="slide_content">
            <header>
              <div className="slide_top">
                <div className="slide_name">
                  <p>Combo Piza SanWich</p>
                </div>
                <div className="slide_people">
                  <p>Phù hợp 2 - 3 nguòi</p>
                </div>
              </div>
            </header>
            <footer>
              <div className="slide_bottom">
                <div className="slide_price">
                  <span>Giá chỉ từ</span>
                  <span>{formatPrice(5000000)}</span>
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
        <SwiperSlide>
          <div className="slide_aside">
            <img
              className="silderl_new"
              src="https://swall.teahub.io/photos/small/32-327924_pizza-background.jpg"
              alt=""
            />
          </div>
          <div className="slide_content">
            <header>
              <div className="slide_top">
                <div className="slide_name">
                  <p>Combo Piza SanWich</p>
                </div>
                <div className="slide_people">
                  <p>Phù hợp 2 - 3 nguòi</p>
                </div>
              </div>
            </header>
            <footer>
              <div className="slide_bottom">
                <div className="slide_price">
                  <span>Giá chỉ từ</span>
                  <span>{formatPrice(5000000)}</span>
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
        <SwiperSlide>
          <div className="slide_aside">
            <img
              className="silderl_new"
              src="https://media.istockphoto.com/photos/piza-and-hot-dog-picture-id510408944?b=1&k=20&m=510408944&s=170667a&w=0&h=eIIfqHjXwpi3RXxY6PGi6qIe5dZDaVq44mpJjR3ddG8="
              alt=""
            />
          </div>

          <div className="slide_content">
            <header>
              <div className="slide_top">
                <div className="slide_name">
                  <p>Combo Piza SanWich</p>
                </div>
                <div className="slide_people">
                  <p>Phù hợp 2 - 3 nguòi</p>
                </div>
              </div>
            </header>
            <footer>
              <div className="slide_bottom">
                <div className="slide_price">
                  <span>Giá chỉ từ</span>
                  <span>{formatPrice(5000000)}</span>
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
        {/* <SwiperSlide>
     <img src="https://360boutique.vn/wp-content/uploads/2021/12/BANNER-WEB-1.jpg" alt="" />
   </SwiperSlide>
   <SwiperSlide>
     <img src=" https://360boutique.vn/wp-content/uploads/2021/11/web-copy.jpg" alt="" />
   </SwiperSlide>
   <SwiperSlide>
     <img src=" https://360boutique.vn/wp-content/uploads/2021/11/web-copy.jpg" alt="" />
   </SwiperSlide>
   <SwiperSlide>
     <img src=" https://360boutique.vn/wp-content/uploads/2021/11/web-copy.jpg" alt="" />
   </SwiperSlide> */}
      </Swiper>
    </>
  );
}
