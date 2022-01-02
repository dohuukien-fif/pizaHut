import * as React from 'react';
import SwiperCore, { FreeMode, Navigation, Pagination, Autoplay } from 'swiper';
// import 'swiper/components/navigation/navigation.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper.scss'; // core Swiper
import './styles.scss';
SwiperCore.use([FreeMode, Pagination, Navigation, Autoplay]);
export interface SilderProps {}

export default function Silder(props: SilderProps) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://media.istockphoto.com/photos/piza-and-hot-dog-picture-id510408944?b=1&k=20&m=510408944&s=170667a&w=0&h=eIIfqHjXwpi3RXxY6PGi6qIe5dZDaVq44mpJjR3ddG8="
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.teahub.io/photos/full/33-330733_italy-pizza.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swall.teahub.io/photos/small/33-331908_simple-simons-pizza.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swall.teahub.io/photos/small/32-327924_pizza-background.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swall.teahub.io/photos/small/33-330609_pizza-restaurant.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swall.teahub.io/photos/small/33-330406_photo-wallpaper-black-pizza-italian-pizza-italian-pizza.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
